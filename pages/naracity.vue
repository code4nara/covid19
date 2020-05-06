<template>
  <div class="MainPagconfire">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <!--
    <whats-new class="mb-4" :items="newsItems" />
    -->
    <v-row class="DataBlock">
      <confirmed-cases-details-card-naracity
        :source-url="'https://www.city.nara.lg.jp/site/coronavirus/'"
        :source-text="'奈良市提供のデータを利用'"
      />
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="陽性者数"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="Data.patients_summary.date"
          :unit="'人'"
          :source-url="
            'https://www.city.nara.lg.jp/corona/opendata_covid19_naracity.xlsx'
          "
          :source-text="'奈良市提供のデータを利用'"
          :note="
            '管外検査を含まないため検査陽性者の状況などと異なります。陽性結果が確認日のため報道発表日付と異なります。'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="'陽性者の属性'"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.patients.date"
          :info="sumInfoOfPatients"
          :source-url="
            'https://www.city.nara.lg.jp/corona/opendata_covid19_naracity.xlsx'
          "
          :source-text="'奈良市提供のデータを利用'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="PCR検査実施数"
          :title-id="'number-of-tested'"
          :chart-id="'time-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :unit="'件'"
          :source-url="
            'https://www.city.nara.lg.jp/corona/opendata_covid19_naracity.xlsx'
          "
          :source-text="'奈良市提供のデータを利用'"
        />
      </v-col>
      <!--
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナコールセンター相談件数"
          :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
          :chart-id="'time-bar-chart-contacts'"
          :chart-data="contactsGraph"
          :date="Data.contacts.date"
          :unit="'件'"
          :url="''"
        />
      </v-col>
      -->
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナ相談件数"
          :title-id="'number-of-reports-to-covid19-consultation-desk'"
          :chart-id="'time-bar-chart-querents'"
          :chart-data="querentsGraph"
          :date="Data.querents.date"
          :unit="'件'"
          :url="''"
          :source-url="
            'https://www.city.nara.lg.jp/corona/opendata_covid19_naracity.xlsx'
          "
          :source-text="'奈良市提供のデータを利用'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import dayjs from 'dayjs'

import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
// import WhatsNew from '@/components/WhatsNew.vue'
import DataTable from '@/components/DataTable.vue'

import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import ConfirmedCasesDetailsCardNaracity from '@/components/cards/ConfirmedCasesDetailsCardNaracity.vue'

import Data from '@/data/data_naracity.json'
import DataCity from '@/data/naracity.json'
import News from '@/data/news_naracity.json'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    // WhatsNew,
    ConfirmedCasesDetailsCardNaracity,
    DataTable
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者リスト
    const patientsTable = formatTable(Data.patients.data)
    // 退院者グラフ
    // const dischargesGraph = formatGraph(Data.discharges_summary.data)

    // 帰国者・接触者電話相談センター相談件数
    // コールセンター相談件数
    // const contactsGraph = formatGraph(Data.contacts.data)

    // 相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    // 検査実施日別グラフ
    const inspectionsGraph = formatGraph(Data.inspections_summary.data)

    //
    const sumInfoOfPatients = {
      // lText: Data.main_summary.children[0].陽性患者数 ,
      // attr陽性患者数 の値を直接取得
      lText: Data.main_summary.children[0].value,
      sText: dayjs(Date.parse(Data.main_summary.date)).format('M/D') + '現在',
      unit: '人'
    }

    const data = {
      Data,
      DataCity,
      patientsTable,
      patientsGraph,
      querentsGraph,
      inspectionsGraph,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '奈良市内の最新感染動向',
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head() {
    return {
      title: '奈良市内の最新感染動向'
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
