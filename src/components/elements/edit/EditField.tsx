import style from './editField.module.css';

import { editComponentFieldsTypes } from './types';

const EditField = <T extends { id: number }>({
	label,
	accessor,
	value,
	onChange
}: editComponentFieldsTypes<T>) => {
	return (
		<div className={style.editField}>
			<span className={style.editField__label}>{label}</span>
			<div className={style.editField__input}>
				<input
					type="text"
					value={value}
					onChange={(e) => onChange(accessor, e.target.value)}
				/>
			</div>
		</div>
	);
};

export default EditField;
