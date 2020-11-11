export class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.intervalId = null;
    this._selector = selector;
    this._targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${selector} [data-value="days"]`),
      hours: document.querySelector(`${selector} [data-value="hours"]`),
      mins: document.querySelector(`${selector} [data-value="mins"]`),
      secs: document.querySelector(`${selector} [data-value="secs"]`),
    };
  }

  init() {
    this.setTimerDefaultValue();
    this.intervalId = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = this._targetDate - startTime;
      const time = this.getTimeComponents(deltaTime);
      this.onTick(time);
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  onTick({ days, hours, mins, secs }) {
    this.refs.days.textContent = days;
    this.refs.hours.textContent = hours;
    this.refs.mins.textContent = mins;
    this.refs.secs.textContent = secs;
  }

  setTimerDefaultValue() {
    this.refs.days.textContent = 0;
    this.refs.hours.textContent = 0;
    this.refs.mins.textContent = 0;
    this.refs.secs.textContent = 0;
  }
}
