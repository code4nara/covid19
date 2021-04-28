<template>
  <ul :class="$style.container">
    <li>
      <div :class="[$style.row, $style['is-positive']]">
        <span>{{ $t('感染者数累計') }}</span>
        <span :class="$style.value">{{ 感染者数累計 }}{{ $t('人') }}</span>
      </div>
      <ul :class="[$style.container, $style['sub-container'], $style['is-positive']]">
        <li>
          <div :class="[$style.row, $style['is-current-positive']]">
            <span>{{ $t('現在感染者数') }}</span>
            <span :class="$style.value">{{ 現在感染者数 }}{{ $t('人') }}</span>
          </div>

          <ul :class="[$style.container, $style['sub-container'], $style['is-current-positive']]">
            <li>
              <div :class="[$style.row, $style['is-gray']]">
                <span v-html="$t('入院・療養中')" />
                <span :class="$style.value">{{ 入院療養中数 }}{{ $t('人') }}</span>
              </div>
              <ul :class="[$style.container, $style['sub-container'], $style['is-gray']]">
                <li>
                  <div :class="[$style.row, $style['is-gray']]">
                    <span>{{ $t('重症') }}</span>
                    <span :class="$style.value">{{ 重症 }}{{ $t('人') }}</span>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div :class="[$style.row, $style['is-gray']]">
                <span v-text="$t('入院・入所待機中、自宅療養中')" />
                <span :class="$style.value">{{ 入院入所準備中数 }}{{ $t('人') }}</span>
              </div>
            </li>
            <!--
            <li>
              <div :class="[$style.row, $style['is-gray']]">
                <span>{{ $t('自宅療養') }}</span>
                <span :class="$style.value">{{ 自宅療養 }}{{ $t('人') }}</span>
              </div>
            </li>
            <li>
              <div :class="[$style.row, $style['is-gray']]">
                <span>{{ $t('宿泊療養') }}</span>
                <span :class="$style.value">{{ 宿泊療養 }}{{ $t('人') }}</span>
              </div>
            </li>
-->
          </ul>
        </li>

        <!--
        <li>
          <div :class="[$style.row, $style['is-current-positive']]">
	    <span>{{ $t('他府県発表との重複') }}</span>
            <span :class="$style.value">{{ 自宅療養 }}{{ $t('人') }}</span>
          </div>
        </li>
-->
        <li>
          <div :class="[$style.row, $style['is-deceased']]">
            <span>{{ $t('死亡') }}</span>
            <span :class="$style.value">{{ 死亡 }}{{ $t('人') }}</span>
          </div>
        </li>
        <li>
          <div :class="$style.row">
            <span>{{ $t('治癒累計') }}</span>
            <span :class="$style.value">{{ 退院等累計 }}{{ $t('人') }}</span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

/* eslint-disable vue/prop-name-casing */
export default Vue.extend({
  props: {
    検査実施人数: {
      type: Number,
      required: true
    },
    感染者数累計: {
      type: Number,
      required: true
    },
    現在感染者数: {
      type: Number,
      required: true
    },
    重症: {
      type: Number,
      required: true
    },
    入院中: {
      type: Number,
      required: true
    },
    入院療養中数: {
      type: Number,
      required: true
    },
    入院入所準備中数: {
      type: Number,
      required: true
    },
    宿泊療養: {
      type: Number,
      required: true
    },
    自宅療養: {
      type: Number,
      required: true
    },
    死亡: {
      type: Number,
      required: true
    },
    退院等累計: {
      type: Number,
      required: true
    }
  },
  methods: {
    /** 桁数に応じて位置の調整をする */
    getAdjustX(input: number) {
      const length = input.toString(10).length
      switch (length) {
        case 1: {
          return 3
        }
        case 2: {
          return 0
        }
        case 3: {
          return -3
        }
        case 4: {
          return -8
        }
        default: {
          return 0
        }
      }
    }
  }
})
</script>

<style lang="scss" module>
$borderWidth: 2px;
$itemGap: 0.25em;

/*$positiveColor: lighten($green-1, 50%);*/
$positiveColor: lighten($green-2, 50%);
$currentPositiveColor: #e6e6e6;
$deceasedColor: #ccc;
$conductedColor: #333;

// for .sub-container
@mixin scBoxShadow($color) {
  box-shadow: $color 0px 2px 0px 0px inset;
}

ul.container {
  padding: 0;

  letter-spacing: 0.05em;

  &,
  li {
    list-style: none;
  }

  > li + li {
    margin-top: $itemGap;
  }
}

ul.sub-container {
  padding: $itemGap 0 0 2.25em;
  position: relative;

  &::before {
    content: '';

    width: 2em;

    border: solid $green-1;
    border-width: 0 $borderWidth $borderWidth;

    @include scBoxShadow(#fff);

    position: absolute;
    top: -2px;
    left: 0;
    bottom: 0;
  }

  &.is-positive::before {
    background: $positiveColor;
    @include scBoxShadow($positiveColor);
  }

  &.is-current-positive {
    &::before,
    .sub-container::before {
      background: $currentPositiveColor;
      @include scBoxShadow($currentPositiveColor);
    }

    .row {
      background: $currentPositiveColor;
    }
  }
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5em 1em;

  font-weight: bold;

  border: solid 2px $green-1;

  color: darken($green-1, 15%);

  &.is-positive {
    background: $positiveColor;
  }

  &.is-deceased {
    background: $deceasedColor;
  }

  &.is-current-positive {
    background: $currentPositiveColor;
  }

  &.is-conducted {
    border-color: $conductedColor;
    color: $conductedColor;
  }
}

.value {
  flex: none;

  margin-left: 1em;

  letter-spacing: 0.075em;
}
</style>
