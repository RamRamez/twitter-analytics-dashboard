import { Route, Routes } from 'react-router-dom';
import GeneralIndex from '../components/views/general/General.index';
import NotFound from '../components/views/NotFound';
import routes from './routes';
import AdminIndex from '../components/views/admin/Admin.index';
import ProfileIndex from '../components/views/profile/Profile.index';
import Filters from '../components/views/Filters';
import WordsWarIndex from '../components/views/wordsWar/WordsWar.index';

function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.general} element={<GeneralIndex />} />
			<Route path={routes.profile} element={<ProfileIndex />} />
			<Route path={routes.filters} element={<Filters />} />
			<Route path={routes.words} element={<WordsWarIndex />} />
			<Route path={routes.admin} element={<AdminIndex />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default AppRoutes;
