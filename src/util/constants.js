export const API_KEY = '0ef888ae50d8f3c7ce581bac0f77fa52';
export const BASE_URL = 'https://api.themoviedb.org/3/';

export const IMG_PATH = 'https://image.tmdb.org/t/p';
export const VIDEO_PATH = 'https://youtu.be/';
export const imagePath = {
    original: `${IMG_PATH}/original`,
    w200: `${IMG_PATH}/w200`,
    w300: `${IMG_PATH}/w300`,
    w500: `${IMG_PATH}/w500`,
    face: `${IMG_PATH}/w138_and_h175_face`
};
export const videoPath = (key) => {
    return `${VIDEO_PATH}${key}`;
}
export const videoImage = (key) => {
    return `https://i.ytimg.com/vi/${key}/hqdefault.jpg`;
}
