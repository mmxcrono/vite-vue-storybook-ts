import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueDOMPurifyHTML from 'vue-dompurify-html';

const app = createApp(App);

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
