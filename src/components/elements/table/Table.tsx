import style from './table.module.css';

import { tableTypes } from './types';

const Table = <T extends { id: number }>({
	data,
	columns,
	handleClickButton
}: tableTypes<T>) => {
	return (
		<table className={style.table}>
			<thead className={style.table__head}>
				<tr className={style.head__row}>
					{columns.map((column) => (
						<th
							key={column.header}
							className={style.head__item}
						>
							{column.header}
						</th>
					))}
					<th className={style.head__item} />
				</tr>
			</thead>
			<tbody className={style.table__body}>
				{data.map((item, index) => (
					<tr
						key={index}
						className={style.body__row}
					>
						{columns.map((column) => (
							<td
								key={column.header}
								className={style.body__item}
							>
								{`${item[column.accessor]}`}
							</td>
						))}
						<td className={style.body__item}>
							<button
								className={style.body__edit}
								onClick={() => handleClickButton(item)}
							>
								Edit
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;