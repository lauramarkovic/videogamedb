export const API_BASE_URL = 'https://api.rawg.io/api/';
export const API_GAMES_URL = 'https://api.rawg.io/api/games';
export const API_KEY = 'e6a940d887bf41078c92367f11366182';

const date = new Date();

const yearNow = date.getFullYear();
const monthNow = date.getMonth() + 1;
const dayNow = date.getDate();

export const currentDate = `${yearNow}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow < 10 ? `0${dayNow}` : dayNow}`;
export const nextDate = `${yearNow + 1}-${monthNow < 10 ? `0${monthNow}` : monthNow}-${dayNow < 10 ? `0${dayNow}` : dayNow}`;