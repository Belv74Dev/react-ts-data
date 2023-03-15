
import { Dispatch, SetStateAction } from 'react';

export interface searchTypes {
	search: string;
	setSearch: Dispatch<SetStateAction<string>>
}
