export interface Options {
	id: string;
	token: string;
}

export interface Bot {
	allTimeVotes: string;
	avatar: string;
	briefDescription: string;
	coOwnerIds: string[];
	createdOn: string;
	discriminator: number;
	features: string;
	flags: string;
	guildCount: number;
	id: string;
	instagramUrl: Nullable<string>;
	inviteUrl: string;
	isForcedIntoHiding: boolean;
	isHidden: boolean;
	isPackable: boolean;
	longDescription: string;
	ownerId: string;
	prefix: string;
	repoUrl: Nullable<string>;
	slug: Nullable<string>;
	supportServerUrl: Nullable<string>;
	tags: string[];
	twitterUrl: Nullable<string>;
	username: string;
	votes: string;
	websiteUrl: Nullable<string>;
}

type Nullable<T> = T | null;
