import viaggi from "./data/data";

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i className="bi bi-airplane-fill"></i> SST-Project
            </a>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Viaggi
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="row row-cols-3">
            {viaggi.map((viaggio) => (
              <div className="col" key={viaggio.id}>
                <div className="card p-3">
                  <img src="https://placehold.co/600x400" alt="" />
                  <h3 className="card-title">{viaggio.destinazione}</h3>
                  <p><strong>{viaggio.partenza}-{viaggio.destinazione}</strong></p>
                  <p>dal <strong>{viaggio.dataInizio}</strong> fino al <strong>{viaggio.dataFine}</strong></p>
                  <button className="btn btn-primary">Mostra dettagli</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default App;