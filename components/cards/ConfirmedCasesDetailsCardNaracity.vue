<template>
  <v-col cols="12" md="6" class="DataCard">
    <confirmed-cases-card-naracity
      :title="$t('入院者数の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="DataNaracity.main_summary.date"
      :url="'http://www.pref.nara.jp/'"
      :source-text="sourceText"
      :source-url="sourceUrl"
    >
      <confirmed-cases-table-naracity
        :aria-label="$t('入院患者数の状況')"
        v-bind="confirmedCasesNaracity"
      />
    </confirmed-cases-card-naracity>
  </v-col>
</template>

<script>
// import mainSummary from '@/data/main_summary.json'
// import DataNaracity from '@/data/data_naracity.json'
import DataNaracity from '@/data/naracity.json'
import formatConfirmedCasesNaracity from '@/utils/formatConfirmedCasesNaracity'
import ConfirmedCasesCardNaracity from '@/components/ConfirmedCasesCardNaracity.vue'
import ConfirmedCasesTableNaracity from '@/components/ConfirmedCasesTableNaracity.vue'

export default {
  components: {
    ConfirmedCasesCardNaracity,
    ConfirmedCasesTableNaracity
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
    // 検査陽性者の状況
    const confirmedCasesNaracity = formatConfirmedCasesNaracity(
      DataNaracity.main_summary
    )

    // mainSummary,
    const data = {
      DataNaracity,
      confirmedCasesNaracity
    }
    return data
  }
}
</script>
