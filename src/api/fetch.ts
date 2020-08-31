import axios from 'axios';
import { Toast } from 'antd-mobile';
import requestConfig from './requestConfig';

export default {
  getUsers(params: any) {
    return axios({
      url: '/api/users',
      method: 'GET',
      params,
    });
  },
};
