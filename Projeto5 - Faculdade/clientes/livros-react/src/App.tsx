import LivroLista from '../src/LivroLista.js';
import LivroDados from '../src/LivroDados.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg">
          <div className="container">            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link classNtouame="nav-link navbar-brand" to="/">
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link navbar-brand" to="/dados">
                    Novo
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
