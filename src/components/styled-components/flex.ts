import styled from '@emotion/styled';

interface IFlexProps {
	gap?: string;
}

export const FlexCenter = styled.div<IFlexProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${props => props.gap || '0'};
`;
