import axios from 'axios';
import { BASE_URL, API_KEY } from '../util/constants';

export async function fetchData(path, queries = {}) {
    let url = `${BASE_URL}${path}?api_key=${API_KEY}&language=ko-KR`;
    Object.keys(queries).forEach(key => {
        url += `&${key}=${queries[key]}`;
    });
    let response = await axios.get(url);
    return response.data;
}

export async function getRandomWeekMovie() {
    let weekMovies = await fetchData('trending/movie/week');
    let list = weekMovies.results;
    let selected = list[Math.floor(Math.random() * list.length)];

    while (!selected.title || !selected.overview || !selected.backdrop_path) {
        selected = list[Math.floor(Math.random() * list.length)];
    }

    return selected;
}
