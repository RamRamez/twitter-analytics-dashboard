import { Route, Routes } from 'react-router-dom';
import GeneralIndex from '../components/views/general/General.index';
import NotFound from '../components/views/NotFound';
import routes from './routes';
import AdminIndex from '../components/views/admin/Admin.index';

function AppRoutes() {
	return (
		<Routes>
			<Route path={routes.general} element={<GeneralIndex />} />
			<Route path={routes.admin} element={<AdminIndex />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default AppRoutes;
