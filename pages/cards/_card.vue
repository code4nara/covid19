<template>
  <div>
    <confirmed-cases-details-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <confirmed-cases-details-card-naracity
      v-if="this.$route.params.card == 'details-of-confirmed-cases-nacacity'"
    />
    <!--<tested-cases-details-card
      v-else-if="this.$route.params.card == 'details-of-tested-cases'"
    />
    <confirmed-cases-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <confirmed-cases-attributes-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
    />
    <tested-number-card
      v-else-if="this.$route.params.card == 'number-of-tested'"
    />-->

    <!--<inspection-persons-number-card
      v-else-if="this.$route.params.card == 'number-of-inspection-persons'"
    />
    <telephone-advisory-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-telephone-advisory-center'
      "
    />
    <consultation-desk-reports-number-card
      v-else-if="
        this.$route.params.card ==
          'number-of-reports-to-covid19-consultation-desk'
      "
    />
    <metro-card
      v-else-if="
        this.$route.params.card == 'predicted-number-of-toei-subway-passengers'
      "
    />
    <agency-card v-else-if="this.$route.params.card == 'agency'" />
    <shinjuku-visitors-card
      v-else-if="this.$route.params.card == 'shinjuku-visitors'"
    />
    <chiyoda-visitors-card
      v-else-if="this.$route.params.card == 'chiyoda-visitors'"
    />-->
    <patients-and-sickbeds
      v-else-if="this.$route.params.card == 'patients-and-sickbeds'"
    />
  </div>
</template>

<script>
// import mainSummary from '@/data/main_summary.json'
import Data from '@/data/data.json'
// import DataNaracity from '@/data/data_naracity.json'
// import inspectionsSummary from '@/data/inspections_summary.json'
// import patients from '@/data/patients.json'
// import MetroData from '@/data/metro.json'
// import agencyData from '@/data/agency.json'
// import ShinjukuData from '@/data/13104_daily_visitors.json'
// import ChiyodaData from '@/data/13101_daily_visitors.json' */
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesDetailsCardNaracity from '@/components/cards/ConfirmedCasesDetailsCardNaracity.vue'
// import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
// import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
// import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
// import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
// import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
// import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
// import MetroCard from '@/components/cards/MetroCard.vue'
// import AgencyCard from '@/components/cards/AgencyCard.vue'
// import ShinjukuVisitorsCard from '@/components/cards/ShinjukuVisitorsCard.vue'
// import ChiyodaVisitorsCard from '@/components/cards/ChiyodaVisitorsCard.vue'
// import sickbedsSummary from '@/data/sickbeds_summary.json'
import PatientsAndSickbeds from '@/components/cards/PatientsAndSickbeds.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesDetailsCardNaracity,
    // TestedCasesDetailsCard,
    // ConfirmedCasesNumberCard,
    // ConfirmedCasesAttributesCard,
    // TestedNumberCard,
    /* InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard,
    ShinjukuVisitorsCard,
    ChiyodaVisitorsCard */
    PatientsAndSickbeds
  },
  data() {
    let title, updatedAt
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('入院者数の状況')
        // updatedAt = inspectionsSummary.last_update
        // updatedAt = mainSummary.last_update
        updatedAt = Data.main_summary.date
        break
      /* case 'details-of-tested-cases':
        title = this.$t('検査実施状況')
        updatedAt = Data.inspection_status_summary.date
        break */
      /*
      case 'number-of-confirmed-cases':
        title = this.$t('陽性者数')
        updatedAt = patients.last_update
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性者の属性')
        updatedAt = patients.last_update
        break
      case 'number-of-tested':
        title = this.$t('検査実施数')
        updatedAt = inspectionsSummary.last_update
        break
	    */
      /* case 'number-of-inspection-persons':
        title = this.$t('検査実施人数')
        updatedAt = Data.inspection_persons.date
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        title = this.$t('新型コロナコールセンター相談件数')
        updatedAt = Data.contacts.date
        break
      case 'number-of-reports-to-covid19-consultation-desk':
        title = this.$t('新型コロナ受診相談窓口相談件数')
        updatedAt = Data.querents.date
        break
      case 'predicted-number-of-toei-subway-passengers':
        title = this.$t('都営地下鉄の利用者数の推移')
        updatedAt = MetroData.date
        break
      case 'agency':
        title = this.$t('都庁来庁者数の推移')
        updatedAt = agencyData.date
        break
      case 'shinjuku-visitors':
        title = this.$t('新宿区エリアの来訪者数の推移（参考値）')
        updatedAt = ShinjukuData.date
        break
      case 'chiyoda-visitors':
        title = this.$t('千代田区エリアの来訪者数の推移（参考値）')
        updatedAt = ChiyodaData.date
        break */
      case 'patients-and-sickbeds':
        title = this.$t('入院者数と残り病床数')
        updatedAt = Data.sickbeds_summary.date
        break
    }

    const data = {
      title,
      updatedAt
    }
    return data
  }
}
</script>
