import { fetch, FetchResultTypes } from "@sapphire/fetch";
import type { List } from "./types";

const URL = "https://api.urbandictionary.com/v0";

export class Client {
	public async autocomplete(term: string) {
		return fetch<string[]>(
			`${URL}/autocomplete?term=${term}`,
			FetchResultTypes.JSON,
		);
	}
	public async define(term: string) {
		return fetch<List>(`${URL}/define?term=${term}`, FetchResultTypes.JSON);
	}
}
