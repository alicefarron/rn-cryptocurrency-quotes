import {makeAutoObservable} from 'mobx';

class Timer {
  seconds = 5000;

  constructor() {
    makeAutoObservable(this);
  }

  setTimerValue(value: number) {
    this.seconds = value;
  }
}

export default new Timer();
