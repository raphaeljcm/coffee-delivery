import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { ProductContextProvider } from './contexts/ProductContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductContextProvider>
          <Router />
        </ProductContextProvider>
        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
