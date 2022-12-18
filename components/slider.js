import SliderItem from "./slider/item";

const Slider = () => {
    return(
        <>
        <section class="homepage-slider mb--75 mb-md--55">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="element-carousel slick-right-bottom" data-slick-options='{
                                "slidesToShow": 1, 
                                "arrows": true,
                                "prevArrow": {"buttonClass": "slick-btn slick-prev", "iconClass": "la la-arrow-left" },
                                "nextArrow": {"buttonClass": "slick-btn slick-next", "iconClass": "la la-arrow-right" }
                            }' data-slick-responsive='[{"breakpoint": 768, "settings": {"arrows": false}}]'>
                                <SliderItem title="SUPPORT PERSON WITH DISABILITIES TOWARDS FINANCIAL INDEPEDENCES" subtitle="Credifiyshop hadir untuk mendorong kemandirian penyandang disabilitas Tunarungu agar mandiri secara finansial dan terinspirasi untuk mendefinsiikan kreativitas mereka kedalam karya yang menghasilkan profit"></SliderItem>
                                <SliderItem title="SUPPORT PERSON WITH DISABILITIES TOWARDS FINANCIAL INDEPEDENCES" subtitle="Credifiyshop hadir untuk mendorong kemandirian penyandang disabilitas Tunarungu agar mandiri secara finansial dan terinspirasi untuk mendefinsiikan kreativitas mereka kedalam karya yang menghasilkan profit"></SliderItem>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    );
}

export default Slider;