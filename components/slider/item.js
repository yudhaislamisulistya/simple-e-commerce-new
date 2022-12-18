import SliderItemButton from "./item/button";
import SliderItemContent from "./item/content";
import SliderItemImages from "./item/images";

const SliderItem = (props) => {
    return (
        <>
            <div class="item">
                <div class="single-slide d-flex align-items-center bg-color"
                    data-bg-color="#dbf3f2">
                    <div class="row align-items-center g-0 w-100">
                        <div class="col-xl-7 col-md-6 mb-sm--50">
                            <SliderItemImages></SliderItemImages>
                        </div>
                        <div class="col-md-6 col-lg-5 offset-lg-1 offset-xl-0">
                            <div class="slider-content">
                                <SliderItemContent title={props.title} subtitle={props.subtitle}></SliderItemContent>
                                <SliderItemButton></SliderItemButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SliderItem;