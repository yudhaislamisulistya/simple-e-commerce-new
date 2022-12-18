const MenuHeaderRight = () => {
    return (
        <>
            <div className="header__main-right">
                <div className="header-toolbar-wrap">
                    <div className="header-toolbar">
                        <div className="header-toolbar__item header-toolbar--search-btn">
                            <a href="#searchForm" className="header-toolbar__btn toolbar-btn">
                                <i className="la la-search"></i>
                            </a>
                        </div>
                        <div className="header-toolbar__item header-toolbar--minicart-btn">
                            <a href="#miniCart" className="header-toolbar__btn toolbar-btn">
                                <i className="la la-shopping-cart"></i>
                                <span className="bg-danger text-white" style={{fontSize: "20px"}}>0</span>
                            </a>
                        </div>
                        <div className="header-toolbar__item d-block d-lg-none">
                            <a href="#offcanvasMenu"
                                className="header-toolbar__btn toolbar-btn menu-btn">
                                <div className="hamburger-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuHeaderRight;