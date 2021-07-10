<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      企業の皆様・はたらく皆様へ
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
    </div>
  </div>
</template>
<script lang="ts">
import TextCard from '@/components/TextCard.vue'
export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: '新型肺炎の影響を受けた中小・小規模事業者への金融支援について',
	  link: 'http://www.pref.nara.jp/item/222881.htm',
          body:
            '新型肺炎(新型コロナウイルス)の影響を受けた中小企業・小規模事業者を県制度融資「経営環境変化・災害対策資金」の対象に追加します。'
        },
        {
          title: '新型コロナウイルス感染症により影響を受けている中小企業・小規模事業者への金融支援について(セーフティネット保証4号の指定)',
          link: 'http://www.pref.nara.jp/item/224077.htm#moduleid17510',
          body:
            '新型コロナウイルス感染症により影響を受けている中小企業・小規模事業者への資金繰り支援措置として、国が奈良県に対しセーフティネット保証4号(※)を発動しました。これに伴い県制度融資「セーフティネット対策資金(4号)」をご利用いただけます。'
        },
        {
          title: '新型コロナウイルス感染症対策　経営相談窓口（奈良県）',
          link: 'http://www.pref.nara.jp/55413.htm#015',
          body:
            '新型コロナウイルス感染症に関連して、労働問題で困ったことがあれば、ご相談ください。'
        }
      ]
    }
  },
  head() {
    return {
      title: '企業の皆様・はたらく皆様へ'
    }
  }
}
</script>
<style lang="scss">
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
a {
  @include text-link();
}
</style>
