export interface ISocialNetwork {
	count: number;
	username: string;
}

export type TSocialNetwork = Promise<ISocialNetwork[]>;
