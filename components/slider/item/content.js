const SliderItemContent = (props) => {
    return (
        <>
            <div class="slider-content__text mb--40 mb-md--30">
                <p class="mb--15" data-animation="fadeInUp" data-duration=".3s"
                    data-delay=".3s">{props.title}</p>
                <h1 class="heading__primary lh-pt10" data-animation="fadeInUp"
                    data-duration=".3s" data-delay=".3s">{props.subtitle}</h1>
            </div>
        </>
    );
}

export default SliderItemContent;