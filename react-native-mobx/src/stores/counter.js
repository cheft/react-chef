import { observable, action } from 'mobx';
import axios from 'axios';

export default class Counter {
  @observable count = 0;

  @action.bound
  increment() {
    console.log(this);
    this.count += 1;
  }

  @action.bound
  decrement() {
    this.count -= 1;
  }

  @action
  incrementAsync(num) {
    setTimeout(() => {
      this.count += num;
    }, 1000);
  }

  @action
  async decrementAsync() {
    console.log(this);
    const result = await axios.get('http://www.baidu.com/');
    console.log(result.data.length);
    this.count += result.data.length;
  }
}
