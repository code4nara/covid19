<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('入院者数と残り病床数')"
      :title-id="'patients-and-sickbeds'"
      :chart-data="sickbedsGraph"
      :date="Data.sickbeds_summary.date"
      :unit="$t('床')"
      :info="$t('総病床数')"
      :url="'http://www.pref.nara.jp/'"
      :source-text="sourceText"
      :source-url="sourceUrl"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import CircleChart from '@/components/CircleChart.vue'
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
    // 年代別陽性患者数
    const sickbedsGraph = formatVariableGraph(Data.sickbeds_summary.data)

    const data = {
      Data,
      sickbedsGraph
    }
    return data
  }
}
</script>
