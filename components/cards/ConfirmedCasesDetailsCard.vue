<template>
  <v-col cols="12" md="6" class="DataCard">
    <confirmed-cases-card
      :title="$t('入院者数の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="Data.main_summary.date"
      :url="'http://www.pref.nara.jp/'"
      :source-text="sourceText"
      :source-url="sourceUrl"
    >
      <confirmed-cases-table
        :aria-label="$t('入院患者数の状況')"
        v-bind="confirmedCases"
      />
    </confirmed-cases-card>
  </v-col>
</template>

<script>
// import mainSummary from '@/data/main_summary.json'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import ConfirmedCasesCard from '@/components/ConfirmedCasesCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'

export default {
  components: {
    ConfirmedCasesCard,
    ConfirmedCasesTable
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
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    // mainSummary,
    const data = {
      Data,
      confirmedCases
    }
    return data
  }
}
</script>
