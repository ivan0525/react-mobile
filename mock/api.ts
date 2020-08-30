import Mock, { Random } from 'mockjs';

export default {
  '/api/users': (req: any, res: any) => {
    const json = Mock.mock({
      retCode: 0,
      retMsg: 'success',
      data: {
        'userList|1-20': [
          {
            id: Random.id(),
            name: Random.name(),
          },
        ],
      },
    });
    return res.json(json);
  },
};
