import { Route, Routes } from 'react-router-dom';
import GeneralIndex from '../components/views/general/General.index';
import NotFound from '../components/views/NotFound';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<GeneralIndex />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default AppRoutes;
