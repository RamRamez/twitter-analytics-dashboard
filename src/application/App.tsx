import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import MenubarIndex from '../components/menubar/Menubar.index';
import '../index.css';

function App() {
	return (
		<BrowserRouter>
			<MenubarIndex />
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
