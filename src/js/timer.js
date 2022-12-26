import { Notify } from 'notiflix/build/notiflix-notify-aio';
// console.log(Notify);
const TIMER_DEADLINE = new Date(2022, 11, 26, 21, 35);

const timerRef = document.querySelector('.timer__items');

const timer = {
  intervalId: null,
  refs: {},
  notifyOptions: {
    position: 'center-center',
    width: ' 300px',
    fontSize: '20px',
    backOverlay: true,
    clickToClose: true,
    closeButton: true,
  },

  start(rootSelector, deadline) {
    const delta = deadline.getTime() - Date.now();
    console.log(delta);
    console.log(deadline);
    if (delta <= 0) {
      Notify.failure('Час вже минув!', this.notifyOptions);
      return;
    }
    Notify.success('Відлік розпочато!', this.notifyOptions);
    this.getRefs(rootSelector);
    this.intervalId = setInterval(() => {
      const diff = deadline.getTime() - Date.now();
      const data = this.convertMs(diff);
      Object.entries(data).forEach(([name, value]) => {
        this.refs[name].textContent = this.addLeadingToZero(value);
      });
      //   this.refs.days.textContent = this.addLeadingToZero(data.days);
      //   this.refs.hours.textContent = this.addLeadingToZero(data.hours);
      //   this.refs.minutes.textContent = this.addLeadingToZero(data.minutes);
      //   this.refs.seconds.textContent = this.addLeadingToZero(data.seconds);
      console.log(data);
    }, 1000);
  },

  getRefs(rootSelector) {
    const arr = [...rootSelector.children];
    arr.forEach(item => {
      const { title } = item.dataset;
      this.refs[title] = item;
    });
    // this.refs.days = rootSelector.querySelector('.js-timer__days');
    // this.refs.hours = rootSelector.querySelector('.js-timer__hours');
    // this.refs.minutes = rootSelector.querySelector('.js-timer__minutes');
    // this.refs.seconds = rootSelector.querySelector('.js-timer__seconds');
  },

  convertMs(diff) {
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    return { days, hours, minutes, seconds };
  },
  addLeadingToZero(value) {
    return String(value).padStart(2, '0');
  },
};
timer.start(timerRef, TIMER_DEADLINE);
