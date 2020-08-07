<template>
  <div ref="wrapper" class="Wrapper">
    <div class="NaraMap">
      <div class="NaraMap-MunicipalitiesContainer">
        <component
          :is="isChakraLike ? 'div' : 'a'"
          v-for="[k, v] in data"
          :key="k"
          :href="v.href"
          target="_blank"
          rel="noopener"
        >
          <component
            :is="isChakraLike ? 'a' : 'div'"
            :href="v.href"
            target="_blank"
            rel="noopener"
            :style="setPlace(v)"
          >
            <ruby>
              <span
                :style="
                  isChakraLike && {
                    transform: 'translateY(.5ex)'
                  }
                "
              >
                {{ v.name }}
              </span>
              <rp><br /></rp>
              <rt>{{ v.kana }}</rt>
            </ruby>
          </component>
          <aside
            v-for="(aside, i) in v.asides || []"
            :key="i"
            :class="aside.directions"
            :style="setPlace(aside)"
          />
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
declare global {
  interface ResizeObserver {
    disconnect(): void
    observe(element: HTMLElement): void
    unobserve(element: HTMLElement): void
  }

  interface ResizeObserverEntry {
    contentRect: DOMRectReadOnly
    target: HTMLElement
  }

  interface ResizeObserverConstructor {
    new (
      callback: (
        entries: ResizeObserverEntry[],
        observer: ResizeObserver
      ) => void
    ): ResizeObserver
  }

  let ResizeObserver: ResizeObserverConstructor | undefined
}

export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data(this: {
    readonly tryResize: (target: Element, contentRect: DOMRectReadOnly) => void
  }) {
    return {
      resizeObserver:
        typeof ResizeObserver === 'function' &&
        new ResizeObserver(entries => {
          for (const entry of entries) {
            this.tryResize(entry.target, entry.contentRect)
          }
        })
    }
  },
  computed: {
    isChakraLike() {
      return (
        !!document.all ||
        /Trident|Edge\/[12]\d\.\d+$/.test(navigator.appVersion)
      )
    }
  },
  mounted(this: {
    readonly $refs: {
      readonly wrapper: HTMLElement
    }
    readonly resizeObserver?: ResizeObserver
    readonly tryResize: (target: Element, contentRect: DOMRectReadOnly) => void
  }) {
    if (this.resizeObserver) {
      this.resizeObserver.observe(this.$refs.wrapper)
    }

    this.tryResize(
      this.$refs.wrapper,
      this.$refs.wrapper.getBoundingClientRect()
    )
  },
  beforeDestroy(this: { readonly resizeObserver?: ResizeObserver }) {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  },
  methods: {
    setPlace(
      this: Vue & { isChakraLike?: boolean },
      target: {
        row: string
        column: string
      }
    ) {
      return this.isChakraLike
        ? (([c, cs], [r, rs]) => ({
            msGridColumn: c,
            msGridColumnSpan: cs && Number(cs) - Number(c),
            msGridRow: r,
            msGridRowSpan: rs && Number(rs) - Number(r),
            gridColumn: target.column,
            gridRow: target.row
          }))(target.column.split('/'), target.row.split('/'))
        : {
            gridColumn: target.column,
            gridRow: target.row
          }
    },
    tryResize(target: HTMLElement, contentRect: DOMRectReadOnly) {
      target.style.fontSize = `${contentRect.width / 384}em`
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin border($width) {
  > a:only-child,
  > div:only-child {
    border-width: $width;
    margin: -$width;
  }

  > aside {
    &.b {
      border-bottom-width: $width;
      margin-bottom: -$width;
    }

    &.l {
      border-left-width: $width;
      margin-left: -$width;
    }

    &.r {
      border-right-width: $width;
      margin-right: -$width;
    }

    &.t {
      border-top-width: $width;
      margin-top: -$width;
    }
  }
}

.Wrapper {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  &.hidden {
    font-size: 0;
    visibility: hidden;
  }
}

.NaraMap {
  box-sizing: border-box;
  line-height: 1;
  position: relative;
  width: 24em;

  &::before {
    content: '';
    display: block;
    padding: 150% 0 0;

    _:-ms-lang(x),
    & {
      padding: 100% 0 0;
    }
  }

  &-MunicipalitiesContainer {
    /* autoprefixer: ignore next */
    display: grid;
    grid: 1fr 6fr repeat(17, 2fr 6fr) 1fr/1fr 6fr repeat(11, 2fr 6fr) 1fr;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;

    _:-ms-lang(x),
    & {
      display: block;
    }

    > a,
    > div {
      @include border(0.0625em);

      color: $link;
      /* autoprefixer: ignore next */
      display: contents;
      font-size: 1em;

      _:-ms-lang(x),
      & {
        bottom: 0;
        display: grid;
        /* autoprefixer: ignore next */
        -ms-grid-columns: 1fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr
          6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 1fr;
        /* autoprefixer: ignore next */
        -ms-grid-rows: 1fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr
          2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr 6fr 2fr
          6fr 2fr 6fr 2fr 6fr 1fr;
        grid: 1fr 6fr repeat(17, 2fr 6fr) 1fr/1fr 6fr repeat(11, 2fr 6fr) 1fr;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      &[href]:hover {
        @include border(0.125em);

        font-weight: bold;
      }

      &:not([href]),
      &:not([href]) > a {
        color: $gray-3 !important;
        cursor: default;
        text-decoration: none;
      }

      > * {
        border: solid 0 currentColor;
      }

      > a:only-child,
      > div:only-child,
      > aside {
        background: $white;
      }

      > a,
      > div {
        align-items: center;
        display: flex;
        font-size: 1em;
        justify-content: center;
        z-index: 1;

        &:only-child {
          border-radius: 0.125em;
        }

        > ruby {
          font-size: 0.75em;
        }
      }

      > aside {
        &.b {
          &.l {
            border-bottom-left-radius: 0.125em;
          }

          &.r {
            border-bottom-right-radius: 0.125em;
          }
        }

        &.t {
          &.l {
            border-top-left-radius: 0.125em;
          }

          &.r {
            border-top-right-radius: 0.125em;
          }
        }
      }
    }

    > div {
      pointer-events: none;

      > a {
        pointer-events: auto;
      }
    }
  }
}
</style>
