<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle2">
            {{ $t('各保健所') }}
          </span>
        </div>
        <div>
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
          <div>
            <a :class="$style.AdvisoryTelephoneMini" href="tel:0742955888">
              奈良市保健所 0742-95-5888
            </a>
          </div>
          <div>
            <a :class="$style.AdvisoryTelephoneMini" href="tel:0743510194">
              県郡山保健所 0743-51-0194
            </a>
          </div>
          <div>
            <a :class="$style.AdvisoryTelephoneMini" href="tel:0744483037">
              県中和保健所 0744-48-3037
            </a>
          </div>
          <div>
            <a :class="$style.AdvisoryTelephoneMini" href="tel:0747520551">
              県吉野保健所 0747-52-0551
            </a>
          </div>
          <div>
            <a :class="$style.AdvisoryTelephoneMini" href="tel:0747223051">
              県内吉野保健所 0747-22-3051
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div class="py-8">
          <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
            {{ $t('奈良県庁') }}
          </div>
          <div>
            <span :class="$style.AdvisoryContentsTitle2">
              {{ $t('帰国者・接触者相談センター') }}<br />
              {{ $t('（新型コロナ受診相談窓口）') }}
            </span>
          </div>
          <div class="pt-8">
            <div :class="$style.AdvisoryContentsTitle2">
              {{ $t('平日(08時30分～21時00分)') }}
            </div>
            <div :class="$style.AdvisoryContentsTitle2">
              {{ $t('土日祝(10時00分～16時00分)') }}
            </div>
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a :class="$style.AdvisoryTelephone" href="tel:0742271132">
              <img
                :class="$style.AdvisoryTelephoneIcon"
                src="/flow/phone-24px.svg"
                aria-hidden="true"
                :alt="$t('電話番号')"
              />
              0742-27-1132
            </a>
          </div>
        </div>
      </div>
      <div v-if="!['ja', 'ja-basic'].includes($i18n.locale)" class="pt-8">
        <span>{{ $t('ひまわり') }}</span>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Advisory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: $gray-2;

  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    height: 100%;
    padding: 30px 20px 20px 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  &Contents {
    font-weight: bold;
    padding: 16px;

    &:not(:first-child) {
      border-top: 0.5px solid $gray-4;
    }

    &Title {
      font-size: 26px;
      line-height: 28px;
    }

    &Title2 {
      font-size: 18px;
    }

    &SubTitle {
      font-size: 18px;
    }

    &ColsSentense {
      line-height: 18px;
    }
  }

  &BlockCentering {
    display: flex;
    justify-content: center;
  }

  &Link {
    line-height: 22px;
    text-align: left;

    a {
      color: rgba(0, 0, 0, 0.87);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &TelephoneArea {
    display: inline-flex;
  }

  &TelephoneMini {
    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
    }

    &:visited,
    &:hover,
    &:active,
    &:focus {
      @media screen {
        outline: 1px dotted $gray-3;
      }
    }

    &Icon {
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
    }
  }

  &Telephone {
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;

    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
    }

    &:visited,
    &:hover,
    &:active,
    &:focus {
      @media screen {
        // printだとoutlineが太くなってしまい読みにくいので、消す処理
        outline: 1px dotted $gray-3;
      }
    }

    &Icon {
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
    }
  }

  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 12px auto;
  }

  &WhiteBox {
    background-color: $white;
    max-width: 160px;
    padding: 10px;

    &Sentense {
      color: $green-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
