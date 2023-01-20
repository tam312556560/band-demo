let daily = '1';
let coding = 2;
let habit = 3;

[daily, coding] = [habit++, daily++ + coding++];
habit = (daily+coding)%5;

console.log(habit);