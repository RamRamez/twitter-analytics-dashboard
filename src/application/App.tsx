import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import MenubarIndex from '../components/menubar/Menubar.index';
import '../index.css';
import SignIn from '../components/views/SignIn';
import { apiCheckSignIn } from '../api/apiRequests';

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({ name: '', role: '' });

	useEffect(() => {
		apiCheckSignIn()
			.then(res => {
				setUser(res);
				setIsSignedIn(true);
				setLoading(false);
			})
			.catch(() => {
				setIsSignedIn(false);
				setLoading(false);
			});
	}, []);

	if (loading) return null;
	if (!isSignedIn) return <SignIn setIsSignedIn={setIsSignedIn} />;
	return (
		<BrowserRouter>
			<MenubarIndex user={user} setIsSignedIn={setIsSignedIn} />
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
