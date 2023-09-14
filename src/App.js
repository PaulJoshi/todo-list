import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Tasks from './components/Tasks';
import About from './components/About';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <main>
          <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;
