import { FC, useState, useMemo } from 'react';

import Search from 'components/elements/search/Search';
import Filter from './../../elements/filters/Filter';
import Table from './../../elements/table/Table';
import Popup from 'components/elements/popup/Popup';
import EditList from './../../elements/edit/EditList';

import globalStyle from 'styles/global.module.css';
import style from './tablePageTemplate.module.css';

import { dataPageTemplateTypes, filterFieldsTypes } from './types';

const TablePageTemplate = <T extends { id: number }>({
	title,
	data,
	columns,
	searchFields,
	filterFields,
	editFields,
	setData
}: dataPageTemplateTypes<T>) => {
	const [search, setSearch] = useState('');
	const [filters, setFilters] = useState<Required<filterFieldsTypes<T>>[]>(
		filterFields.map(item => ({ ...item, activeItem: null }))
	);
	const [isOpenEditPopup, setIsOpenEditPopup] = useState(false);
	const [editItem, setEditItem] = useState<T | null>(null);

	const handleFilterChange = (accessor: keyof T, activeItem: any) => {
		setFilters(filters => filters.map(item =>
			item.accessor === accessor ? { ...item, activeItem } : item
		));
	};

	const searchData = useMemo(() => {
		if (search.trim() === '')
			return data
		return data.filter(item =>
			searchFields.some(field =>
				(item[field] as string).includes(search)
			)
		);
	}, [data, search]);

	const filterProducts = useMemo(() => {
		let filteredData = searchData;

		filters.forEach(filter => {
			if (filter.activeItem !== null)
				filteredData = filteredData.filter(item =>
					item[filter.accessor] === filter.activeItem
				);
		});

		return filteredData;
	}, [searchData, filters]);

	const handleOpenEdit = (item: T) => {
		setIsOpenEditPopup(true);
		setEditItem(item);
	}

	const handleUpdateItem = (item: T) => {
		setData(data => data.map(dataItem =>
			dataItem.id === item.id ? item : dataItem
		))
		setIsOpenEditPopup(false);
	}

	return (
		<section className={style.tablePageTemplate}>
			<h1 className={globalStyle.root__h1}>{title}</h1>
			<div className={style.tablePageTemplate__content}>
				<div className={style.tablePageTemplate__left}>
					<Search search={search} setSearch={setSearch} />
					<div className={style.tablePageTemplate__filters}>
						{filters.map(({ header, accessor, options, activeItem }) => (
							<Filter<T>
								key={header}
								title={header}
								activeItem={activeItem}
								accessor={accessor}
								options={options}
								onSelect={handleFilterChange} />
						))}
					</div>
				</div>
				<div className={style.tablePageTemplate__right}>
					<Table<T>
						data={filterProducts}
						columns={columns}
						handleClickButton={handleOpenEdit}
					/>
				</div>
			</div>
			{isOpenEditPopup && editItem &&
				<Popup
					title="Edit"
					onClose={() => setIsOpenEditPopup(false)}
				>
					<EditList
						dataItem={editItem}
						fields={editFields}
						onSave={handleUpdateItem} />
				</Popup>
			}
		</section>
	);
};

export default TablePageTemplate;