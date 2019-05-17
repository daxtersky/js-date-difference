// Import stylesheets
import './style.css';
import dayjs from 'dayjs';

const firstDate = new Date();
const secondDate = '2019-05-03';
const dayDifference: number = 0;

const daysBetween = (date1st: Date, date2nd: any) => dayjs(date1st).diff(dayjs(date2nd), 'day');
this.dayDifference = daysBetween(firstDate, secondDate);
console.log(`
The day difference between... ${secondDate}
and ${firstDate}
'...is', ${this.dayDifference} days
`);