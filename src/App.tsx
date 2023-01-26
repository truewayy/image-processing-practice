import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
