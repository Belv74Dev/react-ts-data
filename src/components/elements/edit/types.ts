export interface editComponentFieldsTypes<T> {
	label: string;
	accessor: editAccessorTypes<T>;
	value: string;
	onChange: (accessor: editAccessorTypes<T>, value: string) => void;
}

export type editAccessorTypes<T> = {
	[K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export interface editFieldsTypes<T> {
	label: string;
	accessor: editAccessorTypes<T>;
}

export interface editListTypes<T> {
	dataItem: T;
	fields: editFieldsTypes<T>[];
	onSave: (item: T) => void;
}