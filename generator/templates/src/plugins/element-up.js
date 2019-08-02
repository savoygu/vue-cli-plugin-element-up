import Vue from 'vue'
<%_ if (options.import === 'full') { _%>
import ElementUp from 'element-up'
<%_ if (options.customTheme) { _%>
import '../element-up-variables.scss'
<%_ } else { _%>
import 'element-up/lib/theme-chalk/index.css'
<%_ } _%>
<%_ if (options.lang !== 'zh-CN') { _%>
import locale from 'element-up/lib/locale/lang/<%= options.lang %>'

Vue.use(ElementUp, { locale })
<%_ } else { _%>

Vue.use(ElementUp)
<%_ } _%>
<%_ } else { _%>
import { Radio } from 'element-up'
<%_ if (options.lang !== 'zh-CN') { _%>
import lang from 'element-up/lib/locale/lang/<%= options.lang %>'
import locale from 'element-up/lib/locale'

locale.use(lang)
<%_ } _%>

Vue.use(Radio)
<%_ } _%>
