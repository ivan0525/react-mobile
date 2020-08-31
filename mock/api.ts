import Mock, { Random } from 'mockjs';

export default {
  // 支持自定义函数，API 参考 express@4
  '/api/users': (req: any, res: any) => {
    const json = Mock.mock({
      retCode: 0,
      retMsg: 'success',
      data: {
        'userList|1-20': [
          {
            id: '@guid()',
            name: '@cname()',
          },
        ],
      },
    });
    return res.json(json);
  },
};
