import { Link } from 'react-router-dom';
import viaggi from '../data/data';
import { useEffect, useState } from 'react';


export default function HomePage() {
    //set new array with viaggi array
    const [travels, setTravels] = useState(viaggi)
    // search variable connect to search input
    const [search, setSearch] = useState('')

    // function on fomr submit
    function handleSubmit(e) {
        //prevent default behavior
        e.preventDefault()

        //filter array to show only the travels that contain specific conditions
        const filtered = travels.filter((travel) =>
            travel.destinazione.toLowerCase().includes(search.toLowerCase()) ||
            travel.partenza.toLowerCase().includes(search.toLowerCase())
        )
        setTravels(filtered)

    }

    //reset default array when the search input is nearly empty
    useEffect(() => {
        if (search.length < 1) {
            setTravels(viaggi)
        }
    }, [search])
    return (
        <>
            <main>

                <div className="container">

                    <form className='my-4' onSubmit={handleSubmit}>

                        <div className="row my-3 align-items">

                            <div className="col-auto d-flex align-items-center">
                                <label html="travel" className="form-label mb-0">Cerca viaggio</label>
                            </div>
                            {/* label to describe to next input */}
                            <div className="col-auto">
                                <input
                                    type="text"
                                    className="form-control col-auto"
                                    name="travel"
                                    id="travel"
                                    aria-describedby="travelhelper"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            {/* /input type text */}
                            <div className="col-auto">
                                <button className="btn btn-primary col-auto">Cerca</button>
                            </div>
                            {/* /button to search the travel */}

                        </div>

                    </form>
                    {/* /form */}

                    <div className="row row-cols-3">
                        {
                            travels.map(viaggio => (
                                <div className="col" key={viaggio.id}>
                                    <div className="card">
                                        <img className="card-img-top p-4" src="https://placehold.co/100" alt="Title" />
                                        <div className="card-body px-4 pb-4 pt-0">
                                            <div className="destination d-flex justify-content-between">
                                                <p className="card-text">Rotta:</p>
                                                <h5 className="card-title">{viaggio.partenza}-{viaggio.destinazione}</h5>
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
                            ))
                        }
                    </div>
                    {/* /row */}



                </div>

            </main >
        </>
    )
}