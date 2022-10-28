import { HausConnectProvider } from '@dh-test/connect';
import { HausThemeProvider } from '@dh-test/ui';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <HashRouter>
      <HausThemeProvider>
        <HausConnectProvider>
          <App />
        </HausConnectProvider>
      </HausThemeProvider>
    </HashRouter>
  </StrictMode>
);
