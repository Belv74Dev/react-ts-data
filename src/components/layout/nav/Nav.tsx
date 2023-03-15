import { FC } from 'react';

import { Link } from "react-router-dom";

import style from './nav.module.css';

const Nav: FC = () => {
	return (
		<ul className={style.nav}>
			<li className={style.nav__item}>
				<Link to="products">Products</Link>
			</li>
			<li className={style.nav__item}>
				<Link to="price-plans">Price Plans</Link>
			</li>
			<li className={style.nav__item}>
				<Link to="pages">Pages</Link>
			</li>
		</ul>
	);
};

export default Nav;
