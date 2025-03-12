import React from 'react';
import '../styles/CreateTodoButton.css'

import { TiPlusOutline } from 'react-icons/ti'

function CreateTodoButton(props) {
  return (
    <div className="conatiner-button">
      <button className="CreateTodoButton"><TiPlusOutline /></button>
    </div>
  );
}

export { CreateTodoButton };
