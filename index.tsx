import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import DemoCombine from './demoCombine';
ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <DemoCombine />
    </StyledEngineProvider>
  </React.StrictMode>
);
