# Atoms
- 最小単位
- 使い回しを意識したもの
- 下記のようなデータ操作を行わない
  - store操作
  - API通信

## import例
- 下記、import例

```js
import registerButton from '@atoms/button/registerButton'
import createButton from '@atoms/button/createButton'
import editButton from '@atoms/button/editButton'
import deleteButton from '@atoms/button/deleteButton'

export default {
  components: {
    registerButton,
    createButton,
    editButton,
    deleteButton
  }
}
```