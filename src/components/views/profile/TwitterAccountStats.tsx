import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { CalendarMonth, Link as LinkIcon, LocationOn } from '@mui/icons-material';
import { FlexCenter } from '../../styled-components/flex';
import TooltipHelp from '../../TooltipHelp';
import { IUserProps } from '../../../types/timeAndUserProps';
import { fetchUser } from '../../../api/apiRequests';
import { IUser } from '../../../types/user';
import { displayUrl, expandedUrl, formatAuthorLink } from '../../../lib/helpers';
import { TTweetWithMedia } from '../../../types/tweet';
import TweetCard from '../../TweetCard';

export default function TwitterAccountStats({ user }: IUserProps) {
	const [userData, setUserData] = useState<IUser>();
	const [pinnedTweet, setPinnedTweet] = useState<TTweetWithMedia>();

	useEffect(() => {
		fetchUser(user!).then(res => {
			setUserData(res.user);
			const { pinnedTweet: _pinnedTweet, media } = res;
			if (_pinnedTweet) {
				setPinnedTweet({ ..._pinnedTweet, media });
			}
		});
	}, [user]);

	return (
		<Wrapper>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Twitter Account Stats
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<UserData>
				<ProfileImage>
					<img
						width='50px'
						height='50px'
						src={userData?.profile_image_url}
						alt='profile'
					/>
				</ProfileImage>
				<Typography sx={{ fontWeight: 'bold' }} variant='body1'>
					{userData?.name}
				</Typography>
				<a
					target='_blank'
					href={formatAuthorLink(userData?.username)}
					rel='noreferrer noopener'
				>
					<Typography variant='subtitle2' color='textSecondary'>
						{`@${userData?.username}`}
					</Typography>
				</a>
				<Typography
					sx={{ whiteSpace: 'pre-line', marginTop: '20px' }}
					variant='body1'
				>
					{userData?.description}
				</Typography>
				<JoinedDate variant='subtitle2' color='textSecondary'>
					<div>
						<CalendarMonth color='inherit' />
						{`Joined ${userData?.created_at.split('T')[0]}`}
					</div>
					{userData?.location && (
						<div>
							<LocationOn color='inherit' />
							{userData.location}
						</div>
					)}
					{userData?.url && (
						<a
							target='_blank'
							rel='noreferrer noopener'
							href={expandedUrl(userData)!}
						>
							<LinkIcon color='inherit' />
							{displayUrl(userData)}
						</a>
					)}
				</JoinedDate>
				<PublicMetrics>
					<Typography component='div' variant='body1' color='textSecondary'>
						<div>
							<span>{userData?.public_metrics?.following_count} </span>
							<span>following</span>
						</div>
						<div>
							<span>{userData?.public_metrics?.followers_count} </span>
							<span>followers</span>
						</div>
						<div>
							<span>{userData?.public_metrics?.listed_count} </span>
							<span>listed count</span>
						</div>
						<div>
							<span>{userData?.public_metrics?.tweet_count} </span>
							<span>total tweets</span>
						</div>
					</Typography>
				</PublicMetrics>
				<Typography sx={{ mt: 2, fontWeight: 'bold' }} variant='body1'>
					{userData?.verified ? 'Verified' : 'Not Verified'}
				</Typography>
				<Typography sx={{ mt: 1, fontWeight: 'bold' }} variant='body1'>
					{userData?.protected ? 'Protected' : 'Not Protected'}
				</Typography>
				{pinnedTweet && <TweetCard pinned tweet={pinnedTweet} />}
			</UserData>
		</Wrapper>
	);
}

const PublicMetrics = styled.div`
	margin-top: 20px;
	> * {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;

		> div > span:first-of-type {
			font-weight: bold;
			color: black;
		}
	}
`;

const JoinedDate = styled(Typography)`
	display: flex;
	align-items: center;
	margin-top: 20px;
	gap: 20px;
	flex-wrap: wrap;
	> * {
		display: flex;
		align-items: center;
		gap: 5px;
	}
`;

const UserData = styled.div`
	max-width: 700px;
	margin: 40px auto;
`;

const ProfileImage = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	overflow: hidden;
	margin-bottom: 20px;
`;

const tooltipCopy =
	'Showing general stats for the Twitter account. This includes the account name, description, date joined, pinned tweet and more.';

const Wrapper = styled.div`
	margin: 50px auto;
`;
