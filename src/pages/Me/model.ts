import { Effect, Reducer, ImmerReducer } from 'umi';
import Api from '@/api/fetch';
export interface IUser {
  id: string;
  name: string;
}
export interface IMeModelState {
  users: IUser[];
}

export interface IMeModel {
  namespace: string;
  state: IMeModelState;
  reducers: {
    saveUsers: Reducer<IMeModelState>;
    immerSave: ImmerReducer<IMeModelState>;
  };
  effects: {
    getUsers: Effect;
  };
}

const MeModel: IMeModel = {
  namespace: 'me',
  state: {
    users: [],
  },
  reducers: {
    saveUsers(state, actions) {
      return <IMeModelState>{
        ...state,
        users: actions.payload.data.userList,
      };
    },
    immerSave(state, actions) {
      state.users = actions.payload;
      return null;
    },
  },
  effects: {
    *getUsers({ payload }, { call, put }) {
      const result = yield call(Api.getUsers, payload);
      yield put({
        type: 'saveUsers',
        payload: result.data,
      });
    },
  },
};

export default MeModel;
