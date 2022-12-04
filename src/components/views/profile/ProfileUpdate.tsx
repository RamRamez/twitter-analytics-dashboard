import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { updateProfiles } from '../../../api/apiRequests';
import { IUserProps } from '../../../types/timeAndUserProps';
import { EToastType, gToast } from '../../gToast';
import { showToastError } from '../../../lib/helpers';

export default function ProfileUpdate({ user }: IUserProps) {
	const handleUpdate = () => {
		gToast('Updating profile...', { type: EToastType.INFO });
		const query = { users: [user!] };
		updateProfiles(query)
			.then(res => {
				gToast(res.message, { type: EToastType.SUCCESS });
			})
			.catch(showToastError);
	};

	return (
		<Wrapper>
			<Button onClick={handleUpdate} variant='contained'>
				Update
			</Button>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
	text-align: center;
`;
