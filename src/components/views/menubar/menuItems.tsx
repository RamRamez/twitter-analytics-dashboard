import {
	Add,
	Business,
	Equalizer,
	FilterAlt,
	Person,
	RemoveRedEye,
	Search,
	Spellcheck,
	SystemUpdateAlt,
	Topic,
} from '@mui/icons-material';

const menuItems = [
	{
		label: 'General Stats',
		icon: <Equalizer />,
		link: '/',
	},
	{
		label: 'Entity Profile',
		icon: <Person />,
		link: '/profile',
	},
	{
		label: 'Advanced Filters',
		icon: <FilterAlt />,
		link: '/filter',
	},
	{
		label: 'Words Analysis',
		icon: <Spellcheck />,
		link: '/words',
	},
	{
		label: 'Topics Analysis',
		icon: <Topic />,
		link: '/topic',
	},
	{
		label: 'Entities Analysis',
		icon: <Business />,
		link: '/entities',
	},
	{
		label: 'Add Entity',
		icon: <Add />,
		link: '/add',
	},
	{
		label: 'Update Entity',
		icon: <SystemUpdateAlt />,
		link: '/update',
	},
	{
		label: 'Search Twitter',
		icon: <Search />,
		link: '/search',
	},
	{
		label: 'View Operations',
		icon: <RemoveRedEye />,
		link: '/operations',
	},
];

export default menuItems;
