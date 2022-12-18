import Link from "next/link";

const MenuHeaderCenter = () => {
    return(
        <>
            <div className="header__main-center">
                <nav className="main-navigation text-center d-none d-lg-block">
                    <ul className="mainmenu">
                        <li className="mainmenu__item">
                            <a href="#" className="mainmenu__link">
                                <Link href={'/'}>
                                <span className="mm-text">Home</span>
                                </Link>
                            </a>
                        </li>

                        <li className="mainmenu__item">
                                <a className="mainmenu__link">
                            <Link href={'/produk'}>
                                <span className="mm-text">Produk</span>
                            </Link>
                                </a>
                        </li>
                        <li className="mainmenu__item">
                                <a className="mainmenu__link">
                            <Link href={'/contact'}>
                                    <span className="mm-text">Contact</span>
                            </Link>
                                </a>
                        </li>
                        <li className="mainmenu__item">
                            <a className="mainmenu__link">
                            <Link href={'/about-us'}>
                                <span className="mm-text">About Us</span>
                            </Link>

                            </a>
                        </li>
                        <li className="mainmenu__item">
                            <a className="mainmenu__link">
                            <Link href={'/profile'}>
                                <span className="mm-text">Profile</span>
                            </Link>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MenuHeaderCenter;