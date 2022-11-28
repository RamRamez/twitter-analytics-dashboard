import { EToastType, gToast } from '../components/gToast';
import { IUser } from '../types/user';

export const showToastError = (err: any) => {
	const errorMessage =
		typeof err === 'string' ? err : err.message || JSON.stringify(err);
	gToast(errorMessage, {
		type: EToastType.DANGER,
	});
	console.log({ err });
};

export const formatDate = (date: string) => {
	const d = new Date(date);
	const year = d.getFullYear();
	const month = `0${d.getMonth() + 1}`.slice(-2);
	const _date = `0${d.getDate()}`.slice(-2);
	const hour = `0${d.getHours()}`.slice(-2);
	const min = `0${d.getMinutes()}`.slice(-2);
	return `${year}-${month}-${_date} ${hour}:${min}`;
};

export const formatTweetLink = (tweetId: string) => {
	return `https://twitter.com/i/web/status/${tweetId}`;
};

export const formatAuthorLink = (authorId?: string) => {
	return `https://twitter.com/${authorId}`;
};

export const displayUrl = (user: IUser) => {
	const { url, entities } = user;
	const urls = entities?.url?.urls;
	if (urls && urls?.length > 0) {
		return urls.find(u => u.url === url)?.display_url;
	}
	return url;
};

export const expandedUrl = (user: IUser) => {
	const { url, entities } = user;
	const urls = entities?.url?.urls;
	if (urls && urls?.length > 0) {
		return urls.find(u => u.url === url)?.expanded_url;
	}
	return url;
};
