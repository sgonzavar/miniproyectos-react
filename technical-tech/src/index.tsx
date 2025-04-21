import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//ref lib styles
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<React.StrictMode>
	  <App />
	</React.StrictMode>,
	document.getElementById('root'),
  );
registerServiceWorker();
