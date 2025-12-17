import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="mb-4">

                <div className="d-flex px-4 py-3 shadow-sm">

                    <div className="logo d-flex align-items-center me-4">
                        <i className="bi bi-airplane-fill fs-3 me-2"></i>
                        <h3 className='mb-0'>BoolTravel</h3>
                    </div>
                    {/* /logo */}

                    <nav className="navbar navbar-light">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>Viaggi</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* /navbar */}

                </div>

            </header>
        </>
    )
}