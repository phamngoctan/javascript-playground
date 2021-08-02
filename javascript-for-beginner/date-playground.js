
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
// month is zero based, it means 0 is January
const date2 = new Date(2018, 4, 11, 9, 0);

now.setFullYear(2028);
console.log(now);
console.log(now.toISOString());

const dateFromIsoStr = new Date('2028-08-02T03:17:00.388Z');
console.log(dateFromIsoStr);


