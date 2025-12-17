import { useParams } from "react-router-dom"
export default function TravelPage({ viaggi }) {
    const { id } = useParams()

    const viaggio = viaggi[id - 1]

    return (
        <>
            <div className="container w-50 my-3">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <img src="https://placehold.co/300x200" className="rounded-start detail-img" alt="Title" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body d-flex flex-column justify-content-center h-100 gap-4">
                                <h3>{viaggio.destinazione}</h3>
                                <div className="destination d-flex">
                                    <p className="card-text me-3 mb-0">Rotta:</p>
                                    <h5 className="card-title m-0">{viaggio.partenza}-{viaggio.destinazione}</h5>
                                </div>
                                <div className="start">
                                    <p className="card-text mb-0">Partenza:</p>
                                    <h5 className="card-title">{viaggio.dataInizio}</h5>
                                </div>
                                <div className="comeback">
                                    <p className="card-text mb-0">Ritorno:</p>
                                    <h5 className="card-title">{viaggio.dataFine}</h5>
                                </div>
                                <div className="companion">
                                    <p className="card-text mb-0">Accompagnatori:</p>
                                    {
                                        viaggio.accompagnatori.map(person => (
                                            <h5 className="card-title m-0" key={person.id}>{person.nome} {person.cognome}</h5>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}