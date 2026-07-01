import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { ReportProvider } from './context/ReportContext.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ReportProvider>
          <App />
        </ReportProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
