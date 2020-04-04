<template>
  <div class="About">
    <h2 class="About-Heading">
      他自治体の対策サイト
    </h2>
    <TextCard title="北海道" link="https://stopcovid19.hokkaido.dev/" />
    <TextCard title="青森県" link="https://covid19.codeforaomori.org/" />
    <TextCard title="岩手県" link="https://iwate.stopcovid19.jp/" />
    <TextCard title="宮城県" link="https://miyagi.stopcovid19.jp/" />
    <TextCard title="秋田県" link="https://covid19-akita.netlify.com/" />
    <TextCard title="福島県" link="https://fukushima-covid19.web.app/" />
    <TextCard title="茨城県" link="https://covid19-ibaraki.netlify.com/" />
    <TextCard title="栃木県" link="https://covid19-tochigi.netlify.com/" />
    <TextCard title="群馬県" link="https://covid19-gunma.com/" />
    <TextCard title="埼玉県" link="https://stopcovid19.e-toda.jp/" />
    <TextCard title="東京都" link="https://stopcovid19.metro.tokyo.lg.jp/" />
    <TextCard title="千葉県" link="https://covid19.civictech.chiba.jp/" />
    <TextCard title="千葉県" link="https://chiba-covid19.mypl.net/" />
    <TextCard
      title="神奈川県"
      link="https://www.pref.kanagawa.jp/osirase/1369/"
    />
    <TextCard title="新潟県" link="https://niigata.stopcovid19.jp/" />
    <TextCard title="富山県" link="https://stopcovid19-toyama.netlify.com/" />
    <TextCard title="石川県" link="https://ishikawa-covid19.netlify.com/" />
    <TextCard title="福井県" link="https://covid19-fukui.bosai-signal.jp/" />
    <TextCard title="山梨県" link="https://stopcovid19.yamanashi.dev/" />
    <TextCard title="長野県" link="https://stop-covid19-nagano.netlify.com/" />
    <TextCard title="静岡県" link="https://stopcovid19-shizuoka.netlify.com/" />
    <TextCard title="岐阜県" link="https://covid19-gifu.netlify.com/" />
    <TextCard title="愛知県" link="https://stopcovid19.code4.nagoya/" />
    <TextCard title="三重県" link="https://covid19-mie.netlify.com/" />
    <TextCard title="滋賀県" link="https://stopcovid19.pref.shiga.jp/" />
    <TextCard title="京都府" link="https://stopcovid19-kyoto.netlify.com/" />
    <TextCard title="京都府" link="https://kyoto.stopcovid19.jp/" />
    <TextCard title="大阪府" link="https://covid19-osaka.info/" />
    <TextCard title="兵庫県" link="https://stop-covid19-hyogo.org/" />
    <TextCard title="和歌山県" link="https://covid19-wakayama.netlify.com/" />
    <TextCard title="島根県" link="https://covid19-shimane.netlify.com/" />
    <TextCard title="島根県" link="https://shimane-covid19.netlify.com/" />
    <TextCard title="岡山県" link="https://covid19-okayama.netlify.com/" />
    <TextCard title="広島県" link="https://covid19-hiroshima.netlify.com/" />
    <TextCard
      title="広島県"
      link="https://stopcovid19-hiroshima.netlify.com/"
    />
    <TextCard
      title="広島県"
      link="https://stopcovid19-hiroshima.netlify.com/"
    />
    <TextCard title="山口県" link="https://yamaguchi.stopcovid19.jp/" />
    <TextCard title="徳島県" link="https://covid19-kagawa.netlify.com/" />
    <TextCard title="香川県" link="https://yamaguchi.stopcovid19.jp/" />
    <TextCard title="愛媛県" link="https://ehime-covid19.com/" />
    <TextCard title="高知県" link="https://covid19-kochi.netlify.com/" />
    <TextCard title="福岡県" link="https://stopcovid19.codeforfukuoka.org/" />
    <TextCard title="佐賀県" link="https://stopcovid19.code4saga.org/" />
    <TextCard title="長崎県" link="https://stopcovid19-nagasaki.netlify.com/" />
    <TextCard title="熊本県" link="https://kumamoto.stopcovid19.jp/" />
    <TextCard title="大分県" link="https://oita.stopcovid19.jp/" />
    <TextCard title="宮崎県" link="https://covid19-miyazaki.netlify.com/" />
    <TextCard title="鹿児島県" link="https://covid19.code4kagoshima.org/" />
    <TextCard title="沖縄県" link="https://okinawa.stopcovid19.jp/" />
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
.TextCard {
  padding: 20px;
  margin-bottom: 20px;
}

a {
  @include text-link();
}
</style>
