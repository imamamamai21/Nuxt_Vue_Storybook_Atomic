import listWithTitle from '@modules/listWithTitle'
import '@assets/variables.scss';

export default {
  title: 'Modules'
};

export const ListWithTitle = () => ({
  components: { listWithTitle },
  template: `
    <div>
      <h2>【listWithTitle】タイトル付きリスト</h2>
      <ul>
        <li>受け取ったデータの数だけリストを作って返します</li>
        <li>titleと同じ数だけ、componentを設置できます</li>
        <li>このslotはlistの右側に作られます</li>
        <li>slot名はlistTitlesのkeyと同様のものをセットしてください</li>
      </ul>
      <p></p>

      <listWithTitle :listTitles="[
        { key: 'normal', title: 'タイトル' },
        { key: 'company', title: 'タイトル', coution: '※必須' },
        { key: 'mail', title: 'タイトル', icon: 'mdi-email' }
      ]">
        <template v-slot:normal>
          <div>
            <p>シンプルにタイトルだけのバージョンです</p>
            <p>右側はslotなので、自由に変更できます</p>
          </div>
        </template>
        <template v-slot:company>
          props【coution】指定で注意文言が付きます
        </template>
        <template v-slot:mail>
          props【icon】を指定すればアイコンが付きます
        </template>
      </listWithTitle>
    </div>
  `
});
