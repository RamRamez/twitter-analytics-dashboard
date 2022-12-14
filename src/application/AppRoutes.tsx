import { Route, Routes } from 'react-router-dom';
import GeneralIndex from '../components/views/general/General.index';
import NotFound from '../components/views/NotFound';
import routes from './routes';
import AdminIndex from '../components/views/admin/Admin.index';
import ProfileIndex from '../components/views/profile/Profile.index';
import Filters from '../components/views/Filters';
import WordsWarIndex from '../components/views/wordsWar/WordsWar.index';
import WordCloudIndex from '../components/views/wordCloud/WordCloud.index';
import WordsInfluenceIndex from '../components/views/wordsInfluence/WordsInfluence.index';
import ProfilesInfluenceIndex from '../components/views/ProfilesInfluence/ProfilesInfluence.index';
import AddProfilesIndex from '../components/views/addProfiles/AddProfiles.index';
import Logs from '../components/views/Logs';

function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.general} element={<GeneralIndex />} />
			<Route path={routes.profile} element={<ProfileIndex />} />
			<Route path={routes.filters} element={<Filters />} />
			<Route path={routes.wordsWar} element={<WordsWarIndex />} />
			<Route path={routes.wordCloud} element={<WordCloudIndex />} />
			<Route path={routes.wordsInfluence} element={<WordsInfluenceIndex />} />
			<Route path={routes.profilesInfluence} element={<ProfilesInfluenceIndex />} />
			<Route path={routes.addProfiles} element={<AddProfilesIndex />} />
			<Route path={routes.logs} element={<Logs />} />
			<Route path={routes.admin} element={<AdminIndex />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default AppRoutes;
