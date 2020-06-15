import dayjs, { Dayjs } from 'dayjs'
import Enumerable from 'linq'
import {
  PatientsSummaryDaily,
  DataWeekly,
  PatientsSummaryWeekly,
  InspectionsSummaryDaily,
  InspectionsSummaryWeekly,
  InspectionPersonsSummaryDaily,
  InspectionPersonsSummaryWeelky as InspectionPersonsSummaryWeekly
} from '../utils/types'

// 週次化の週の開始日と終了日
type WeekRange = {
  from: Dayjs
  to: Dayjs
}

// 週の各曜日（0:日曜日 ～ 6:土曜日）
type YoubiKind = 0 | 1 | 2 | 3 | 4 | 5 | 6

// 週次化された感染者群
type WeeklizedPatientsSummary = {
  from: Dayjs
  to: Dayjs
  data: PatientsSummaryDaily[]
}

// 週次化された検査件数データ群
type WeeklizedInspectionsSummary = {
  from: Dayjs
  to: Dayjs
  data: InspectionsSummaryDaily[]
}

// 週次化された検査人数データ群
type WeeklizedInspectionPersonsSummary = {
  from: Dayjs
  to: Dayjs
  data: InspectionPersonsSummaryDaily[]
}

export default (Data: any): DataWeekly => {
  const chunkStartYoubi = 1 // 週次化の開始曜日<0:日曜日、1:月曜日…6:土曜日>

  const patientsSummaryWeekly = weeklizePatientsSummary(
    Data.patients_summary.data as PatientsSummaryDaily[],
    chunkStartYoubi
  )

  const inspectionsSummaryWeekly = weeklizeInspectionsSummary(
    Data.inspections_summary.data as InspectionsSummaryDaily[],
    chunkStartYoubi
  )

  const inspectionPersonsSummaryWeekly = weeklizeInspectionPersonsSummary(
    Data.inspection_persons_summary.data as InspectionPersonsSummaryDaily[],
    chunkStartYoubi
  )

  return {
    patients_summary: {
      date: Data.patients_summary.date,
      data: patientsSummaryWeekly
    },
    inspections_summary: {
      date: Data.inspections_summary.date,
      data: inspectionsSummaryWeekly
    },
    inspection_persons_summary: {
      date: Data.inspection_persons_summary.date,
      data: inspectionPersonsSummaryWeekly
    }
  } as DataWeekly
}

// 感染者一覧を週次化する
const weeklizePatientsSummary = (
  patientsSummaryDaily: PatientsSummaryDaily[],
  chunkStartYoubi: YoubiKind
): PatientsSummaryWeekly[] => {
  const beginDate = dayjs(patientsSummaryDaily[0]['日付']) // dayjs('2020-01-25')
  const lastDate = dayjs(
    patientsSummaryDaily[patientsSummaryDaily.length - 1]['日付']
  ) // dayjs('2020-05-04')

  const weekRanges = makeWeekRanges(beginDate, lastDate, chunkStartYoubi)

  const weeklizedPatientsSummaries: WeeklizedPatientsSummary[] = weekRanges.map(
    x => ({ from: x.from, to: x.to, data: [] })
  )

  for (const cur of patientsSummaryDaily) {
    const dt = dayjs(cur['日付'])
    const foundIndex = weeklizedPatientsSummaries.findIndex(
      x => x.from <= dt && dt < x.to
    )

    if (foundIndex >= 0) {
      weeklizedPatientsSummaries[foundIndex].data.push(cur)
    }
  }

  const patientsSummaryWeekly = weeklizedPatientsSummaries.map(week => {
    const sum = week.data.reduce((pre, x) => pre + Number(x['小計']), 0)

    return {
      開始日: week.from.format('YYYY-MM-DD'),
      終了日: week.to.format('YYYY-MM-DD'),
      小計: sum
    } as PatientsSummaryWeekly
  })

  // 開始日、終了日の調整
  patientsSummaryWeekly[0]['開始日'] = patientsSummaryDaily[0]['日付']
  patientsSummaryWeekly[patientsSummaryWeekly.length - 1]['終了日'] =
    patientsSummaryDaily[patientsSummaryDaily.length - 1]['日付']

  return patientsSummaryWeekly
}

// 検査数を週次化する
const weeklizeInspectionsSummary = (
  inspectionsSummaryDaily: InspectionsSummaryDaily[],
  chunkStartYoubi: YoubiKind
): PatientsSummaryWeekly[] => {
  const firstData = inspectionsSummaryDaily[0]
  let beginDate = dayjs(firstData['日付']) // dayjs('2020-01-25')
  if (firstData['合算']) {
    beginDate = beginDate.add(-7, 'day')
  }
  const lastDate = dayjs(
    inspectionsSummaryDaily[inspectionsSummaryDaily.length - 1]['日付']
  ) // dayjs('2020-05-04')

  const weekRanges = makeWeekRanges(beginDate, lastDate, chunkStartYoubi)

  const weeklizedInspectionsSummaries: WeeklizedInspectionsSummary[] = weekRanges.map(
    x => ({ from: x.from, to: x.to, data: [] })
  )

  for (const cur of inspectionsSummaryDaily) {
    const dt = dayjs(cur['日付'])
    const foundIndex = weeklizedInspectionsSummaries.findIndex(
      x => x.from <= dt && dt < x.to
    )

    if (foundIndex >= 0) {
      weeklizedInspectionsSummaries[foundIndex].data.push(cur)
    }
  }

  const inspectionsSummaryWeekly = weeklizedInspectionsSummaries.map(week => {
    const sum = week.data.reduce((pre, x) => pre + Number(x['小計']), 0)

    return {
      開始日: week.from.format('YYYY-MM-DD'),
      終了日: week.to.format('YYYY-MM-DD'),
      小計: sum
    } as InspectionsSummaryWeekly
  })

  // 開始日、終了日の調整
  inspectionsSummaryWeekly[0]['開始日'] = '2020-01-30' // 初回データは 1月30日（木曜日）～3月1日（日曜日） の合算
  inspectionsSummaryWeekly[inspectionsSummaryWeekly.length - 1]['終了日'] =
    inspectionsSummaryDaily[inspectionsSummaryDaily.length - 1]['日付']

  return inspectionsSummaryWeekly
}

// 検査人数を週次化する
const weeklizeInspectionPersonsSummary = (
  inspectionPersonsSummaryDaily: InspectionPersonsSummaryDaily[],
  chunkStartYoubi: YoubiKind
): InspectionPersonsSummaryWeekly[] => {
  const firstData = inspectionPersonsSummaryDaily[0]
  const beginDate = dayjs(firstData['日付']) // dayjs('2020-01-25')
  const lastDate = dayjs(
    inspectionPersonsSummaryDaily[inspectionPersonsSummaryDaily.length - 1][
      '日付'
    ]
  ) // dayjs('2020-05-04')

  const weekRanges = makeWeekRanges(beginDate, lastDate, chunkStartYoubi)

  const weeklizedInspectionsSummaries: WeeklizedInspectionPersonsSummary[] = weekRanges.map(
    x => ({ from: x.from, to: x.to, data: [] })
  )

  for (const cur of inspectionPersonsSummaryDaily) {
    const dt = dayjs(cur['日付'])
    const foundIndex = weeklizedInspectionsSummaries.findIndex(
      x => x.from <= dt && dt < x.to
    )

    if (foundIndex >= 0) {
      weeklizedInspectionsSummaries[foundIndex].data.push(cur)
    }
  }

  const inspectionsSummaryWeekly = weeklizedInspectionsSummaries.map(week => {
    const sumPersons = Enumerable.from(week.data).sum(x =>
      Number(x['検査人数'])
    )
    const sumPositives = Enumerable.from(week.data).sum(x =>
      Number(x['陽性者数'])
    )
    const hasUncertain = Enumerable.from(week.data).any(
      x => x['非確定'] === '1'
    )

    return {
      開始日: week.from.format('YYYY-MM-DD'),
      終了日: week.to.format('YYYY-MM-DD'),
      検査人数: sumPersons,
      陽性者数: sumPositives,
      非確定: hasUncertain ? '1' : ''
    } as InspectionPersonsSummaryWeekly
  })

  // 開始日、終了日の調整
  inspectionsSummaryWeekly[0]['開始日'] =
    inspectionPersonsSummaryDaily[0]['日付']
  inspectionsSummaryWeekly[inspectionsSummaryWeekly.length - 1]['終了日'] =
    inspectionPersonsSummaryDaily[inspectionPersonsSummaryDaily.length - 1][
      '日付'
    ]

  return inspectionsSummaryWeekly
}

// 開始日、終了日、開始曜日を指定して、日付範囲のリストを作る
// 例：
// 開始:2020/02/06、終了:2020/02/21、開始曜日:月(1)
//  ↓
// [{ 2/3,  2/9  },
//  { 2/10, 2/16 },
//  { 2/17, 2/23 }]
const makeWeekRanges = (
  beginDate: Dayjs,
  lastDate: Dayjs,
  chunkStartYoubi: YoubiKind
): WeekRange[] => {
  const beginYoubiOffset = (7 - (chunkStartYoubi - beginDate.day())) % 7
  // 例 chunkStartYoubi, beginDate -> offset
  //    1(月), 0(日) -> 6
  //    1(月), 1(月) -> 0
  //    1(月), 2(火) -> 1
  //    3(水), 2(火) -> 6
  //    3(水), 3(水) -> 0
  //    3(水), 4(水) -> 1
  const beginStartWeekDate = beginDate.subtract(beginYoubiOffset, 'day')
  const diffWeeks = lastDate.diff(beginStartWeekDate, 'week')

  const weeks: WeekRange[] = []
  for (let index = 0; index <= diffWeeks; index++) {
    const startDt = beginStartWeekDate.add(index, 'week')
    const endDt = beginStartWeekDate.add(index + 1, 'week').add(-1, 'second')
    weeks.push({ from: startDt, to: endDt })
  }
  return weeks
}
