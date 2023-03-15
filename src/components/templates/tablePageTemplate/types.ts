import { Dispatch, SetStateAction } from 'react';

import { tableTypes } from 'components/elements/table/types';
import { filterOptionTypes, filterOptionValueTypes } from 'components/elements/filters/types';
import { editFieldsTypes } from 'components/elements/edit/types';

export type searchFieldsTypes<T> = {
	[K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export interface filterFieldsTypes<T> {
	header: string;
	accessor: keyof T;
	options: filterOptionTypes[];
	activeItem?: filterOptionValueTypes;
};

export interface dataPageTemplateTypes<T extends { id: number }>
	extends Omit<tableTypes<T>, 'handleClickButton'> {
	title: string;
	searchFields: searchFieldsTypes<T>[];
	filterFields: filterFieldsTypes<T>[];
	editFields: editFieldsTypes<T>[];
	setData: Dispatch<SetStateAction<T[]>>
};