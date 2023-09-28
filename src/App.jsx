import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Event from './pages/Event';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<Home />} index />
        <Route element={<Event />} path="/events" />
        <Route element={<Team />} path="/team" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<Contact />} path="/contact" />
      </Route>
    </Routes>
  );
}

export default App;
