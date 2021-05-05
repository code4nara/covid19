<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('現在感染者の各状況の割合')"
      :title-id="'patients-status'"
      :chart-data="sickbedsGraph"
      :date="Data.patientstat_summary.date"
      :unit="$t('人')"
      :info="$t('現在感染者数合計')"
      :url="'http://www.pref.nara.jp/'"
      :source-text="sourceText"
      :source-url="sourceUrl"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
// import CircleChart from '@/components/CircleChart.vue'
import CircleChart from '@/components/CircleChartMan.vue'
import formatVariableGraph from '@/utils/formatVariableGraph'

export default {
  components: {
    CircleChart
  },
  props: {
    sourceText: {
      type: String,
      required: false,
      default: ''
    },
    sourceUrl: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    // 入院患者数
    // const sickbedsGraph = formatVariableGraph(Data.sickbeds_summary.data)
    const sickbedsGraph = formatVariableGraph(Data.patientstat_summary.data)

    const data = {
      Data,
      sickbedsGraph
    }
    return data
  }
}
</script>
