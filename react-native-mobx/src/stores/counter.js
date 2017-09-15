import { observable, autorun, action, runInAction } from 'mobx';

export default class Counter {
  @observable count = 0;

  constructor() {
    autorun(() => {
      console.log(this.count);
    });
  }

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
      runInAction(() => {
        this.count += num;
      })
    }, 1000);
  }

  @action
  decrementAsync(num) {
    console.log(num);
    setTimeout(this.decrement, 1000);
  }
}
