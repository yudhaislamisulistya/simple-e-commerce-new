const MenuHeaderRight = () => {
    return(
    <>
        <div class="header__main-right">
            <div class="header-toolbar-wrap">
                <div class="header-toolbar">
                    <div class="header-toolbar__item header-toolbar--search-btn">
                        <a href="#searchForm" class="header-toolbar__btn toolbar-btn">
                            <i class="la la-search"></i>
                        </a>
                    </div>
                    <div class="header-toolbar__item header-toolbar--minicart-btn">
                        <a href="#miniCart" class="header-toolbar__btn toolbar-btn">
                            <i class="la la-shopping-cart"></i>
                            <span class="bg-danger text-white"></span>
                        </a>
                    </div>
                    <div class="header-toolbar__item d-block d-lg-none">
                        <a href="#offcanvasMenu"
                            class="header-toolbar__btn toolbar-btn menu-btn">
                            <div class="hamburger-icon">
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