import {
	Add,
	Business,
	Cloud,
	Equalizer,
	FilterAlt,
	Person,
	RemoveRedEye,
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
		link: routes.wordsWar,
	},
	{
		label: 'Word Cloud',
		icon: <Cloud />,
		link: routes.wordCloud,
	},
	{
		label: 'Words Influence',
		icon: <Topic />,
		link: routes.wordsInfluence,
	},
	{
		label: 'Profiles Influence',
		icon: <Business />,
		link: routes.profilesInfluence,
	},
	{
		label: 'Add Profiles',
		icon: <Add />,
		link: routes.addProfiles,
	},
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
	{
		label: 'View Logs',
		icon: <RemoveRedEye />,
		link: routes.logs,
	},
];

export default menuItems;
