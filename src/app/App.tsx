import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from 'components/layout/header/Header';
import RoutesComponent from 'routes/Routes';

import style from './app.module.css';

const App: FC = () => {
	return (
		<Router>
			<div className={style.app}>
				<Header />
				<main className={style.app__container}>
					<RoutesComponent />
				</main>
			</div>
		</Router>
	);
};

export default App;
