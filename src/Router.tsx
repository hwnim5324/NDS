import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const Router = ():JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />}/>
		</Routes>
	);
};

export default Router;
