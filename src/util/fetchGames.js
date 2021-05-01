const date = new Date();

const yearNow = date.getFullYear();
const monthNow = date.getMonth() + 1;
const dayNow = date.getDate();

export const currentDate = `${yearNow}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow < 10 ? `0${dayNow}` : dayNow}`;
export const nextDate = `${yearNow + 1}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow < 10 ? `0${dayNow}` : dayNow}`;