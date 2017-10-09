import axios from 'axios';

const API_KEY = 'cb52xbb296mfsvcexcg8qdhf';
const ROOT_URL = `https://api.walmartlabs.com/v1/search?apiKey=${API_KEY}`;

export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export function fetchProduct(product) {
	// const url = `${ROOT_URL}&itemId=${id}&sort=customerRating&order=desc`;
	const url = `${ROOT_URL}&query=${product}&numItems=10&sort=bestseller&sort=customerRating&facet=on&facet.filter=numReviews:[numReviews>5]&facet.range=price:[3 TO 23]`;
	const request = axios.get(url);

	return {
		type: FETCH_PRODUCT,
		payload: request
	}
}