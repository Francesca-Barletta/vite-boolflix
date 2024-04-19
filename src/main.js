import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarReg } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faStarReg, faMagnifyingGlass, faBars )


const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
