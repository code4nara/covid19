export type PatientsSummaryDaily = {
  日付: string
  小計: number
}

export type PatientsSummaryWeekly = {
  開始日: string
  終了日: string
  小計: number
}

export type DataDaily = {
  // eslint-disable-next-line camelcase
  patients_summary: {
    date: string
    data: PatientsSummaryDaily[]
  }

  // eslint-disable-next-line camelcase
  main_summary_history: {
    date: string
    data: MainSummaryDataType[]
  }

  // eslint-disable-next-line camelcase
  inspection_persons_summary: {
    date: string
    data: InspectionPersonsSummaryDaily[]
  }
}

export type InspectionsSummaryDaily = {
  日付: string
  小計: number
  合算?: string
}

export type InspectionsSummaryWeekly = {
  開始日: string
  終了日: string
  小計: number
  合算?: string
}

export type DataWeekly = {
  // eslint-disable-next-line camelcase
  patients_summary: {
    date: string
    data: PatientsSummaryWeekly[]
  }
  // eslint-disable-next-line camelcase
  inspections_summary: {
    date: string
    data: InspectionsSummaryWeekly[]
  }
}

export type MainSummaryDataType = {
  更新日時: string
  検査実施人数: number
  陽性患者数: number
  入院中: number
  軽症中等症: number
  重症: number
  転院: number
  施設入所: number
  死亡: number
  退院: number
}

export type InspectionPersonsSummaryDaily = {
  日付: string
  検査人数?: number
  陽性者数?: number
  非確定?: string
}

export type InspectionPersonsSummaryWeelky = {
  開始日: string
  終了日: string
  検査人数?: number
  陽性者数?: number
  非確定?: string
}
