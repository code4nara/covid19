<template>
  <div class="About">
    <h2 class="About-Heading">
      各市町村の対策サイト
    </h2>
    <div class="About-Body">
      <nara-map class="Map" :data="municipalities" />
      <div class="Cards">
        <text-card
          v-for="[k, v] in municipalities"
          :key="k"
          :title="v.name"
          :link="v.href"
        >
          {{ v.kana }}
          <br v-if="!v.href" />
          <br v-if="!v.href" />
          <em v-if="!v.href">{{
            $t('The information from municipality was not provided.')
          }}</em>
        </text-card>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "The information from municipality was not provided.": "自治体からの情報が提供されていません。"
  }
}
</i18n>

<script lang="ts">
import NaraMap from '@/components/NaraMap.vue'
import TextCard from '@/components/TextCard.vue'
// @ts-ignore
import MunicipalitiesData from '@/data/municipalities-data.json'

export default {
  components: {
    NaraMap,
    TextCard
  },
  computed: {
    municipalities() {
      return Object.entries(MunicipalitiesData)
    }
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

  &-Body {
    > .Map {
      margin: auto;
      max-width: 50vh;
    }

    > .Cards {
      margin: 1em 0 0;
    }
  }
}

a {
  @include text-link();
}
</style>
