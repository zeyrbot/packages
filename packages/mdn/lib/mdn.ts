import { fetch, FetchResultTypes } from "@sapphire/fetch";
import type { Root } from "./types";
import os from "node:os";

export class Client {
	private readonly url: string = "https://developer.mozilla.org";
	private readonly user_agent: string = `@zeyrbot/mdn/1.0.0 (node-fetch) ${os.platform()}/${os.release()} (https://github.com/zeyrbot/packages/tree/main/packages/mdn)`;

	public async search(query: string, size = 20) {
		const fullUrl = new URL(`${this.url}/api/v1/search`);
		fullUrl.searchParams.append("q", query);
		fullUrl.searchParams.append("size", size.toString());

		return fetch<Root>(
			fullUrl,
			{
				headers: {
					"Content-Type": "application/json",
					"User-Agent": this.user_agent,
				},
			},
			FetchResultTypes.JSON,
		);
	}
}
