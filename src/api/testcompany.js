const Items =  [
  {
    'id': '1',
    'company_code': 'c003',
    'name': 'テスト環境'
  },
  {
    'id': '2',
    'company_code': 'opdg',
    'name': 'デモ環境'
  }
];

const getUserById = (uuid) => {
  return (uuid === undefined) ? Items[0] : Items.find(x => x.uuid === uuid);
};

const getUser = (limit) => {
  return (limit) ? Items.slice(0, limit) : Items;
};

export {
  Items,
  getUser,
  getUserById
};
