import Vue from 'vue';
import PortalVue from 'portal-vue';
import VueRecaptcha from 'vue-recaptcha';

import components from './components';
import directives from './directives';

Vue.use(PortalVue);

const $app = window.$app || {};

if ($app.devMode === 'true') {
    Vue.config.devtools = true;
}

if ($app.devMode === 'false') {
    Vue.config.devtools = false;
    Vue.config.productionTip = false;
}

Vue.prototype.$global = $app;

window.$vue = new Vue({
    el: '#root',
    delimiters: ['[[', ']]'],
    components: {
        ...components,
        VueRecaptcha,
    },
    directives,
});
