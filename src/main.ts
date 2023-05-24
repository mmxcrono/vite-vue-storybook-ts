import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueDOMPurifyHTML from 'vue-dompurify-html';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
// <template>
//     <div v-dompurify-html="rawHtml"></div>
    // <div v-dompurify-html:svg="svgContent"></div>
// </template>
app.use(VueDOMPurifyHTML, {
    namedConfigurations: {
        'svg': {
            USE_PROFILES: { svg: true }
        },
    }
});
app.mount('#app')
