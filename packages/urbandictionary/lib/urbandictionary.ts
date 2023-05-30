import { fetch, FetchResultTypes } from "@sapphire/fetch";
import type { List } from "./types";

export class Client {
	private readonly url: string = "https://api.urbandictionary.com/v0";

	public async autocomplete(term: string) {
		return fetch<string[]>(
			`${this.url}/autocomplete?term=${term}`,
			FetchResultTypes.JSON,
		);
	}
	public async define(term: string) {
		return fetch<List>(
			`${this.url}/define?term=${term}`,
			FetchResultTypes.JSON,
		);
	}
}
