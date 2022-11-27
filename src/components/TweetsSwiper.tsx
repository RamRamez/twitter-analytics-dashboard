import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import styled from '@emotion/styled';
import TweetCard from './TweetCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FlexCenter } from './styled-components/flex';
import { TTweetsWithMedia } from './views/InfluentialTweets';

interface IProps {
	tweets?: TTweetsWithMedia;
}

export default function TweetsSwiper(props: IProps) {
	const { tweets } = props;
	const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();

	useEffect(() => {
		swiperInstance?.slideTo(0);
	}, [tweets]);

	return (
		<Container>
			<Swiper
				pagination
				navigation
				modules={[Pagination, Navigation]}
				onSwiper={setSwiperInstance}
				slidesPerView={1}
				spaceBetween={24}
			>
				{tweets?.map(tweet => (
					<SwiperSlide key={tweet.id}>
						<TweetCard tweet={tweet} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

const Container = styled(FlexCenter)`
	margin: 0 auto;
	max-width: 800px;
	.swiper-slide.swiper-slide-active {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.swiper-wrapper {
		display: flex;
		align-items: center;
	}
`;
