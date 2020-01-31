<template>
  <div id="pageTable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <pageTitle :companyPage="true" />
        </v-flex>
        <v-flex lg6>
          <v-card>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="basic.headers"
                :search="search"
                :items="basic.items"
                :footer-props="{itemsPerPageOptions: [25, 50, 100, -1]}"
                class="elevation-1"
                item-key="name"
                show-select
                v-model="basic.selected"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.phone }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg6>
          <v-card>
            <v-card-text class="pa-0">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="formcontents.name"
                  :counter="10"
                  :rules="formcontents.nameRules"
                  label="会社名"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="formcontents.companyCode"
                  :counter="10"
                  :rules="formcontents.companyCodeRules"
                  label="会社コード"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="formcontents.email"
                  :rules="formcontents.emailRules"
                  label="担当者メールアドレス"
                  required
                ></v-text-field>

                <v-select
                  v-model="formcontents.select"
                  :items="formcontents.items"
                  :rules="[v => !!v || '担当者名は必須です。']"
                  label="担当者名"
                  required
                ></v-select>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                >
                  登録
                </v-btn>

                <v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
                >
                  フォームクリア
                </v-btn>

                <v-btn
                  color="warning"
                  @click="resetValidation"
                >
                  バリデーションクリア
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import pageTitle from '@atoms/pageTitle'
import {Items as TestCompanies} from '@/api/testcompany';

export default {
  components: {
    pageTitle // Atom
  },
  data() {
    return {
      search: '',
      valid: true,
      basic: {
        selected: [],
        headers: [
          {
            text: 'id',
            value: 'id'
          },
          {
            text: '会社コード',
            value: 'company_code'
          },
          {
            text: 'name',
            value: 'name'
          }
        ],
        items: TestCompanies
      },
      formcontents: {
        name: '',
        nameRules: [
          v => !!v || '会社名は必須です。',
          v => (v && v.length <= 20) || '会社名は20文字以内です。',
        ],
        companyCode: '',
        companyCodeRules: [
          v => !!v || '会社コードは必須です。',
          v => (v && v.length <= 10) || '会社コードは10文字以内です。',
        ],
        email: '',
        emailRules: [
          v => !!v || '担当者メールアドレスは必須です。',
          v => /.+@.+\..+/.test(v) || 'メールアドレスの形式ではありません。',
        ],
        select: null,
        items: [
          'ユーザー1',
          'ユーザー2',
          'ユーザー3',
          'ユーザー4',
        ]
      }
    };
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
};
</script>