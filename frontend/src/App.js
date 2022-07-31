import { Outlet } from 'react-router-dom';

import './index.css';

function App() {
  return (
    <div className="App">
        <header className="row s-between">
            <div className="main-home-link w-25percent">
                <a className="brand" href="/">Home</a>
            </div>
            <div className="main-navbar-links w-50percent row s-between">
                <a href="/cliente">Cliente</a>
                <a href="/animal">Animal</a>
                <a href="/veterinario">Veterinário</a>
                <a href="/cirurgia">Cirurgia</a>
            </div>
        </header>
        <main>
          <Outlet/>
        </main>   
    </div>
  );
}

export default App;
