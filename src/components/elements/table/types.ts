export interface tableColumnTypes<T> {
	header: string;
	accessor: keyof T;
};

export interface tableTypes<T extends { id: number }> {
	data: T[];
	columns: tableColumnTypes<T>[];
	handleClickButton: (item: T) => void;
};