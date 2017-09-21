import { observable, action } from 'mobx';
import axios from 'axios';
import config from '../utils/config';

export default class DetailStore {
  @observable detail = {};

  @action
  async loadDetail(id) {
    const url = `${config.apiPrefix}/room/wxDetail?dataSource=SHENZHEN&bizType=SALE&id=${id}`;
    const res = await axios.get(url);
    if (res.data.status !== 'C0000') {
      this.detail = {};
    }
    this.detail = res.data.result;
  }
}
