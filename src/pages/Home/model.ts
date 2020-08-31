import { Effect } from 'umi';
export interface IUser {
  id: string;
  name: string;
}
export interface IHomeModelState {
  userInfo: IUser[];
}

export interface IHomeModel {
  namespace: string;
  state: IHomeModelState;
  reducers: {
    [key: string]: any;
  };
  effects: {
    [key: string]: Effect;
  };
}

const HomeModel: IHomeModel = {
  namespace: 'home',
  state: {
    userInfo: [],
  },
  reducers: {},
  effects: {},
};

export default HomeModel;
