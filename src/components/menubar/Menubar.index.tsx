import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

interface IProps {
	user: { name: string; role: string };
	setIsSignedIn: (isSignedIn: boolean) => void;
}

function MenubarIndex(props: IProps) {
	return (
		<>
			<LeftMenu />
			<RightMenu {...props} />
		</>
	);
}

export default MenubarIndex;
