import { FC, useState } from 'react';

import useFormatting from 'services/formatting';

import TablePageTemplate from './../../components/templates/tablePageTemplate/TablePageTemplate';

import { pagesTypes } from './types';
import { searchFieldsTypes, filterFieldsTypes } from 'components/templates/tablePageTemplate/types';
import { tableColumnTypes } from 'components/elements/table/types';
import { editFieldsTypes } from 'components/elements/edit/types';

import { pageslist } from './pagesPageList';

const { dateFormatting } = useFormatting();

const pagesFormatting = () => pageslist.map(item => ({
	...item,
	updatedAt: dateFormatting(item.updatedAt),
	publishedAt: dateFormatting(item.publishedAt)
}));

const columns: tableColumnTypes<pagesTypes>[] = [
	{ header: 'Name', accessor: 'title' },
	{ header: 'Status', accessor: 'active' },
	{ header: 'Updated', accessor: 'updatedAt' },
	{ header: 'Published', accessor: 'publishedAt' },
];

const searchFields: searchFieldsTypes<pagesTypes>[] = ['title'];

const filterFields: filterFieldsTypes<pagesTypes>[] = [
	{
		header: 'Status', accessor: 'active', options: [
			{ label: 'true', value: true },
			{ label: 'false', value: false },
		]
	}
];

const editFields: editFieldsTypes<pagesTypes>[] = [
	{ label: 'Title', accessor: 'title' }
];

const PagesPage: FC = () => {
	const [pages, setPages] = useState<pagesTypes[]>(pagesFormatting);

	return (
		<TablePageTemplate<pagesTypes>
			title="Pages"
			data={pages}
			columns={columns}
			searchFields={searchFields}
			filterFields={filterFields}
			editFields={editFields}
			setData={setPages}
		/>
	);
};

export default PagesPage;
