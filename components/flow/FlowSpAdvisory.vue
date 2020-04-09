<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('各保健所') }}
    </h4>
    <p :class="[$style.open, $style.fzMedium]">
      <span>{{ $t('24時間対応') }}</span>
    </p>
    <dl>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('奈良市保健所') }}
        </dt>
        <dd :class="$style.link">
          <a href="tel:0742955888">
            0742-95-5888
          </a>
        </dd>
      </div>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('県郡山保健所') }}
        </dt>
        <dd :class="$style.link">
          <a href="tel:0743510194">
            0743-51-0194
          </a>
        </dd>
      </div>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('県中和保健所') }}
        </dt>
        <dd :class="$style.link">
          <a href="tel:0744483037">
            0744-48-3037
          </a>
        </dd>
      </div>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('県吉野保健所') }}
        </dt>
        <dd :class="$style.link">
          <a href="tel:0747520551">
            0747-52-0551
          </a>
        </dd>
      </div>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('県内吉野保健所') }}
        </dt>
        <dd :class="$style.link">
          <a href="tel:0747223051">
            0747-22-3051
          </a>
        </dd>
      </div>
      <div>
        <dt>
          <ul :class="[$style.night]">
            <li>
              <span :class="[$style.fzMedium, $style.break, $style.mb10]">
                {{ $t('奈良県庁') }}
              </span>
              {{ $t('帰国者・接触者相談センター') }}<br />
              {{ $t('（新型コロナ受診相談窓口）') }}
            </li>
            <li>
              <span :class="$style.fzMedium">
                {{ $t('平日(08時30分～21時00分)') }}<br />
                {{ $t('土日祝(10時00分～16時00分)') }}
              </span>
            </li>
          </ul>
        </dt>
        <dd>
          <div :class="[$style.phone, $style.fzNumeric]">
            <span :class="$style.icon">
              <PhoneIcon alt="Phone" />
            </span>
            <a href="tel:0742271132">0742-27-1132</a>
          </div>
          <div
            v-if="!['ja', 'ja-basic'].includes($i18n.locale)"
            :class="[$style.phone, $style.fzNumeric]"
          >
            <span :class="[$style.fzMedium, $style.break, $style.mb10]">
              {{ $t('ひまわり') }}
            </span>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.open {
  margin-top: px2vw(20);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    color: $green-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;
  border-bottom: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
</style>
