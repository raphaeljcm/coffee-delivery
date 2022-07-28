import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';
import { ProductContextProvider } from './contexts/ProductContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import 'react-toastify/dist/ReactToastify.css';
import { OrderContextProvider } from './contexts/OrderContext';
import { ModalContextProvider } from './contexts/ModalContext';

ReactModal.setAppElement('#root');

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ModalContextProvider>
          <ProductContextProvider>
            <OrderContextProvider>
              <Router />
            </OrderContextProvider>
          </ProductContextProvider>
        </ModalContextProvider>
        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
