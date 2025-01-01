import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export async function fetchTopAlbums() {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}
export async function fetchNewAlbums() {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}
export async function fetchSongs() {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}
export async function fetchGenres() {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}