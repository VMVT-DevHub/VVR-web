import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalStyle, theme } from './styles/index.ts';
import './locale/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyle />
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
