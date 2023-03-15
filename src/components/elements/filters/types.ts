export type filterOptionValueTypes = string | boolean | number | null;

export interface filterOptionTypes {
	label: string;
	value: filterOptionValueTypes;
};

export interface filterTypes<T> {
	title: string;
	activeItem: filterOptionValueTypes;
	accessor: keyof T;
	options: filterOptionTypes[];
	onSelect: (accessor: keyof T, activeItem: filterOptionValueTypes) => void;
}