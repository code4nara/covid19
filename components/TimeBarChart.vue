<template>
  <data-view :title="title" :date="date" :title-id="titleId">
    <template v-slot:button>
      <data-selector v-model="dataKind" />
    </template>
    <v-layout column>
      <bar :chart-data="displayData" :options="displayOption" :height="240" />
      <date-select-slider
        :chart-data="chartData"
        :value="[0, sliderMax]"
        :slider-max="sliderMax"
        @sliderInput="sliderUpdate"
      />
    </v-layout>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<style></style>

<script>
import dayjs from 'dayjs'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import DateSelectSlider from '@/components/DateSelectSlider.vue'

export default {
  components: {
    DataView,
    DataSelector,
    DataViewBasicInfoPanel,
    DateSelectSlider
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'time-bar-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    defaultdatakind: {
      type: String,
      required: false,
      default: 'transition'
    }
  },
  data() {
    return {
      dataKind: this.defaultdatakind,
      graphRange: [0, this.chartData.length - 1]
    }
  },
  computed: {
    sliderMax() {
      if (!this.chartData || this.chartData.length === 0) {
        return 1
      }
      return this.chartData.length - 1
    },
    displayCumulativeRatio() {
      const lastDay = this.chartData.slice(-1)[0].cumulative
      const lastDayBefore = this.chartData.slice(-2)[0].cumulative
      return this.formatDayBeforeRatio(lastDay - lastDayBefore)
    },
    displayTransitionRatio() {
      const lastDay = this.chartData.slice(-1)[0].transition
      const lastDayBefore = this.chartData.slice(-2)[0].transition
      return this.formatDayBeforeRatio(lastDay - lastDayBefore)
    },
    displayInfo() {
      if (this.dataKind === 'transition') {
        return {
          lText: `${this.chartData.slice(-1)[0].transition.toLocaleString()}`,
          sText: `実績値（前日比：${this.displayTransitionRatio} ${this.unit}）`,
          unit: this.unit
        }
      }
      const lastDateString = dayjs(this.chartData.slice(-1)[0].label).format(
        'M/DD'
      )
      return {
        lText: this.chartData[
          this.chartData.length - 1
        ].cumulative.toLocaleString(),
        sText: `${lastDateString} 累計値（前日比：${this.displayCumulativeRatio} ${this.unit}）`,
        unit: this.unit
      }
    },
    displayData() {
      if (this.dataKind === 'transition') {
        return {
          labels: this.chartData.map(d => {
            return d.label
          }),
          datasets: [
            {
              label: this.dataKind,
              data: this.chartData.map(d => {
                return d.transition
              }),
              backgroundColor: '#85005d',
              borderWidth: 0
            }
          ]
        }
      }
      return {
        labels: this.chartData.map(d => {
          return d.label
        }),
        datasets: [
          {
            label: this.dataKind,
            data: this.chartData.map(d => {
              return d.cumulative
            }),
            backgroundColor: '#85005d',
            borderWidth: 0
          }
        ]
      }
    },
    displayOption() {
      const unit = this.unit
      return {
        animation: false,
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem) {
              const labelText =
                parseInt(tooltipItem.value).toLocaleString() + unit
              return labelText
            },
            title(tooltipItem, data) {
              return dayjs(data.labels[tooltipItem[0].index]).format('M月D日')
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              type: 'time',
              offset: true,
              time: {
                tooltipFormat: 'MM/DD',
                unit: 'day',
                unitStepSize: 1,
                displayFormats: {
                  day: 'D'
                },
                round: 'day'
              },
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                min: this.chartData[this.graphRange[0]].label,
                max: this.chartData[this.graphRange[1]].label,
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                minRotation: 0
              }
            },
            {
              id: 'month',
              type: 'time',
              stacked: true,
              time: {
                unit: 'month',
                unitStepSize: 1,
                displayFormats: {
                  month: 'YYYY年M月'
                },
                round: 'day'
              },
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                min: this.chartData[this.graphRange[0]].label,
                max: this.chartData[this.graphRange[1]].label,
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
                gridLines: {
                  display: true
                }
              }
            }
          ],
          yAxes: [
            {
              location: 'bottom',
              stacked: true,
              gridLines: {
                display: true,
                color: '#E5E5E5'
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 8,
                fontColor: '#808080'
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    sliderUpdate(sliderValue) {
      this.graphRange = sliderValue
    },
    formatDayBeforeRatio(dayBeforeRatio) {
      const dayBeforeRatioLocaleString = dayBeforeRatio.toLocaleString()
      switch (Math.sign(dayBeforeRatio)) {
        case 1:
          return `+${dayBeforeRatioLocaleString}`
        case -1:
          return `${dayBeforeRatioLocaleString}`
        default:
          return `${dayBeforeRatioLocaleString}`
      }
    }
  }
}
</script>
