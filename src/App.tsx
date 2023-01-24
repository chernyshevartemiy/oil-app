import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { Job } from './pages/Job';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Layout } from './components/Layout';
import { Error } from './pages/Error';
const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Main />} />
        <Route path='job' element={<Job />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;
