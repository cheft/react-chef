import { observable, action } from 'mobx';
import axios from 'axios';
import config from '../utils/config';

export default class ListStore {
  @observable list = [];
  page = 1;

  async fetchList() {
    const url = `${config.apiPrefix}/room/list?dataSource=SHENZHEN&bizType=SALE&currentPage=${this.page}&pageSize=20`;
    const res = await axios.get(url);
    if (res.data.status !== 'C0000') {
      return [];
    }
    return res.data.result.list;
  }

  @action
  async loadList() {
    this.page = 1;
    this.list = await this.fetchList();
  }

  @action.bound
  async loadMoreList() {
    this.page += 1;
    const list = await this.fetchList();
    this.list = this.list.concat(list);
  }

  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["onFetch"] }] */
  async onFetch(page = 1, startFetch, abortFetch) {
    const pageSize = 20;
    const url = `${config.apiPrefix}/room/list?dataSource=SHENZHEN&bizType=SALE&currentPage=${page}&pageSize=${pageSize}`;
    const res = await axios.get(url);
    if (res.data.status !== 'C0000') {
      abortFetch();
    }
    startFetch(res.data.result.list, pageSize);
  }
}
