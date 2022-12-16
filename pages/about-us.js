import Header from '../components/header'
export default function AboutUs() {
    return(
        <>
        <Header></Header>
        <main class="main-content-wrapper">
            <div class="inner-page-content pt--75 pt-md--55">
                <section class="contact-area mb--75 mb-md--55">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-5 mb-sm--30">
                                <div class="heading mb--32">
                                    <h2>CreDifyShop</h2>
                                    <hr class="delimeter"/>
                                </div>
                                <div class="contact-info mb--20">
                                    <p>Credifiyshop hadir untuk mendorong kemandirian penyandang disabilitas Tunarungu agar mandiri secara finansial dan terinspirasi untuk mendefinsiikan kreativitas mereka kedalam karya yang menghasilkan profit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <div class="brand-logo-area mb--80 mb-md--60">
                <div class="container">
                    <div class="row justify-content-center">
                        <h1>Partner</h1>
                        <div class="col-xl-12">
                            <div class="brand-log-wrapper bg-color ptb--75" data-bg-color="#e9fefd">
                                <div class="element-carousel" data-slick-options='{
                                    "slidesToShow": 5,
                                    "autoplay": true
                                }' data-slick-responsive='[
                                    {"breakpoint": 1200, "settings": {"slidesToShow": 4}},
                                    {"breakpoint": 992, "settings": {"slidesToShow": 3}},
                                    {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                    {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                                ]'>
                                    <div class="item">
                                        <figure>
                                            <img height="100px" src="assets/img/sulsel.png" alt="Brand" class="mx-auto"/>
                                        </figure>
                                    </div>
                                    <div class="item">
                                        <figure>
                                            <img height="100px" src="assets/img/tut_wuri_handayani.png" alt="Brand" class="mx-auto"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
        </>
    )
}