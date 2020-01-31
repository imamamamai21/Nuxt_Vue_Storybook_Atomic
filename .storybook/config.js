import { configure, addDecorator } from '@storybook/vue';
import Vue from 'vue';
import ToggleButton from 'vue-js-toggle-button'

import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'vuetify/dist/vuetify.min.css';

import decorator from './Decorator';

const vuetifyOptions = { }

Vue.use(Vuetify, {
  customVariables: ['../src/assets/variables.scss'],
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
});

Vue.use(ToggleButton);

addDecorator(() => ({
  components: { decorator },
  vuetify: new Vuetify(vuetifyOptions),
  template: `<v-app><decorator><story slot="story" /></decorator></v-app>`
}));

configure(require.context('../stories', true, /\.stories\.js$/), module);