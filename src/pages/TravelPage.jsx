import { useState } from "react";
import { useParams } from "react-router-dom";

export default function TravelPage({ viaggi }) {
    const { id } = useParams();

    const travelId = Number(id);
    const selectedTrip = viaggi.find((trip) => trip.id === travelId);

    const [searchText, setSearchText] = useState("");

    if (!selectedTrip) {
        return (
            <div className="container my-4">
                <p>Viaggio non trovato.</p>
            </div>
        );
    }

    const filteredTravelers = selectedTrip.viaggiatori.filter((traveler) =>
        `${traveler.nome} ${traveler.cognome}`
            .toLowerCase()
            .includes(searchText.toLowerCase())

        /*const filtered = travels.filter((travel) =>
        travel.destinazione.toLowerCase().includes(search.toLowerCase()) ||
        travel.partenza.toLowerCase().includes(search.toLowerCase())
    )
    setTravels(filtered)
    traveler.nome.toLowerCase().includes(searchText.toLowerCase()) || traveler.cognome.toLowerCase().includes(searchText.toLowerCase())
    */
    );

    return (
        <div className="container w-50 my-3">
            {/* TRIP CARD */}
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-8">
                        <img
                            src="https://placehold.co/300x200"
                            className="rounded-start detail-img"
                            alt="Trip cover"
                        />
                    </div>

                    <div className="col-md-4">
                        <div className="card-body d-flex flex-column justify-content-center h-100 gap-4">
                            <h3>{selectedTrip.destinazione}</h3>

                            <div className="d-flex">
                                <p className="card-text me-3 mb-0">Rotta:</p>
                                <h5 className="card-title m-0">
                                    {selectedTrip.partenza}-{selectedTrip.destinazione}
                                </h5>
                            </div>

                            <div>
                                <p className="card-text mb-0">Partenza:</p>
                                <h5 className="card-title">{selectedTrip.dataInizio}</h5>
                            </div>

                            <div>
                                <p className="card-text mb-0">Ritorno:</p>
                                <h5 className="card-title">{selectedTrip.dataFine}</h5>
                            </div>

                            <div>
                                <p className="card-text mb-0">Accompagnatori:</p>
                                {selectedTrip.accompagnatori.map((companion) => (
                                    <h5 className="card-title m-0" key={companion.id}>
                                        {companion.nome} {companion.cognome}
                                    </h5>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEARCH BAR */}
            <form className="mb-3" onSubmit={(event) => event.preventDefault()}>
                <div className="input-group">
                    <input
                        className="form-control"
                        placeholder="Cerca viaggiatori (nome/cognome)"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                        Cerca
                    </button>
                </div>
            </form>

            {/* TRAVELERS ACCORDION */}
            <div className="accordion" id="travelersAccordion">
                {filteredTravelers.map((traveler, index) => {
                    const accordionItemKey = `${traveler.id}-${index}`;
                    const collapseId = `collapse-${accordionItemKey}`;

                    return (
                        <div className="accordion-item" key={accordionItemKey}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded="false"
                                    aria-controls={collapseId}
                                >
                                    {traveler.nome} {traveler.cognome}
                                </button>
                            </h2>

                            <div id={collapseId} className="accordion-collapse collapse">
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
                                        <a
                                            className="btn btn-success"
                                            href={`tel:${traveler.telefono}`}
                                        >
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
                    );
                })}
            </div>

            {filteredTravelers.length === 0 && (
                <p className="mt-3">Nessun viaggiatore trovato.</p>
            )}
        </div>
    );
}