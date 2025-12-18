import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function TravelPage({ viaggi }) {
    const { id } = useParams();
    const viaggio = viaggi.find((v) => v.id === Number(id));

    const [searchText, setSearchText] = useState("");
    const [searchName, setSearchName] = useState("");
    const [searchLast, setSearchLast] = useState("");

    if (!viaggio) {
        return <div className="container w-50 my-3">Viaggio non trovato</div>;
    }

    const filteredTravelers = viaggio.viaggiatori.filter((traveler) => {
        const nome = traveler.nome.toLowerCase();
        const cognome = traveler.cognome.toLowerCase();

        if (!searchText.trim()) return true;

        if (!searchLast) {
            return (
                nome.includes(searchName.toLowerCase()) ||
                cognome.includes(searchName.toLowerCase())
            );
        }

        return (
            nome.includes(searchName.toLowerCase()) &&
            cognome.includes(searchLast.toLowerCase())
        );
    });


    function formatDate(dateStr) {
        if (!dateStr) return "";
        const [year, month, day] = dateStr.split("-");
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="container w-50 my-3">
            {/* TRIP CARD */}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <img
                            src={viaggio.immagine || "https://placehold.co/300x200"}
                            className="rounded-start detail-img"
                            alt={`Viaggio a ${viaggio.destinazione}`}
                        />
                    </div>

                    <div className="col-md-4">
                        <div className="card-body d-flex flex-column justify-content-center h-100 gap-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="mb-0">{viaggio.destinazione}</h3>
                                <Link to={'/'} className="btn btn-primary btn-sm"><i className="bi bi-arrow-return-right rotate"></i></Link>
                            </div>

                            <div className="d-flex">
                                <p className="card-text me-3 mb-0">Rotta:</p>
                                <h5 className="card-title m-0">
                                    {viaggio.partenza}-{viaggio.destinazione}
                                </h5>
                            </div>

                            <div>
                                <p className="card-text mb-0">Partenza:</p>
                                <h5 className="card-title">{formatDate(viaggio.dataInizio)}</h5>
                            </div>

                            <div>
                                <p className="card-text mb-0">Ritorno:</p>
                                <h5 className="card-title">{formatDate(viaggio.dataFine)}</h5>
                            </div>

                            <div>
                                <p className="card-text mb-0">Accompagnatori:</p>
                                {viaggio.accompagnatori.map((person) => (
                                    <h5 className="card-title m-0" key={person.id}>
                                        {person.nome} {person.cognome}
                                    </h5>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEARCH BAR – IDENTICA A PRIMA */}
            <form className="mb-3" onSubmit={(e) => e.preventDefault()}>
                <div className="input-group">
                    <input
                        className="form-control"
                        placeholder="Cerca viaggiatori (nome/cognome)"
                        value={searchText}
                        onChange={(e) => {
                            const value = e.target.value;
                            setSearchText(value);
                            setSearchName(value.split(" ")[0]);
                            setSearchLast(value.split(" ")[1]);
                        }}
                    />
                    <button className="btn btn-primary" type="submit">
                        Cerca
                    </button>
                </div>
            </form>

            {/* TRAVELERS ACCORDION */}
            <div className="accordion" id="travelersAccordion">
                {filteredTravelers.map((traveler) => (
                    <div className="accordion-item" key={traveler.id}>
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${traveler.id}`}
                                aria-expanded="false"
                                aria-controls={`collapse${traveler.id}`}
                            >
                                {traveler.nome} {traveler.cognome}
                            </button>
                        </h2>

                        <div
                            id={`collapse${traveler.id}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#travelersAccordion"
                        >
                            <div className="accordion-body">
                                <div>
                                    <strong>Telefono:</strong> {traveler.telefono || "-"}
                                </div>
                                <div>
                                    <strong>Email:</strong> {traveler.mail || "-"}
                                </div>
                                <div className="mb-2">
                                    <strong>Codice fiscale:</strong>{" "}
                                    {traveler.codiceFiscale || "-"}
                                </div>

                                {traveler.telefono ? (
                                    <a className="btn btn-success" href={`tel:${traveler.telefono}`}>
                                        Chiama
                                    </a>
                                ) : (
                                    <button className="btn btn-secondary" disabled>
                                        Chiama
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredTravelers.length === 0 && (
                <p className="mt-3">Nessun viaggiatore trovato.</p>
            )}
        </div>
    );
}