<template>
  <data-view
    :title="displayTitle"
    title-id="inspection-count-chart"
    :date="date"
    :source-text="'奈良県のオープンデータを利用'"
    :source-url="'http://www.pref.nara.jp/55168.htm'"
    :remarks="remarks"
  >
    <time-bar-line-chart
      chart-id="inspection-count-chart"
      :chart-data="chartData"
      legend-order-kind="desc"
      :y-axis-left-setting="yAxisLeftSetting"
      :y-axis-right-setting="yAxisRightSetting"
      disable-legend-click="true"
    />

    <div>
      <ul class="remarks">
        <!-- eslint-disable vue/no-v-html -->
        <li
          v-for="remarks_text in remarks"
          :key="remarks_text"
          v-html="remarks_text"
        />
        <!-- eslint-disable vue/no-v-html -->
      </ul>
    </div>

    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-title="displayInfo.lTitle"
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<style lang="scss" scoped>
ul.remarks {
  font-size: 0.75rem;
  list-style-type: '※ ';
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import dayjs, { Dayjs } from 'dayjs'
import * as Enumerable from 'linq'
import DataView from '@/components/DataView.vue'
// import DataSelector, { SelectorItem } from '@/components/DataSelector_addweek.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
// import DateSelectSlider from '@/components/DateSelectSlider.vue'
import TimeBarLineChart, {
  GraphData,
  YAxisSetting
} from '@/components/TimeBarLineChart.vue'
import {
  InspectionPersonsSummaryDaily,
  InspectionPersonsSummaryWeelky
} from '~/utils/types'

type DataKind = 'daily-transition' | 'weekly-transition' | 'daily-cumulative'

type DisplayInfo = {
  lTitle: string
  lText: string
  sText: string
  unit: string
}

@Component({
  components: {
    DataView,
    //    DataSelector,
    DataViewBasicInfoPanel,
    //    DateSelectSlider,
    TimeBarLineChart
  }
})
export default class InspectionPersonsChart extends Vue {
  @Prop()
  public date?: string

  @Prop()
  public dailyData?: InspectionPersonsSummaryDaily[]

  @Prop()
  public weeklyData?: InspectionPersonsSummaryWeelky[]

  private readonly yAxisLeftSetting: YAxisSetting = {
    min: 0,
    unit: '人',
    visible: true
  } as YAxisSetting

  private readonly yAxisRightSetting: YAxisSetting = {
    suggestedMin: 0,
    suggestedMax: 20,
    step: 5,
    unit: '%',
    visible: true
  } as YAxisSetting

  private get remarks(): string[] {
    /*    
    const youseiritsu =
      this.dataKind === 'weekly-transition'
        ? '「陽性率」とは、週の陽性者数／週の検査人数です'
        : '「陽性率」とは、陽性者数(過去7日間)／検査人数(過去7日間)です'
*/
    return [
      '「陽性率＝陽性者数／新たな検査対象者数」で計算し７日間の移動平均で表示',
      '計算例：　4/30の陽性率＝（4/24～4/30の各日の陽性率の計）÷７',
      '計算に用いる「陽性者数」「新たな検査対象者数」は結果判明日ベースで整理'
    ]
  }

  private readonly showSelector = true
  private dataKind: DataKind = 'daily-transition'
  /*
  private readonly dataKinds = [
    { key: 'weekly-transition', label: '週別' } as SelectorItem,
    { key: 'daily-transition', label: '日別' } as SelectorItem
  ]
*/
  private readonly chartDataSet = new Map<DataKind, GraphData>()

  private get displayTitle(): string {
    return `陽性率・検査実施人数`
  }

  private formatDayBeforeRatio = (dayBeforeRatio: any) => {
    const dayBeforeRatioLocaleString = dayBeforeRatio?.toLocaleString() ?? '-'
    const prefix = Math.sign(dayBeforeRatio) === 1 ? '+' : ''
    return `${prefix}${dayBeforeRatioLocaleString}`
  }

  private get displayDiffValue(): string {
    const dataset1 = this.chartData.datasets[3]
    const dataset2 = this.chartData.datasets[4]
    if (
      dataset1.values.slice(-2)[0] === undefined &&
      dataset2.values.slice(-2)[0] === undefined
    ) {
      return '-'
    }
    const lastDay =
      Math.round(
        (dataset1.values.slice(-1)[0] ?? dataset2.values.slice(-1)[0]) * 10
      ) / 10
    const lastDayBefore =
      Math.round(
        (dataset1.values.slice(-2)[0] ?? dataset2.values.slice(-2)[0]) * 10
      ) / 10

    if (lastDay == null || lastDayBefore == null) {
      return '-'
    }
    return this.formatDayBeforeRatio(lastDay - lastDayBefore)
  }

  private get displayInfo(): DisplayInfo {
    if ((this.chartData?.datasets?.length ?? 0) <= 0) {
      return {
        lText: '-',
        sText: '-',
        unit: ''
      } as DisplayInfo
    }

    const dataset1 = this.chartData.datasets[3]
    const dataset2 = this.chartData.datasets[4]
    const latestValue =
      Math.round(
        (dataset1.values.slice(-1)[0] ?? dataset2.values.slice(-1)[0]) * 10
      ) / 10
    const latestValueText = latestValue.toLocaleString() ?? '-'
    const latestValueAppend =
      dataset1.tags == null ? '' : dataset1.tags.slice(-1)[0] ? '' : ''
    const diffLabel =
      this.dataKind === 'weekly-transition' ? '前週比' : '前日比'
    const latestDate = this.formatDateLabel(this.chartData.dates.slice(-1)[0])
    return {
      lTitle: '陽性率',
      lText: `${latestValueText}`,
      sText: `${latestDate} 時点${latestValueAppend}（${diffLabel}：${this.displayDiffValue} ポイント）`,
      unit: `${dataset1.unit}`
    }
  }

  private formatDateLabel = (date: string | string[]): string => {
    return (typeof date === 'string' ? [date] : date)
      .map(d => dayjs(d).format('M/D'))
      .join('～')
  }

  constructor() {
    super()

    this.chartDataSet.set(
      'daily-transition',
      this.buildDailyTransitionGraphData()
    )
    this.chartDataSet.set(
      'weekly-transition',
      this.buildWeeklyTransitionGraphData()
    )
  }

  private get chartData(): GraphData {
    const data = this.chartDataSet.get(this.dataKind)
    if (data) {
      return data
    } else {
      return {
        dates: [],
        datasets: []
      } as GraphData
    }
  }

  public static makeAveragePositivePerPatients = (
    data: InspectionPersonsSummaryDaily[]
  ): Enumerable.IEnumerable<{
    date: Dayjs
    positives: number
    persons: number
    average: number | undefined
    uncertain: boolean
  }> => {
    const source = Enumerable.from(data).reverse()
    return source
      .select(d => d['日付'])
      .select((_, index) => source.skip(index).take(7))
      .select(d => {
        const first = d.first()
        /*
        let ave
        if (d.count() === 7) {
          const grp = d.where(
            d => d['陽性者数'] !== undefined && d['検査人数'] !== undefined
          )
          const sumPositives = grp.sum(e => Number(e['陽性者数']))
          const sumTotal = grp.sum(e => Number(e['検査人数']))
          ave =
            sumTotal === 0
              ? undefined
              : Math.round((sumPositives / sumTotal) * 1000) / 10
        }
 */

        return {
          date: dayjs(dayjs(first['日付']).format('YYYY-MM-DD')), // 時刻を切り落とす
          positives: Number(first['陽性者数']),
          persons: Number(first['検査人数']),
          average: Number(first['陽性率']) * 100,
          uncertain: d.any(x => x['非確定'] !== '')
        }
      })
      .reverse()
  }

  private buildDailyTransitionGraphData = (): GraphData => {
    const now = dayjs()
    const rows = InspectionPersonsChart.makeAveragePositivePerPatients(
      this.dailyData ?? []
    )
      .where(d => d.date < now)
      .select(d => {
        let negatives: number | undefined
        if (d.persons !== undefined && d.positives !== undefined) {
          negatives = d.persons - d.positives
        }

        return {
          date: d.date.format('YYYY-MM-DD'),
          persons: d.persons,
          positives: d.positives,
          negatives,
          average: d.average,
          uncertain: d.uncertain ? 1 : 0,
          change: false
        }
      })
      // 公式値と参考値の折れ線グラフをつなげるために、公式→参考または参考→公式に切り替わる直前日を change=true にする処理
      // リストを逆転させて日付１と２（次は２と３…）のペアを作り、
      // 非確定フラグの XOR で変更を取得して change に設定
      // 最後にリストを再逆転させて日付昇順に戻して完成
      .reverse()
      .scan((pre, cur) => {
        cur.change = ((pre?.uncertain ?? 0) ^ cur.uncertain) === 1
        return cur
      })
      .reverse()

    return {
      dates: rows.select(d => d.date).toArray(),
      // 検査人数と陽性率は、公式値と参考値で色の異なる２つの dataset を用意
      // 公式値側は公式値のみ（!d.uncertain）が格納された values, tooltipValues を作成し、
      // 参考値側は参考値のみ（d.uncertain）が格納された values, tooltipValues を作成。
      // 参考値側の凡例は非表示に設定。凡例クリックを無効にしている理由１
      datasets: [
        {
          type: 'bar',
          title: '検査人数',
          yAxisKind: 'y-axis-left',
          unit: '人',
          values: rows
            .select(d => (!d.uncertain ? d.negatives : undefined))
            .toArray(),
          tooltipValues: rows
            .select(d => (!d.uncertain ? d.persons : undefined))
            .toArray(),
          color: '#D99694',
          order: 5
        },
        {
          type: 'bar',
          title: '検査人数', // 参考値
          yAxisKind: 'y-axis-left',
          unit: '人',
          // 検査人数ｎ人中、陽性者数ｍ人、という表現にしたいため、
          // 棒グラフには、陰性者数(negatives)を積み上げるが、
          // 凡例やツールチップでは検査人数(persons)として振る舞う
          // 凡例クリックを無効にしている理由２
          values: rows
            .select(d => (d.uncertain ? d.negatives : undefined))
            .toArray(),
          tooltipValues: rows
            .select(d => (d.uncertain ? d.persons : undefined))
            .toArray(),
          color: '#D99694',
          order: 4,
          legendVisible: false
        },
        {
          type: 'bar',
          title: '陽性者数',
          yAxisKind: 'y-axis-left',
          unit: '人',
          values: rows.select(d => d.positives).toArray(),
          order: 3
        },
        {
          type: 'line',
          title: '陽性率',
          yAxisKind: 'y-axis-right',
          unit: '%',
          values: rows
            .select(d => (!d.uncertain || d.change ? d.average : undefined))
            .toArray(),
          tooltipValues: rows
            .select(d => (!d.uncertain ? d.average : undefined))
            .toArray(),
          tags: rows.select(d => d.uncertain).toArray(),
          order: 2
        },
        {
          type: 'line',
          title: '陽性率', // 参考値
          yAxisKind: 'y-axis-right',
          unit: '%',
          values: rows
            .select(d => (d.uncertain || d.change ? d.average : undefined))
            .toArray(),
          tooltipValues: rows
            .select(d => (d.uncertain ? d.average : undefined))
            .toArray(),
          lineStyle: 'dashed',
          order: 1,
          legendVisible: false
        }
      ]
    } as GraphData
  }

  private buildWeeklyTransitionGraphData = (): GraphData => {
    const now = dayjs()
    const rows = Enumerable.from(this.weeklyData ?? [])
      .where(
        d =>
          dayjs(d['開始日']) < now && dayjs(d['開始日']) >= dayjs('2020-03-02')
      )
      .select(d => {
        return {
          date: [
            dayjs(d['開始日']).format('YYYY-MM-DD'),
            dayjs(d['終了日']).format('YYYY-MM-DD')
          ],
          persons: d['検査人数'],
          positives: d['陽性者数'],
          negatives: (d['検査人数'] ?? 0) - (d['陽性者数'] ?? 0),
          average: ((d['陽性者数'] ?? 0) / (d['検査人数'] ?? 0)) * 100, // FIXME 0除算未考慮
          uncertain: d['非確定'] !== '' ? 1 : 0,
          change: false
        }
      })
      // 公式値と参考値の折れ線グラフをつなげるために、公式→参考または参考→公式に切り替わる直前日を change=true にする処理
      // リストを逆転させて日付１と２（次は２と３…）のペアを作り、
      // 非確定フラグの XOR で変更を取得して change に設定
      // 最後にリストを再逆転させて日付昇順に戻して完成
      .reverse()
      .scan((pre, cur) => {
        cur.change = ((pre?.uncertain ?? 0) ^ cur.uncertain) === 1
        return cur
      })
      .reverse()

    return {
      dates: rows.select(d => d.date).toArray(),
      // 検査人数と陽性率は、公式値と参考値で色の異なる２つの dataset を用意
      // 公式値側は公式値のみ（!d.uncertain）が格納された values, tooltipValues を作成し、
      // 参考値側は参考値のみ（d.uncertain）が格納された values, tooltipValues を作成。
      // 参考値側の凡例は非表示に設定。
      datasets: [
        {
          type: 'bar',
          title: '検査人数',
          yAxisKind: 'y-axis-left',
          unit: '人',
          values: rows
            .select(d => (d.uncertain ? undefined : d.negatives))
            .toArray(),
          tooltipValues: rows
            .select(d => (d.uncertain ? undefined : d.persons))
            .toArray(),
          color: '#D99694',
          order: 5
        },
        {
          type: 'bar',
          title: '検査人数', // 参考値
          yAxisKind: 'y-axis-left',
          unit: '人',
          values: rows
            .select(d => (!d.uncertain ? undefined : d.negatives))
            .toArray(),
          tooltipValues: rows
            .select(d => (!d.uncertain ? undefined : d.persons))
            .toArray(),
          color: '#D99694',
          order: 4,
          legendVisible: false
        },
        {
          type: 'bar',
          title: '陽性者数',
          yAxisKind: 'y-axis-left',
          unit: '人',
          values: rows.select(d => d.positives).toArray(),
          order: 3
        },
        {
          type: 'line',
          title: '陽性率',
          yAxisKind: 'y-axis-right',
          unit: '%',
          values: rows
            .select(d => (!d.uncertain || d.change ? d.average : undefined))
            .toArray(),
          tooltipValues: rows
            .select(d => (!d.uncertain ? d.average : undefined))
            .toArray(),
          tags: rows.select(d => d.uncertain).toArray(),
          order: 2
        },
        {
          type: 'line',
          title: '陽性率', // 参考値
          yAxisKind: 'y-axis-right',
          unit: '%',
          values: rows
            .select(d => (d.uncertain || d.change ? d.average : undefined))
            .toArray(),
          tooltipValues: rows
            .select(d => (d.uncertain ? d.average : undefined))
            .toArray(),
          lineStyle: 'dashed',
          order: 1,
          legendVisible: false
        }
      ]
    } as GraphData
  }
}
</script>
