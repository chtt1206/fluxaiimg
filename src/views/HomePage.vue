<template>
  <a-layout-header :style="headerStyle">
    <div class="header-nav">
      <div>
        <a-image :src="logo" :width="32" />
        <label class="fw header-name">FluxAI</label>
      </div>
      <div class="header-nav-list">
        <a href="#Features">Features</a>
        <a href="#Pricing">Pricing</a>
        <!-- <a>Testimonials</a> -->
        <a href="#FAQ">FAQ</a>
      </div>
      <div class="header-right">
        <a-select
          ref="select"
          :dropdownMatchSelectWidth="false"
          v-model:value="language"
          @change="changeLanguage"
        >
          <a-select-option value="en">🇺🇸 English</a-select-option>
          <a-select-option value="zh">🇨🇳 中文</a-select-option>
        </a-select>
      </div>
    </div>
  </a-layout-header>
  <a-layout-content>
    <ContentPage />
  </a-layout-content>
  <!-- <a-layout-footer>Footer</a-layout-footer> -->
  <a-back-top />
</template>


<script setup>
import logo from '/logo.svg'
import ContentPage from '@/views/ContentPage.vue';
import { useI18n } from 'vue-i18n';

const { locale }  = useI18n()

const headerStyle = {
  padding: '40px 32px',
  lineHeight: '24px',
};
const language = ref('en')
const changeLanguage = (lang) => {
  locale.value = lang
}

</script>


<style scoped lang="less">
.ant-layout-header{
  font-size: 16px;
  color: var(--fontColor);
}
.header-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  >div{
    flex: 1;
  }
  .header-nav-list a{
    color: var(--fontColor);
    margin:0 12px;
    font-size: 18px;
    cursor: pointer;
  }
  .header-name{
    margin-left: 4px;
  }
  .header-right{
    display: flex;
    justify-content: flex-end;
  }
}
</style>