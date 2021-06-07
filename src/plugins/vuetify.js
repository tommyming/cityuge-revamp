import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#782750',
                error: '#b71c1c',
                default: '#FFFFFF'
            },
        },
    },
});
