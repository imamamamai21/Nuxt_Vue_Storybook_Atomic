import { action } from '@storybook/addon-actions';

export default {
  title: 'Vue'
};

export const DataTable = () => ({
  template: `
    <div>
      <h2>【DataTable】Vue既存のコンポーネント</h2>
      <p>cssだけいじってstyleを変えています</p>

      <v-data-table
      :headers="[
        { text: 'ID', value: 'id' },
        { text: '名前', value: 'name' },
        { text: '編集', value: 'action', align: 'center', sortable: false }
      ]"
      :items="[
        {id: 0, name: '名前0'},
        {id: 1, name: '名前1'},
        {id: 2, name: '名前2'},
        {id: 3, name: '名前3'},
        {id: 4, name: '名前4'},
        {id: 5, name: '名前5'},
        {id: 6, name: '名前6'}
      ]"
      :items-per-page="10"
      multi-sort
      class="elevation-1"
    >
      <template v-slot:item.action="{ item }">
        <v-icon @click="action" color="grey" dark>
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
    </div>
  `,
  methods: {
    action: action('clicked')
  }
});
