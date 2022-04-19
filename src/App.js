import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import {
  Home,
  About,
  Products,
  Error,
  SharedLayout,
  SingleProduct,
  Login,
  Dashboard,
  ProtectedRoute,
  SharedProductLayout,
} from './pages';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='*' element={<Error />} />
          <Route
            path='login'
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard isLoggedIn={isLoggedIn} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
