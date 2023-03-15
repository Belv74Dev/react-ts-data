import { FC, useState } from 'react';

import useFormatting from 'services/formatting';

import TablePageTemplate from './../../components/templates/tablePageTemplate/TablePageTemplate';

import { productTypes } from './types';
import { searchFieldsTypes, filterFieldsTypes } from 'components/templates/tablePageTemplate/types';
import { tableColumnTypes } from 'components/elements/table/types';
import { editFieldsTypes } from 'components/elements/edit/types';

import { productList } from './productList';

const { dateFormatting } = useFormatting();

const productFormatting = () => productList.map(item => ({
	...item,
	createdAt: dateFormatting(item.createdAt)
}));

const columns: tableColumnTypes<productTypes>[] = [
	{ header: 'Name', accessor: 'name' },
	{ header: 'Status', accessor: 'active' },
	{ header: 'Created', accessor: 'createdAt' },
];

const searchFields: searchFieldsTypes<productTypes>[] = ['name'];

const filterFields: filterFieldsTypes<productTypes>[] = [
	{
		header: 'Status', accessor: 'active', options: [
			{ label: 'true', value: true },
			{ label: 'false', value: false },
		]
	}
];

const editFields: editFieldsTypes<productTypes>[] = [
	{ label: 'Name', accessor: 'name' }
];

const ProductsPage: FC = () => {
	const [products, setProducts] = useState<productTypes[]>(productFormatting);

	return (
		<TablePageTemplate<productTypes>
			title="Products"
			data={products}
			columns={columns}
			searchFields={searchFields}
			filterFields={filterFields}
			editFields={editFields}
			setData={setProducts}
		/>
	);
};

export default ProductsPage;
