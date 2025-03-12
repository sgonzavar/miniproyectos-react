import React, {Fragment} from 'react';
import '../styles/TodoCounter.css';

function TodoCounter(props) {
  const {total, completed} = props;

  return (
    <Fragment>
      <h1 className="title-counter">Ey Que pasa</h1>
      <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
    </Fragment>
  );
}

export { TodoCounter };