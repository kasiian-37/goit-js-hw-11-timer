import './style.css';
import { CountdownTimer } from './js/countdownTimer';

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 16, 2021'),
});

document.addEventListener('DOMContentLoaded', timer.init.bind(timer));
