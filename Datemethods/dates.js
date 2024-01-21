// 1. new Date()
const currentDate = new Date();
console.log("Current Date:", currentDate);

// 2. date.parse()
let date = "january 19,2024"
const parsedDate = Date.parse(date);
console.log("Parsed Date:", parsedDate);

// 3. Date.UTC()
const utcDate = Date.UTC(2024,3,6);
console.log('UTC Date:',new Date(utcDate));

// 4. getDate()
const getDate = new Date().getDate();
console.log('Date:',getDate);

// 5. getMonth()
const getMonth = new Date().getMonth();
console.log('Month:', getMonth);

// 6. getFullYear()
const getFullYear = new Date().getFullYear();
console.log('Year:', getFullYear);

//7. getDay()
const getDay = new Date().getDay();
console.log('Day:',getDay);

// 8. getHours()
const getHours = new Date().getHours();
console.log('Hour:', getHours);

// 9. getMinutes()
const getMinutes = new Date().getMinutes();
console.log('Minutes:', getMinutes);

// 10. getSeconds()
const getSeconds = new Date().getSeconds();
console.log('seconds:', getSeconds);

//11.getMilliSeconds()
const getMilliSeconds = new Date().getMilliseconds();
console.log('Milliseconds:',getMilliSeconds);

//12.setDate()
const setDate = new Date().setDate(6);
console.log('Updated Date:',new Date(setDate));

//13. setMonth()
const setMonth = new Date().setMonth(9);
console.log('Updated Month:', new Date(setMonth));

// 14. setFullYear()
const setFullYear = new Date().setFullYear(1997);
console.log('Updated Year:',new Date(setFullYear));

// 15. setHours()
const setHours = new Date().setHours(5);
console.log('Updated Hours:',new Date(setHours));

// 16.setMinutes()
const setMinutes = new Date().setMinutes(20);
console.log('Updated Minutes:',new Date(setMinutes));

// 17. setSeconds()
const setSeconds = new Date().setSeconds(30);
console.log('Updated Seconds:',new Date(setSeconds));

// 18. setMilliSeconds()
const setMilliSeconds = new Date().setMilliseconds(30);
console.log('Updated MilliSeconds:',new Date(setMilliSeconds));

// 19. toDateString()
const dateString = new Date().toDateString();
console.log('Date String:',dateString);

// 20. toLocalDateString()
const localDateString = new Date().toLocaleDateString();
console.log('Local Date String:',localDateString);

// 21.toTimeString()
const timeString = new Date().toTimeString();
console.log('Time String:',timeString);

// 22. toLocaleTimeString()
const localeTimeString = new Date().toLocaleTimeString();
console.log('Locale Time String:',localeTimeString);

//UTC DATE METHODS

// 23. getUTCdate()
const getUTCDate = new Date().getUTCDate();
console.log('UTC Date:', getUTCDate);

// 24. getUTCday()
const getutcDay = new Date().getUTCDay()
console.log('UTC Day:',getutcDay);

// 25. getUTCFullYear()
const getUTCFullYear = new Date().getUTCFullYear();
console.log('UTC Day:',getUTCFullYear);

// 26. getUTchours()
const getutcHours = new Date().getUTCHours();
console.log('UTC Hours:',getutcHours);

// 27. getUTCminutes()
const getutcMinutes = new Date().getUTCMinutes();
console.log('UTC Minutes:',getutcMinutes);

// 28. getUTCseconds()
const getutcSeconds = new Date().getUTCSeconds();
console.log('UTC Seconds:',getutcSeconds);

// 29. getUTCMilliSeconds()
const getutcMilliSeconds = new Date().getUTCMilliseconds();
console.log('UTC Milli Seconds:',getutcMilliSeconds );

//30. setUTCdate()
const setUTCDate = new Date().setUTCDate(25);
console.log('updated UTC date:',new Date(setUTCDate));

//31. setUTCMonth()
const setUTCMonth = new Date().setUTCMonth(6);
console.log('Updated Month:',new Date(setUTCMonth));

//32. setUTCFullYear()
const setUTCFullYear = new Date().setUTCFullYear(1969);
console.log('updated UTC full year:',new Date(setUTCFullYear));

//33. setUTCHours()
const setUTCHours = new Date().setUTCHours(5);
console.log('Updated UTC Hours:',new Date(setUTCHours));

//34. setUTCMinutes()
const setUTCMinutes = new Date().setUTCMinutes(20);
console.log('Updated UTC minutes:',new Date(setUTCMinutes));

//35.setUTCSeconds()
const setUTCSeconds = new Date().setUTCSeconds(35);
console.log('Updated UTC Seconds:',new Date(setUTCSeconds));

//36.setUTCMilliSeconds()
const setUTCMilliSeconds = new Date().setUTCMilliseconds(700);
console.log('Updated UTC milliSeconds:',new Date (setUTCMilliSeconds));




