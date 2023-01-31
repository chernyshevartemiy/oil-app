import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Team } from './pages/Team';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Layout } from './components/Layout';
import { Error } from './pages/Error';
import { YMaps } from '@pbe/react-yandex-maps';

const App: React.FC = () => {
  return (
    <YMaps>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='services' element={<Services />} />
          <Route path='team' element={<Team />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </YMaps>
  );
};

export default App;
