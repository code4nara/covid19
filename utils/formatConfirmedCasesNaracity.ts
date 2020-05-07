type DataType = {
  attr: '検査実施人数'
  value: number
  children: [
    {
      attr: '感染者数累計'
      value: number
      children: [
        {
          attr: '現在感染者数'
          value: number
          children: [
            {
              attr: '入院中'
              value: number
              children: [
                {
                  attr: '重症'
                  value: number
                }
              ]
            },
            {
              attr: '宿泊療養'
              value: number
            },
            {
              attr: '自宅療養'
              value: number
            }
          ]
        },
        {
          attr: '退院等累計'
          value: number
        },
        {
          attr: '死亡'
          value: number
        }
      ]
    }
  ]
}

type ConfirmedCasesType = {
  検査実施人数: number
  感染者数累計: number
  現在感染者数: number
  入院中: number
  重症: number
  宿泊療養: number
  自宅療養: number
  退院等累計: number
  死亡: number
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  const formattedData: ConfirmedCasesType = {
    検査実施人数: data.value,
    感染者数累計: data.children[0].value,
    現在感染者数: data.children[0].children[0].value,
    入院中: data.children[0].children[0].children[0].value,
    重症: data.children[0].children[0].children[0].children[0].value,
    自宅療養: data.children[0].children[0].children[2].value,
    宿泊療養: data.children[0].children[0].children[1].value,
    退院等累計: data.children[0].children[1].value,
    死亡: data.children[0].children[2].value
  }
  return formattedData
}
