import HeaderTitle from "./header/title";
import MenuHeaderCenter from "./header/menu-header-center";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner fixed-header">
                <div className="header__main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="header__main-inner">
                                    <HeaderTitle></HeaderTitle>
                                    <MenuHeaderCenter></MenuHeaderCenter>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
