import { fetch, FetchMethods, FetchResultTypes } from "@sapphire/fetch";
import type { Options } from "./types";

const URL = "https://api.discordlist.gg/v0";

export class Client {
	options: Options;
	constructor(options: Options) {
		this.options = options;
	}

	/**
	 * Get a single bot from api
	 * @param id Bot id (if none provided, the id provided on the client constructor will be used)
	 * @returns bot response
	 */
	public async getBot(id?: string) {
		return fetch<boolean>(
			`${URL}/bots/${id ?? this.options.id}`,
			{
				method: FetchMethods.Get,
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
			},
			FetchResultTypes.JSON,
		);
	}

	/**
	 * Post guild count with the [post method](https://api.discordlist.gg/developers#/paths/~1bots~1%7Bid%7D~1guilds/post)
	 * @param count guild count
	 * @returns boolean
	 */
	public async postGuildCount(count: number) {
		return fetch<boolean>(
			`${URL}/bots/${this.options.id}/guilds`,
			{
				method: FetchMethods.Post,
				headers: {
					Authorization: `Bearer ${this.options.token}`,
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify({
					count,
				}),
			},
			FetchResultTypes.JSON,
		);
	}
}
