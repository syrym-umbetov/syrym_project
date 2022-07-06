import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import { Provider } from 'react-redux';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { FavouritesProvider } from './context/FavouritesContext';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <FavouritesProvider>
          <ShoppingCartProvider>
            <App />
          </ShoppingCartProvider>
        </FavouritesProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
);
