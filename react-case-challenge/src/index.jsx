import React from 'react';
import ReactDOM from 'react-dom';
import { CroctProvider } from '@croct/plug-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CroctProvider appId="00000000-0000-0000-0000-000000000000">
      <App />
    </CroctProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
