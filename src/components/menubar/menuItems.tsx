import {
	Business,
	Equalizer,
	FilterAlt,
	Person,
	Spellcheck,
	Topic,
} from '@mui/icons-material';
import routes from '../../application/routes';

const menuItems = [
	{
		label: 'General Stats',
		icon: <Equalizer />,
		link: routes.general,
	},
	{
		label: 'Entity Profile',
		icon: <Person />,
		link: '/profile',
	},
	{
		label: 'Advanced Filters',
		icon: <FilterAlt />,
		link: routes.filters,
	},
	{
		label: 'Words War',
		icon: <Spellcheck />,
		link: routes.words,
	},
	{
		label: 'Topics Analysis',
		icon: <Topic />,
		link: routes.topics,
	},
	{
		label: 'Entities Analysis',
		icon: <Business />,
		link: routes.entities,
	},
	// {
	// 	label: 'Add Entity',
	// 	icon: <Add />,
	// 	link: routes.add,
	// },
	// {
	// 	label: 'Update Entity',
	// 	icon: <SystemUpdateAlt />,
	// 	link: routes.update,
	// },
	// {
	// 	label: 'Search Twitter',
	// 	icon: <Search />,
	// 	link: routes.search,
	// },
	// {
	// 	label: 'View Operations',
	// 	icon: <RemoveRedEye />,
	// 	link: routes.operations,
	// },
];

export default menuItems;
