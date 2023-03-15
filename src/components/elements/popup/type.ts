import { ReactNode } from 'react';

export interface popupTypes {
	title: string;
	onClose: () => void;
	children: ReactNode;
}