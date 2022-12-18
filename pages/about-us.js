import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Header from '../components/header'

export default function AboutUs() {
    return (
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
                                        <hr className="delimeter" />
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
                                    <div className="brand-log-wrapper bg-color ptb--75" data-bg-color="#e9fefd" style={{ backgroundColor: 'rgb(233, 254, 253)' }}>
                                        <div className="element-carousel slick-carousel-0 slick-initialized slick-slider" data-slick-options="{
                                    &quot;slidesToShow&quot;: 5,
                                    &quot;autoplay&quot;: true
                                }" data-slick-responsive="[
                                    {&quot;breakpoint&quot;: 1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4}},
                                    {&quot;breakpoint&quot;: 992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3}},
                                    {&quot;breakpoint&quot;: 768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2}},
                                    {&quot;breakpoint&quot;: 480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}
                                ]">


                                            <div className="slick-list draggable">
                                                <div className="slick-track" style={{ opacity: 1, width: '460px', transform: 'translate3d(0px, 0px, 0px)' }}>
                                                    <div className="item first-active slick-slide slick-current slick-active" tabindex="0" data-slick-index="0" aria-hidden="false">
                                                        <figure>
                                                            <img height="100px" src="assets/img/sulsel.png" alt="Brand" className="mx-auto"></img>
                                                        </figure>
                                                    </div>
                                                    <div className="item last-active slick-slide slick-active" style={{ width: '230px' }} tabindex="0" data-slick-index="1" aria-hidden="false">
                                                        <figure>
                                                            <img height="100px" src="assets/img/tut_wuri_handayani.png" alt="Brand" className="mx-auto"></img>
                                                        </figure>
                                                    </div>
                                                </div>
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