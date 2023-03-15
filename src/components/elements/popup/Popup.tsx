import { FC, useRef, MouseEventHandler } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import style from './popup.module.css';

import { popupTypes } from './type';

const Popup: FC<popupTypes> = ({ title, onClose, children }) => {
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleOutsideClick: MouseEventHandler = (event) => {
		if (wrapperRef.current && wrapperRef.current === event.target) {
			onClose();
		}
	};

	return (
		<div
			className={style.popup}
			ref={wrapperRef}
			onClick={handleOutsideClick}
		>
			<div className={style.popup__content}>
				<div className={style.popup__row}>
					<h2 className={style.popup__title}>{title}</h2>
					<button
						className={style.popup__close}
						onClick={onClose}
					>
						<AiOutlineClose />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};

export default Popup;
