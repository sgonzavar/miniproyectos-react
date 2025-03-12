import React from 'react';
import '../styles/TodoItem.css';

import { BsCheckLg } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

function TodoItem(props) {

	// const onComplete = () => {
	// 	alert("Completaste el tODO " + props.text);
	// }

	// const onDelete = () => {
	// 	alert("Borraste el tODO " + props.text);
	// }

	return (
		<div className="container-list">
			<li className="TodoItem">
				<span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
						onClick={props.onComplete}>
					<BsCheckLg />
				</span>
				<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
					{props.text}
				</p>
				<span className="Icon Icon-delete"
						onClick={props.onDelete}>
					<MdCancel />
				</span>
			</li>
		</div>
	);
}

export { TodoItem };