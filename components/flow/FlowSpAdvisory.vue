<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('奈良県庁') }}
    </h4>
    <div :class="$style.mb10">
      <dt>
        <ul :class="[$style.night]">
          <li>
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
    <hr :class="$style.hr" />
    <h4 :class="[$style.heading, $style.fzXLarge]">
      {{ $t('一般的な相談窓口') }}
    </h4>
    <h5 :class="[$style.heading, $style.enableTime]">
      {{ $t('平日(08時30分～17時15分)') }}
    </h5>
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
    </dl>
    <h5 :class="[$style.heading, $style.enableTime]">
      {{ $t('土日祝(10時00分～16時00分)') }}
    </h5>
    <div :class="$style.daytime">
      <dt :class="[$style.title, $style.fzMedium]">
        {{ $t('奈良県庁') }}
      </dt>
      <dd :class="$style.link">
        <a href="tel:0742278561">
          0742-27-8561
        </a>
      </dd>
    </div>
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
    <div :class="$style.note">
      <div :class="[$style.fzSmall]">
        ※緊急を要する方は<br />各保健所で夜間も相談できます
      </div>
    </div>
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
  display: flex;

  dt {
    flex: 1 0 60%;
  }
  dd {
    flex: 1 0 40%;
  }

  > * {
    padding: px2vw(10) 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
  }

  .link {
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

.enableTime {
  font-size: px2vw(28);
  padding: px2vw(10) 0;
}

.hr {
  margin-top: px2vw(30);
  margin-bottom: px2vw(30);
}

.note {
  text-align: center;
  font-size: px2vw(12);
  padding-top: px2vw(40);
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
