<?php
require __DIR__.'/vendor/autoload.php';
use Carbon\Carbon;
use Tightenco\Collect\Support\Collection;

/**
 * 日付のコレクションオブジェクトを作成
 */
function makeDateArray($begin) : Collection{
  $begin = Carbon::parse($begin);
  $dates = [];
  while(true) {

    if ($begin->diffInDays(Carbon::now()) == 0) {
      break;
    } else {
      $dates[$begin->addDay()->format('Y-m-d').'T08:00:00.000Z'] =0;

    }
  }
  return new Collection($dates);
}

/**
 * Y/m/d H:i:sの日付をY/m/d H:iに変換
 */
function formatDate(string $date) :string
{
  // excelのシリアル値の場合の加工処理
  if (preg_match('#t(\d+)#', $date, $match)) {
    $date = formatSerialDate($match[1]);
  }

  if (preg_match('#(\d+/\d+/\d+) (\d+:\d+:\d+)#', $date, $matches)) {
    $carbon = Carbon::parse($matches[1].' '.$matches[2]);
    return $carbon->format('Y/m/d H:i');
  } else {
    throw new Exception('Can not parse date:'.$date);
  }

}

/**
 * excelのシリアル値を日付に変換する
 */
function formatSerialDate(string $serialDate) :string
{
  return date('Y/m/d H:i:s', ($serialDate - 25569) * 60 * 60 * 24);

}

/**
 * excelファイルの内容を連想配列に変換
 */
function xlsxToArray(string $path, string $sheet_name, string $range, $header_range = null)
{
  $reader = new PhpOffice\PhpSpreadsheet\Reader\Xlsx();
  $spreadsheet = $reader->load($path);
  $sheet = $spreadsheet->getSheetByName($sheet_name);
  $data =  new Collection($sheet->rangeToArray($range));
  $data = $data->map(function ($row) {
    return new Collection($row);
  });
  if ($header_range !== null) {
      $headers = xlsxToArray($path, $sheet_name, $header_range)[0];
      // TODO check same columns length
      return $data->map(function ($row) use($headers){
          return $row->mapWithKeys(function ($cell, $idx) use($headers){

            return [
              $headers[$idx] => $cell
            ];
        });
      });
  }

  return $data;
}

/**
 * 陽性患者のリストを作成
 */
function readPatients() : array
{
  $excelDir = __DIR__.'/downloads/patients.xlsx';
  $sheetName = 'Table 1';
  $data = xlsxToArray($excelDir, $sheetName, 'A3:H100', 'A2:H2');
  return [
    'date' => xlsxToArray($excelDir, $sheetName, 'G1')[0][0], // データ更新日
    'data' => $data->filter(function ($row) {
      return $row['発表日'];
    })->map(function ($row) {
      $date = formatDate($row['発表日']);
      $carbon = Carbon::parse($date);
      $row['発表日'] = $carbon->format('Y-m-d').'T08:00:00.000Z';
      $row['date'] = $carbon->format('Y-m-d');
      $row['w'] = $carbon->format('w');
      $row['short_date'] = $carbon->format('m/d');
      return $row;
    })
  ];
}

/**
 * 日付ごとの小計リストに変換
 */
function createSummary(array $patients) {
  $dates = makeDateArray('2020-01-23');

  return [
    'date' => $patients['date'],
    'data' => $dates->map(function ($val, $key) {
      return [
        '日付' => $key,
        '小計' => $val
      ];
    })->merge($patients['data']->groupBy('発表日')->map(function ($group, $key) {
      return [
        '日付' => $key,
        '小計' => $group->count()
      ];
    }))->values()
  ];

}

$patients = readPatients();
$patients_summary = createSummary($patients);

$data = compact([
  'patients',
  'patients_summary',
]);
$lastUpdate = '';

$lastTime = 0;
foreach ($data as $key => &$arr) {
    $arr['date'] = formatDate($arr['date']);
    $timestamp = Carbon::parse()->format('YmdHis');
    if ($lastTime <= $timestamp) {
      $lastTime = $timestamp;
      $lastUpdate = Carbon::parse($arr['date'])->addDay()->format('Y/m/d 8:00');
    }
}
$data['lastUpdate'] = $lastUpdate;

file_put_contents(__DIR__.'/../data/data.json', json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK));
