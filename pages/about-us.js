import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'

export default function AboutUs() {
    return(
        <>
        <Header></Header>
        <Breadcrumb title='About Us' image='about-us.jpg'></Breadcrumb>
        <main className="main-content-wrapper">
            <div className="inner-page-content pt--75 pt-md--55">
                <section className="contact-area mb--75 mb-md--55">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-5 mb-sm--30">
                                <div className="heading mb--32">
                                    <h2>CreDifyShop</h2>
                                    <hr className="delimeter"/>
                                </div>
                                <div className="contact-info mb--20">
                                    <p>Credifiyshop hadir untuk mendorong kemandirian penyandang disabilitas Tunarungu agar mandiri secara finansial dan terinspirasi untuk mendefinsiikan kreativitas mereka kedalam karya yang menghasilkan profit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <div className="brand-logo-area mb--80 mb-md--60">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1>Partner</h1>
                        <div className="col-xl-12">
                            <div className="brand-log-wrapper bg-color ptb--75" data-bg-color="#e9fefd">
                                <div className="element-carousel" data-slick-options='{
                                    "slidesToShow": 5,
                                    "autoplay": true
                                }' data-slick-responsive='[
                                    {"breakpoint": 1200, "settings": {"slidesToShow": 4}},
                                    {"breakpoint": 992, "settings": {"slidesToShow": 3}},
                                    {"breakpoint": 768, "settings": {"slidesToShow": 2}},
                                    {"breakpoint": 480, "settings": {"slidesToShow": 1}}
                                ]'>
                                    <div className="item">
                                        <figure>
                                            <img height="100px" src="assets/img/sulsel.png" alt="Brand" className="mx-auto"/>
                                        </figure>
                                    </div>
                                    <div className="item">
                                        <figure>
                                            <img height="100px" src="assets/img/tut_wuri_handayani.png" alt="Brand" className="mx-auto"/>
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
        <Footer></Footer>
        </>
    )
}