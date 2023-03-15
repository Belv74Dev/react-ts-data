import { FC, useState } from 'react';

import useFormatting from 'services/formatting';

import TablePageTemplate from './../../components/templates/tablePageTemplate/TablePageTemplate';

import { pricePlanTypes } from './types';
import { searchFieldsTypes, filterFieldsTypes } from 'components/templates/tablePageTemplate/types';
import { tableColumnTypes } from 'components/elements/table/types';
import { editFieldsTypes } from 'components/elements/edit/types';

import { pricePlanList } from './pricePlansList';

const { dateFormatting } = useFormatting();

const pricePlanFormatting = () => pricePlanList.map(item => ({
	...item,
	createdAt: dateFormatting(item.createdAt),
	removedAt: dateFormatting(item.removedAt)
}));

const columns: tableColumnTypes<pricePlanTypes>[] = [
	{ header: 'Name', accessor: 'description' },
	{ header: 'Status', accessor: 'active' },
	{ header: 'Created', accessor: 'createdAt' },
];

const searchFields: searchFieldsTypes<pricePlanTypes>[] = ['description'];

const filterFields: filterFieldsTypes<pricePlanTypes>[] = [
	{
		header: 'Status', accessor: 'active', options: [
			{ label: 'true', value: true },
			{ label: 'false', value: false },
		]
	}
];

const editFields: editFieldsTypes<pricePlanTypes>[] = [
	{ label: 'Description', accessor: 'description' }
];

const PricePlans: FC = () => {
	const [pricePlan, setPricePlan] = useState<pricePlanTypes[]>(pricePlanFormatting);

	return (
		<TablePageTemplate
			title="Price Plan"
			data={pricePlan}
			columns={columns}
			searchFields={searchFields}
			filterFields={filterFields}
			editFields={editFields}
			setData={setPricePlan}
		/>
	);
};

export default PricePlans;
