import { useState } from 'react';

import { AiOutlineClose, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';

import style from './filter.module.css';

import { filterTypes } from './types';

const Filter = <T extends {}>({
	title,
	activeItem,
	accessor,
	options,
	onSelect
}: filterTypes<T>) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={[style.filter, isOpen ? style.filter_open : ''].join(' ')}>
			<div className={style.filter__label}>
				<div className={style.filter__title} onClick={() => setIsOpen(isOpen => !isOpen)}>
					{title}
				</div>
				<div className={style.filter__btns}>
					<div className={style.filter__clear} onClick={() => onSelect(accessor, null)}>
						{activeItem !== null && <AiOutlineClose />}
					</div>
					<div className={style.filter__arrow} onClick={() => setIsOpen(isOpen => !isOpen)}>
						{isOpen ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
					</div>
				</div>
			</div>
			<ul className={style.filter__list}>
				{options.map(({ label, value }) =>
					<li
						key={`${label}`}
						className={style.filter__item}
						onClick={() => onSelect(accessor, value !== activeItem ? value : null)}
					>
						<div
							className={[
								style.item__checkbox,
								activeItem === value ? style.item__checkbox_active : ''
							].join(' ')}
						>
							<div className={style.item__checked}>
								{activeItem === value ? <RiCheckboxCircleLine /> : <RiCheckboxBlankCircleLine />}
							</div>
						</div>
						<div className={style.item__text}>{label}</div>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Filter;
