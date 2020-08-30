import { Effect } from 'umi';
export interface IMeModelState {
  userInfo: any;
}

export interface IMeModel {
  namespace: string;
  state: IMeModelState;
  reducers: {
    [key: string]: any;
  };
  effects: {
    [key: string]: Effect;
  };
}

const MeModel: IMeModel = {
  namespace: 'me',
  state: {
    userInfo: {},
  },
  reducers: {},
  effects: {},
};

export default MeModel;
