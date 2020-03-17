<template>
  <div class="About">
    <h2 class="About-Heading">
      他自治体の対策サイト
    </h2>
    <TextCard title="北海道" link="https://stopcovid19.hokkaido.dev/" />
    <TextCard title="埼玉県" link="https://stopcovid19.e-toda.jp/" />
    <TextCard title="東京都" link="https://stopcovid19.metro.tokyo.lg.jp/" />
    <TextCard title="神奈川県" link="https://www.pref.kanagawa.jp/osirase/1369/" />
    <TextCard title="山梨県" link="https://stopcovid19.yamanashi.dev/" />
    <TextCard title="長野県" link="https://stop-covid19-nagano.netlify.com/" />
    <TextCard title="岐阜県" link="https://covid19-gifu.netlify.com/" />
    <TextCard title="愛知県" link="https://stopcovid19.code4.nagoya/" />
    <TextCard title="三重県" link="https://covid19-mie.netlify.com/" />
    <TextCard title="兵庫県" link="https://stop-covid19-hyogo.org/" />
    <TextCard title="岡山県" link="https://covid19-okayama.netlify.com/" />
    <TextCard title="愛媛県" link="https://ehime-covid19.com/" />
    <TextCard title="高知県" link="https://covid19-kochi.netlify.com/" />
    <TextCard title="福岡県" link="https://stopcovid19.codeforfukuoka.org/" />
    <TextCard title="長崎県" link="https://stopcovid19-nagasaki.netlify.com/" />
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: '他自治体の対策サイト'
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}

a {
  @include text-link();
}
</style>
