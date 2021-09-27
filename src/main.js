import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faHome,
    faGraduationCap,
    faFolder,
    faUsers,
    faUserFriends,
    faComments,
    faEnvelope,
    faCertificate,
    faPlay,
    faQuestionCircle
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faHome,
    faGraduationCap,
    faFolder,
    faUsers,
    faUserFriends,
    faComments,
    faEnvelope,
    faCertificate,
    faPlay,
    faQuestionCircle
)

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
