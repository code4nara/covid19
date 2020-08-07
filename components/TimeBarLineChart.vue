<template>
  <div>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
      :plugins="plugins"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import dayjs from 'dayjs'
import Enumerable from 'linq'
import { ChartLegendLabelItem, ChartLegendOptions } from 'chart.js'
// import DateSelectSlider from '@/components/DateSelectSlider.vue'

// グラフの種類
export type GraphKind = 'bar' | 'line'

// 凡例の並び順
export type LegendOrderKind = 'asc' | 'desc'

// Y軸の種類（左 or 右）
export type YAxisKind = 'y-axis-left' | 'y-axis-right'

// 折れ線グラフの線種（実践 or 点線）
export type LineStyleKind = 'solid' | 'dashed'

// Y軸の設定
export type YAxisSetting = {
  min?: number // 最小値（既定値は自動）
  max?: number // 最大値（既定値は自動）
  suggestedMin?: number // 推奨最小値（既定値は自動）
  suggestedMax?: number // 推奨最大値（既定値は自動）
  step?: number // グリッド線刻み値（既定値は自動）
  unit: string // 単位
  visible: boolean // 表示 or 非表示
}

// X軸の日付（日次は string, 週次は [開始日, 終了日] の配列
export type DateRange = string | string[]

// グラフデータ群
export type GraphData = {
  dates: DateRange[] // 日付群
  datasets: GraphDataSet[] // グラフ群
}

// グラフデータセット
export type GraphDataSet = {
  title: string // グラフタイトル（パネルタイトル）
  type: GraphKind // グラフ種別
  values: number[] // グラフ値の配列（X軸の日付分）
  tooltipValues?: number[] // ツールチップへの表示値（既定値は values と同じ）
  unit: string // 単位（右上の情報表示に使用）
  color?: string // グラフの色（既定値は棒、折れ線それぞれの標準色）
  colors?: string[] // 日付毎の固有色。棒グラフのみ有効。（未指定時は color またはそれぞれの標準色）
  lineStyle?: LineStyleKind // 折れ線グラフの線種（既定値は solid）
  yAxisKind?: YAxisKind // Y軸の位置（既定値は左）
  visible?: boolean // 表示 or 非表示（既定値は表示）
  legendVisible?: boolean // 凡例の表示（既定値は表示）
  order?: number // グラフの表示順（値が小さい方が手前）
  tags?: any[] // values 以外に日付ごとに保持したい値はここに
}

@Component({
  components: {
    //    DateSelectSlider
  }
})
export default class TimeBarLineChart extends Vue {
  // グラフID 何に使われる？
  @Prop()
  public chartId?: string

  // グラフデータ
  @Prop()
  public chartData!: GraphData

  // 凡例の並び順（既定値は昇順＜datasets の order 順＞）
  @Prop()
  public legendOrderKind?: LegendOrderKind

  // 左のY軸設定（既定値は標準＜人＞の設定）
  @Prop()
  public yAxisLeftSetting?: YAxisSetting

  // 右のY軸設定（既定値はなし）
  @Prop()
  public yAxisRightSetting?: YAxisSetting

  // 凡例クリックでグラフON/OFFの無効化（既定値は false）
  @Prop()
  public disableLegendClick?: boolean

  private defaultYAxisLeftSetting: YAxisSetting = {
    suggestedMin: 0,
    unit: '人',
    visible: true
  } as YAxisSetting

  private get displayYAxisLeftSetting(): YAxisSetting {
    return this.yAxisLeftSetting ?? this.defaultYAxisLeftSetting
  }

  private get displayYAxisSettings(): Map<YAxisKind, YAxisSetting> {
    return new Map<YAxisKind, YAxisSetting>([
      ['y-axis-left', this.displayYAxisLeftSetting],
      ['y-axis-right', this.displayYAxisRightSetting]
    ])
  }

  private readonly defaultYAxisRightSetting: YAxisSetting = {
    visible: false
  } as YAxisSetting

  private get displayYAxisRightSetting(): YAxisSetting {
    const setting = this.yAxisRightSetting ?? this.defaultYAxisRightSetting
    return setting
  }

  private readonly defaultBarColor = '#bd3f4c'
  private readonly defaultLineColor = '#0070C0'

  private readonly plugins = [
    {
      // 日付ごとに色が変化する(GraphDataSet.colors が設定されている)場合、
      // 凡例色が同調してしまうのでそれを回避（固定化）
      beforeDraw: (c: any) => {
        const legends: Chart.ChartLegendLabelItem[] = c.legend.legendItems

        for (const legend of legends) {
          if (legend.datasetIndex == null) {
            continue
          }
          const ds = this.chartData.datasets[legend.datasetIndex]
          if (ds.colors == null) {
            continue
          }
          if (ds.type === 'bar') {
            legend.fillStyle = ds.color ?? this.defaultBarColor
            legend.strokeStyle = undefined
          } else if (ds.type === 'line') {
            legend.fillStyle = ds.color ?? this.defaultLineColor
            legend.strokeStyle = undefined
          }
        }
      }
    }
  ]

  private buildBarDataSets = (dataset: GraphDataSet): Chart.ChartDataSets => {
    return {
      type: 'bar',
      yAxisID: dataset.yAxisKind ?? 'y-axis-left',
      label: dataset.title, // 凡例名
      data: dataset.values,
      backgroundColor:
        dataset.colors != null
          ? dataset.colors
          : dataset.color ?? this.defaultBarColor,
      order: dataset.order ?? 0,
      lineTension: 0
    }
  }

  private buildLineDataSets = (dataset: GraphDataSet): Chart.ChartDataSets => {
    return {
      type: 'line',
      yAxisID: dataset.yAxisKind ?? 'y-axis-left',
      label: dataset.title, // 凡例名
      data: dataset.values,
      borderColor: dataset.color ?? this.defaultLineColor,
      borderWidth: 3,
      borderDash: dataset.lineStyle === 'dashed' ? [4, 3] : [],
      pointRadius: 0,
      pointHitRadius: 2,
      fill: false,
      order: dataset.order ?? 0,
      lineTension: 0
    }
  }

  get displayData(): Chart.ChartData {
    const datasets = this.displayGraphValues.map(dataset => {
      if (dataset.type === 'bar') {
        return this.buildBarDataSets(dataset)
      } else {
        return this.buildLineDataSets(dataset)
      }
    })

    return {
      labels: this.displayGraphLabels,
      datasets
    }
  }

  private get displayOption(): Chart.ChartOptions {
    const option = {
      tooltips: {
        displayColors: false,
        callbacks: {
          label: (tooltipItem: Chart.ChartTooltipItem, _: Chart.ChartData) => {
            if (tooltipItem.index === undefined) {
              return ''
            }

            return Enumerable.from(this.chartData.datasets)
              .select((dataset, index) => {
                const toolTipValues =
                  this.chartData.datasets![index].tooltipValues ??
                  this.chartData.datasets![index].values

                const value =
                  toolTipValues[tooltipItem.index! + this.displaySpan[0]]
                const label = dataset.title
                const unit = dataset.unit

                const formatValue = (x => {
                  if (x === Math.floor(x)) {
                    return x
                  } else {
                    return Math.round(x * 10) / 10
                  }
                })(value)

                return {
                  order: dataset?.order ?? 0,
                  label: `${label}: ${formatValue} ${unit}`,
                  visible: (dataset.visible ?? true) && !isNaN(value)
                }
              })
              .where(d => d.visible)
              .orderBy(d =>
                (this.legendOrderKind ?? 'asc') === 'asc' ? d.order : -d.order
              )
              .select(d => d.label)
              .toArray()
          },
          title: (tooltipItems: Chart.ChartTooltipItem[]) => {
            try {
              const date = this.chartData.dates[
                tooltipItems[0].index! + this.displaySpan[0]
              ]

              return (typeof date === 'string' ? [date] : date)
                .map(d => dayjs(d).format('M月D日'))
                .join('～')
            } catch (_) {
              return 'error'
            }
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display:
          this.chartData.datasets.filter(d => d.visible ?? true).length > 1,
        reverse: (this.legendOrderKind ?? 'asc') === 'desc',
        labels: {
          filter: (item: ChartLegendLabelItem) => {
            if (item.datasetIndex == null) {
              return false
            }
            const ds = this.chartData.datasets[item.datasetIndex]
            return ds.legendVisible ?? true
          }
        }
      },
      scales: {
        xAxes: [
          {
            id: 'day',
            stacked: true,
            gridLines: {
              display: false
            },
            ticks: {
              fontSize: 9,
              maxTicksLimit: 20,
              fontColor: '#808080'
            }
          }
        ],
        yAxes: [
          {
            id: 'y-axis-left',
            stacked: true,
            gridLines: {
              display: true,
              color: '#E5E5E5'
            },
            ticks: {
              fontColor: '#808080',
              min: this.displayYAxisLeftSetting.min,
              max: this.displayYAxisLeftSetting.max,
              suggestedMin: this.displayYAxisLeftSetting.suggestedMin,
              suggestedMax: this.displayYAxisLeftSetting.suggestedMax,
              stepSize: this.displayYAxisLeftSetting.step,
              callback: (value: any) => {
                return `${value}${this.displayYAxisLeftSetting.unit}`
              }
            }
          },
          {
            id: 'y-axis-right',
            display:
              this.displayYAxisRightSetting.visible &&
              this.chartData.datasets.find(
                ds => ds.yAxisKind === 'y-axis-right' && (ds.visible ?? true)
              ) != null,
            type: 'linear',
            position: 'right',
            ticks: {
              fontColor: '#808080',
              min: this.displayYAxisRightSetting.min,
              max: this.displayYAxisRightSetting.max,
              suggestedMin: this.displayYAxisRightSetting.suggestedMin,
              suggestedMax: this.displayYAxisRightSetting.suggestedMax,
              stepSize: this.displayYAxisRightSetting.step,
              callback: (value: any) => {
                return `${value}${this.displayYAxisRightSetting.unit}`
              }
            }
          }
        ]
      }
    }

    if (this.disableLegendClick ?? false) {
      const legendOpt: ChartLegendOptions = option.legend
      legendOpt.onClick = undefined
    }

    return option
  }

  private readonly defaultSpan: number = 60

  private displaySpan: number[] = [0, 0]

  private spanMin: number = 0

  private get spanMax(): number {
    return this.chartData.dates.length - 1
  }

  private readonly sliderLabelFormatter = (
    date: DateRange,
    isFrom: boolean
  ) => {
    if (!date) {
      return ''
    } else if (typeof date === 'string') {
      return dayjs(date).format('M/D')
    } else {
      return date.map(date => dayjs(date).format('M/D'))[isFrom ? 0 : 1]
    }
  }

  private formatDateLabel = (date: string | string[]): string => {
    return (typeof date === 'string' ? [date] : date)
      .map(d => dayjs(d).format('M/D'))
      .join('～')
  }

  constructor() {
    super()

    this.displaySpan = [
      this.chartData.dates.length - this.defaultSpan,
      this.chartData.dates.length - 1
    ]
  }

  private get displayGraphLabels(): string[] {
    const chartData = this.chartData.dates
    const lowerIndex = this.displaySpan[0]
    const lower = lowerIndex < chartData.length ? lowerIndex : 0
    const upperIndex = this.displaySpan[1]
    const upper =
      upperIndex < chartData.length ? upperIndex : chartData.length - 1

    const spanedDates = this.chartData.dates.slice(lower, upper + 1)

    return spanedDates.map(date => this.formatDateLabel(date))
  }

  private get displayGraphValues(): GraphDataSet[] {
    const chartData = this.chartData.dates
    const lowerIndex = this.displaySpan[0]
    const lower = lowerIndex < chartData.length ? lowerIndex : 0
    const upperIndex = this.displaySpan[1]
    const upper =
      upperIndex < chartData.length ? upperIndex : chartData.length - 1

    return this.chartData.datasets
      .filter(d => d.visible ?? true)
      .map(dataset => {
        const cloned = Object.assign({}, dataset)
        cloned.values = dataset.values.slice(lower, upper + 1)
        if (dataset.colors != null) {
          cloned.colors = dataset.colors.slice(lower, upper + 1)
        }
        return cloned
      })
  }

  public sliderUpdate(sliderValue: number[]) {
    this.displaySpan = sliderValue
  }

  @Watch('chartData')
  onChartDataChanged(newValue: GraphData, _: GraphData) {
    // console.debug(
    //   `${this.constructor.name}:onDataKindChanged. new, old`,
    //   newValue,
    //   oldValue
    // )

    this.displaySpan = [
      newValue.dates.length - this.defaultSpan,
      newValue.dates.length - 1
    ]
  }
}
</script>
