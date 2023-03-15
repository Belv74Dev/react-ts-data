import { FC, useState } from 'react';

import EditField from './EditField';

import style from './editList.module.css';

import { editAccessorTypes, editListTypes } from './types';

const EditList = <T extends { id: number }>({ dataItem, fields, onSave }: editListTypes<T>) => {
	const [item, setItem] = useState(dataItem);

	const handleChange = (accessor: editAccessorTypes<T>, value: string) => {
		console.log({ ...item, [accessor]: value })
		setItem({ ...item, [accessor]: value });
	}

	return (
		<div className={style.editList}>
			{fields.map(field =>
				<EditField
					key={field.label}
					label={field.label}
					accessor={field.accessor}
					value={item[field.accessor] as string}
					onChange={handleChange}
				/>)
			}
			<button
				className={style.editList__save}
				onClick={() => onSave(item)}
			>
				Save
			</button>
		</div>
	);
};

export default EditList;
