<template>
  <v-btn-toggle v-model="valueInner" class="DataSelector" mandatory>
    <v-btn
      v-for="item in itemsInner"
      :key="item.key"
      v-ripple="false"
      :value="item.key"
      class="DataSelector-Button"
      :x-small="true"
    >
      {{ item.label }}
    </v-btn>
  </v-btn-toggle>
</template>

<style lang="scss">
.DataSelector {
  margin-top: 2px;
  border: 1px solid $gray-4;
  background-color: $white;
  &-Button {
    border: none !important;
    margin: 2px;
    padding: 0 6px !important;
    border-radius: 4px !important;
    height: 24px !important;
    font-size: 12px !important;
    color: $gray-1 !important;
    background-color: $white !important;
    &::before {
      background-color: inherit;
    }
  }

  & .v-btn--active {
    background-color: $gray-2 !important;
    color: $white !important;
  }
}
</style>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

export type SelectorItem = {
  key: string
  label: string
}

@Component
export default class DataSelector extends Vue {
  private get valueInner(): string {
    return this.value
  }

  private set valueInner(value: string) {
    this.input(value)
  }

  @Prop()
  public value!: string

  @Emit()
  public input(_: string) {}

  private get itemsInner(): SelectorItem[] {
    if (this.items) {
      return this.items
    } else {
      return [
        { key: 'weekly-transition', label: '週別' } as SelectorItem,
        { key: 'daily-transition', label: '日別' } as SelectorItem,
        { key: 'daily-cumulative', label: '累計' } as SelectorItem
      ]
    }
  }

  @Prop()
  public items!: SelectorItem[]
}
</script>
