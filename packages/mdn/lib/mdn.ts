import { fetch, FetchResultTypes } from "@sapphire/fetch";
import type { Root } from "./types";

export class Client {
	private readonly url: string = "https://developer.mozilla.org";

	public async search(query: string, size = 20) {
		const fullUrl = new URL(`${this.url}/api/v1/search`);
		fullUrl.searchParams.append("q", query);
		fullUrl.searchParams.append("size", size.toString());

		return fetch<Root>(
			fullUrl,
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
			FetchResultTypes.JSON,
		);
	}
}
