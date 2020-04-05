import axios from 'axios';
import {BASE_URL, API_KEY} from '../util/constants';

export async function fetchData(path, queries = {}, language = true) {
    let url = language ? `${BASE_URL}${path}?api_key=${API_KEY}&language=ko-KR` : `${BASE_URL}${path}?api_key=${API_KEY}`;
    if (queries) {
        Object.keys(queries).forEach(key => {
            url += `&${key}=${queries[key]}`;
        });
    }
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

export async function getList(type) {
    let list = await fetchData(`movie/${type}`);
    return list.results;
}

export async function getMovieDetail(id) {
    return await fetchData(`movie/${id}`);
}

export async function getMovieImages(id) {
    let images = await fetchData(`movie/${id}/images`, null, false);
    return images.backdrops;
}

export async function getMovieVideos(id) {
    let videos = await fetchData(`movie/${id}/videos`, null, false);
    return videos.results;
}

export async function getMovieRecommendations(id) {
    let recommendations = await fetchData(`movie/${id}/recommendations`);
    return recommendations.results;
}

export async function getMovieCredits(id) {
    let credits = await fetchData(`movie/${id}/credits`);
    return credits.cast;
}
