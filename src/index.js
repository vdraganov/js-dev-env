import numeral from 'numeral';

const courseVal = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseVal} for this course.`); // eslint-disable-line no-console
