import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProductsPage from 'pages/productsPage/ProductsPage';
import PricePlans from './../pages/pricePlans/PricePlans';
import PagesPage from './../pages/pagesPage/PagesPage';

const RoutesComponent: FC = () => {
	return (

		<Routes>
			<Route path='/products' element={<ProductsPage />} />
			<Route path='/price-plans' element={<PricePlans />} />
			<Route path='/pages' element={<PagesPage />} />
		</Routes>

	);
};

export default RoutesComponent;
