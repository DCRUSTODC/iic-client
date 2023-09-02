import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Event from './pages/Event';

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Layout />}>
        <Route element={<Home />} index />
        <Route element={<Event />} path = "/events" />
        <Route element={<Team />} path = "/team" />
      </Route>
    </Routes>
  );
}

export default App;
