import { fetch, FetchMethods, FetchResultTypes } from "@sapphire/fetch";
import type { Bot, Fail, Options } from "./types";

const URL = "https://api.discordlist.gg/v0";

export class Client {
	options: Options;

	constructor(options: Options) {
		this.options = options;
	}

	/**
	 * Get a single bot from the API.
	 * @param id Bot id (if none provided, the id provided on the client constructor will be used).
	 * @example
	 * await dlist.getBot("1095425642159407165")
	 * @returns Bot response.
	 */
	public async getBot(id?: string): Promise<Bot | Fail> {
		const botId = id ?? this.options.id;

		const requestOptions = {
			method: FetchMethods.Get,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		};

		return fetch<Bot | Fail>(
			`${URL}/bots/${botId}`,
			requestOptions,
			FetchResultTypes.JSON,
		);
	}

	/**
	 * Post guild count using the POST method.
	 * @param count Guild count.
	 * @example
	 * await dlist.postGuildCount(1)
	 * @returns A boolean indicating the success of the request.
	 */
	public async postGuildCount(count: number): Promise<boolean> {
		const requestOptions = {
			method: FetchMethods.Post,
			headers: {
				Authorization: `Bearer ${this.options.token}`,
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({ count }),
		};

		return fetch<boolean>(
			`${URL}/bots/${this.options.id}/guilds`,
			requestOptions,
			FetchResultTypes.JSON,
		);
	}
}
