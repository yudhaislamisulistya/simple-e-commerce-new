import Link from "next/link";

const MenuHeaderCenter = () => {
    return(
        <>
            <div class="header__main-center">
                <nav class="main-navigation text-center d-none d-lg-block">
                    <ul class="mainmenu">
                        <li class="mainmenu__item">
                            <a href="#" class="mainmenu__link">
                                <span class="mm-text">Home</span>
                            </a>
                        </li>

                        <li class="mainmenu__item">
                            <a class="mainmenu__link">
                                <span class="mm-text">Produk</span>
                            </a>
                        </li>
                        <li class="mainmenu__item">
                                <a class="mainmenu__link">
                            <Link href={'/contact'}>

                                    <span class="mm-text">Contact</span>
                            </Link>
                                </a>
                        </li>
                        <li class="mainmenu__item">
                            <a class="mainmenu__link">
                            <Link href={'/about-us'}>
                                <span class="mm-text">About Us</span>
                            </Link>

                            </a>
                        </li>
                        <li class="mainmenu__item">
                            <a class="mainmenu__link">
                            <Link href={'/profile'}>
                                <span class="mm-text">Profile</span>
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