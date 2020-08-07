<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :source-text="sourceText"
    :source-url="sourceUrl"
  >
    <template v-slot:button>
      <p :class="$style.note">
        {{ $t('（注）奈良市報道発表資料に基づく数字') }}
      </p>
    </template>
    <slot />
    <template v-slot:footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default Vue.extend({
  components: { DataView, OpenDataLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
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
  }
})
</script>
