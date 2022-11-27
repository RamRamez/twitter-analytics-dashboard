export enum ETimeRange {
	week = 'week',
	month = 'month',
	threeMonth = '3month',
	halfYear = 'halfYear',
	year = 'year',
	all = 'all',
}

export interface ITimeRangeProps {
	timeRange: ETimeRange;
}

export interface IUserProps {
	user?: string;
}

export interface ITimeAndUserProps extends ITimeRangeProps, IUserProps {}
