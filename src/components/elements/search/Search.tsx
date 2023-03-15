import { FC, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

import style from './search.module.css';

import { searchTypes } from './types';

const Search: FC<searchTypes> = ({ search, setSearch }) => {

	const handleChange = (value: string) => {
		setSearch(value)
	}

	return (
		<div className={style.search}>
			<div className={style.search__input}>
				<input
					type="text"
					placeholder='Search request'
					value={search}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</div>
			<div className={style.search__row}>
				{search !== '' &&
					<span
						className={style.search__clear}
						onClick={() => setSearch('')}
					>
						<AiOutlineClose />
					</span>
				}
				<button className={style.search__icon}
				>
					<CiSearch />
				</button>
			</div>
		</div>
	);
};

export default Search;
