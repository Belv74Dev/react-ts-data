import { FC } from 'react';

import Nav from './../nav/Nav';

import style from './header.module.css';

const Header: FC = () => {
	return (
		<header className={style.header}>
			<Nav />
		</header>
	);
};

export default Header;
