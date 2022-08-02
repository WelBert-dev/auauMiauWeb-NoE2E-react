import { Outlet } from 'react-router-dom';

import './index.css';

function App() {
  return (
    <div className="App">
        <header className="row s-between align-items-center">
            <div className="main-home-link">
                <a className="brand" href="/"><h1>Home</h1></a>
            </div>
            <ul className="main-navbar-links row s-between">
                <li><a href="/cliente">Cliente</a></li>
                <li><a href="/animal">Animal</a></li>
                <li><a href="/veterinario">Veterinário</a></li>
                <li><a href="/cirurgia">Cirurgia</a></li>         
            </ul>
        </header>
        <main>
          <Outlet/>
        </main>   
    </div>
  );
}

export default App;
