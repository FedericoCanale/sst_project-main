import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage({ viaggi, setViaggi }) {
    //set new array with viaggi array
    const [travels, setTravels] = useState(viaggi);
    // search variable connect to search input
    const [search, setSearch] = useState("");

    // function on fomr submit
    function handleSubmit(e) {
        //prevent default behavior
        e.preventDefault();

        //filter array
        const filtered = viaggi.filter(
            (travel) =>
                travel.destinazione.toLowerCase().includes(search.toLowerCase()) ||
                travel.partenza.toLowerCase().includes(search.toLowerCase())
        );
        setTravels(filtered);
    }

    //reset default array when the search input is nearly empty
    useEffect(() => {
        if (search.length < 1) {
            setTravels(viaggi);
        }
    }, [search, viaggi]);


    const [newTrip, setNewTrip] = useState({
        destinazione: "",
        partenza: "",
        dataInizio: "",
        dataFine: "",
        imageUrl: "",
        accompagnatori: [{ nome: "", cognome: "", telefono: "", mail: "" }],
        viaggiatori: [{ nome: "", cognome: "", telefono: "", mail: "", codiceFiscale: "" }],
    });

    function addCompanion() {
        setNewTrip((prev) => ({
            ...prev,
            accompagnatori: [...prev.accompagnatori, { nome: "", cognome: "", telefono: "", mail: "" }],
        }));
    }

    function removeCompanion(index) {
        setNewTrip((prev) => ({
            ...prev,
            accompagnatori: prev.accompagnatori.filter((_, i) => i !== index),
        }));
    }

    function addTraveler() {
        if (newTrip.viaggiatori.length >= 15) return;
        setNewTrip((prev) => ({
            ...prev,
            viaggiatori: [
                ...prev.viaggiatori,
                { nome: "", cognome: "", telefono: "", mail: "", codiceFiscale: "" },
            ],
        }));
    }

    function removeTraveler(index) {
        setNewTrip((prev) => ({
            ...prev,
            viaggiatori: prev.viaggiatori.filter((_, i) => i !== index),
        }));
    }

    function handleCreateTrip(e) {
        e.preventDefault();

        const nextTripId = viaggi.length ? Math.max(...viaggi.map((v) => v.id)) + 1 : 1;

        const companionsWithIds = newTrip.accompagnatori
            .filter((p) => (p.nome || "").trim() || (p.cognome || "").trim())
            .map((p, i) => ({ id: i + 1, ...p }));

        const travelersWithIds = newTrip.viaggiatori
            .filter((p) => (p.nome || "").trim() || (p.cognome || "").trim())
            .map((p, i) => ({ id: i + 1, ...p }));

        const tripToAdd = {
            id: nextTripId,
            destinazione: newTrip.destinazione,
            partenza: newTrip.partenza,
            dataInizio: newTrip.dataInizio,
            dataFine: newTrip.dataFine,
            immagine: newTrip.imageUrl,
            accompagnatori: companionsWithIds,
            viaggiatori: travelersWithIds,
        };

        setViaggi((prev) => [...prev, tripToAdd]);
        setTravels((prev) => [...prev, tripToAdd]);


        setNewTrip({
            destinazione: "",
            partenza: "",
            dataInizio: "",
            dataFine: "",
            imageUrl: "",
            accompagnatori: [{ nome: "", cognome: "", telefono: "", mail: "" }],
            viaggiatori: [{ nome: "", cognome: "", telefono: "", mail: "", codiceFiscale: "" }],
        });
    }

    return (
        <>
            <div className="container">
                <form className="my-4" onSubmit={handleSubmit}>
                    <div className="row my-3 align-items">
                        <div className="col-auto d-flex align-items-center">
                            <label htmlFor="travel" className="form-label mb-0">
                                Cerca viaggio
                            </label>
                        </div>

                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control col-auto"
                                name="travel"
                                id="travel"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <div className="col-auto">
                            <button className="btn btn-primary col-auto">Cerca</button>
                        </div>
                    </div>
                </form>

                <div className="row row-cols-3">
                    {travels.map((viaggio) => (
                        <div className="col" key={viaggio.id}>
                            <div className="card">
                                <img
                                    className="card-img-top p-4 home-card-img"
                                    src={viaggio.immagine || "https://placehold.co/300x200"}
                                    alt={`Viaggio a ${viaggio.destinazione}`}
                                />
                                <div className="card-body px-4 pb-4 pt-0">
                                    <div className="destination d-flex justify-content-between">
                                        <p className="card-text">Rotta:</p>
                                        <h5 className="card-title">
                                            {viaggio.partenza}-{viaggio.destinazione}
                                        </h5>
                                    </div>

                                    <div className="dates d-flex justify-content-between mb-3">
                                        <div className="start">
                                            <p className="card-text mb-0">Partenza:</p>
                                            <h5 className="card-title">{viaggio.dataInizio}</h5>
                                        </div>
                                        <div className="comeback">
                                            <p className="card-text mb-0">Ritorno:</p>
                                            <h5 className="card-title">{viaggio.dataFine}</h5>
                                        </div>
                                    </div>

                                    <Link to={`/details/${viaggio.id}`}>
                                        <button className="btn btn-primary">Vedi dettagli</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <hr className="my-5" />
                <h4 className="mb-3">Aggiungi nuovo viaggio</h4>

                <form onSubmit={handleCreateTrip} className="mb-5">
                    <div className="row g-2 mb-2">
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                placeholder="Destinazione"
                                value={newTrip.destinazione}
                                onChange={(e) => setNewTrip({ ...newTrip, destinazione: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                placeholder="Partenza"
                                value={newTrip.partenza}
                                onChange={(e) => setNewTrip({ ...newTrip, partenza: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="row g-2 mb-2">
                        <div className="col-md-6">
                            <input
                                type="date"
                                className="form-control"
                                value={newTrip.dataInizio}
                                onChange={(e) => setNewTrip({ ...newTrip, dataInizio: e.target.value })}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <input
                                type="date"
                                className="form-control"
                                value={newTrip.dataFine}
                                onChange={(e) => setNewTrip({ ...newTrip, dataFine: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <input
                            className="form-control"
                            placeholder="Immagine (URL) es: https://..."
                            value={newTrip.imageUrl}
                            onChange={(e) => setNewTrip({ ...newTrip, imageUrl: e.target.value })}
                        />
                    </div>


                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0">Accompagnatori</h6>
                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={addCompanion}>
                                + Aggiungi accompagnatore
                            </button>
                        </div>

                        {newTrip.accompagnatori.map((p, i) => (
                            <div className="row g-2 mb-2" key={i}>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        placeholder="Nome"
                                        value={p.nome}
                                        onChange={(e) => {
                                            const updated = [...newTrip.accompagnatori];
                                            updated[i] = { ...updated[i], nome: e.target.value };
                                            setNewTrip({ ...newTrip, accompagnatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        placeholder="Cognome"
                                        value={p.cognome}
                                        onChange={(e) => {
                                            const updated = [...newTrip.accompagnatori];
                                            updated[i] = { ...updated[i], cognome: e.target.value };
                                            setNewTrip({ ...newTrip, accompagnatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        placeholder="Telefono"
                                        value={p.telefono}
                                        onChange={(e) => {
                                            const updated = [...newTrip.accompagnatori];
                                            updated[i] = { ...updated[i], telefono: e.target.value };
                                            setNewTrip({ ...newTrip, accompagnatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-3 d-flex gap-2">
                                    <input
                                        className="form-control"
                                        placeholder="Email"
                                        value={p.mail}
                                        onChange={(e) => {
                                            const updated = [...newTrip.accompagnatori];
                                            updated[i] = { ...updated[i], mail: e.target.value };
                                            setNewTrip({ ...newTrip, accompagnatori: updated });
                                        }}
                                    />
                                    {newTrip.accompagnatori.length > 1 && (
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={() => removeCompanion(i)}
                                            title="Rimuovi"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h6 className="mb-0">Viaggiatori (max 15)</h6>
                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={addTraveler}>
                                + Aggiungi viaggiatore
                            </button>
                        </div>

                        {newTrip.viaggiatori.map((p, i) => (
                            <div className="row g-2 mb-2" key={i}>
                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        placeholder="Nome"
                                        value={p.nome}
                                        onChange={(e) => {
                                            const updated = [...newTrip.viaggiatori];
                                            updated[i] = { ...updated[i], nome: e.target.value };
                                            setNewTrip({ ...newTrip, viaggiatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        placeholder="Cognome"
                                        value={p.cognome}
                                        onChange={(e) => {
                                            const updated = [...newTrip.viaggiatori];
                                            updated[i] = { ...updated[i], cognome: e.target.value };
                                            setNewTrip({ ...newTrip, viaggiatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        placeholder="Telefono"
                                        value={p.telefono}
                                        onChange={(e) => {
                                            const updated = [...newTrip.viaggiatori];
                                            updated[i] = { ...updated[i], telefono: e.target.value };
                                            setNewTrip({ ...newTrip, viaggiatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        placeholder="Email"
                                        value={p.mail}
                                        onChange={(e) => {
                                            const updated = [...newTrip.viaggiatori];
                                            updated[i] = { ...updated[i], mail: e.target.value };
                                            setNewTrip({ ...newTrip, viaggiatori: updated });
                                        }}
                                    />
                                </div>
                                <div className="col-md-3 d-flex gap-2">
                                    <input
                                        className="form-control"
                                        placeholder="Codice fiscale"
                                        value={p.codiceFiscale}
                                        onChange={(e) => {
                                            const updated = [...newTrip.viaggiatori];
                                            updated[i] = { ...updated[i], codiceFiscale: e.target.value };
                                            setNewTrip({ ...newTrip, viaggiatori: updated });
                                        }}
                                    />
                                    {newTrip.viaggiatori.length > 1 && (
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={() => removeTraveler(i)}
                                            title="Rimuovi"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-success" type="submit">
                        Salva viaggio
                    </button>
                </form>
            </div>
        </>
    );
}