import HeaderTitle from "./header/title";
import MenuHeaderCenter from "./header/menu-header-center";
import MenuHeaderRight from "./header/menu-header-right";

const Header = () => {
    return (
        <header class="header">
            <div class="header__inner fixed-header">
                <div class="header__main">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="header__main-inner">
                                    <HeaderTitle></HeaderTitle>
                                    <MenuHeaderCenter></MenuHeaderCenter>
                                    {/* <MenuHeaderRight></MenuHeaderRight> */}
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
