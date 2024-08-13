import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
import '@/assets/index.less'
import { createI18n } from 'vue-i18n'
import en from './components/language/en.js'
import zh from './components/language/zh.js'

// call with I18n option
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    zh
  }
})


createApp(App).use(Antd).use(i18n).mount('#app')
