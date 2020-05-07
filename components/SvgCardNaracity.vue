<template>
  <data-view
    class="SvgCardNaracity"
    :title="title"
    :title-id="titleId"
    :date="date"
    :source-text="sourceText"
    :source-url="sourceUrl"
  >
    <template v-slot:button>
      <p class="Graph-Desc">
        （注）表の数字は奈良市が公表したデータ
      </p>
    </template>
    <slot />
  </data-view>
</template>

<style lang="scss" scoped>
.SvgCardNaracity {
  ::v-deep svg {
    width: 100%;
  }
  .Graph-Desc {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script>
import DataView from '@/components/DataView.vue'
export default {
  components: { DataView },
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
}
</script>
