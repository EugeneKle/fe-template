import '@mdi/font/css/materialdesignicons.css'

import { createVuetify } from 'vuetify'
import { cs, en } from 'vuetify/locale'

export default createVuetify({
  icons: {
    defaultSet: 'mdi'
  },
  locale: {
    locale: 'cs',
    fallback: 'en',
    messages: { cs, en }
  }
})
