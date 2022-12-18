import Breadcrumb from "../components/breadcrumb"
import Footer from "../components/footer"
import Header from "../components/header"

export default function Contact() {
    return (
        <>
        <Header></Header>
        <Breadcrumb title='Contact Us' image='contact.jpg'></Breadcrumb>
        <main className="main-content-wrapper">
            <div className="inner-page-content pt--75 pt-md--55">
                <section className="contact-area mb--75 mb-md--55">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 mb-sm--30">
                                <div className="heading mb--32">
                                    <h2>Alamat Kami</h2>
                                    <hr className="delimeter"></hr>
                                </div>
                                <div className="contact-info mb--20">
                                    <p><i className="fa fa-map-marker"></i>Jl. Gatot Subroto, Makassar</p>
                                    <p><i className="fa fa-phone"></i> +62-853-9009-9009</p>
                                    <p><i className="fa fa-clock-o"></i> Senin – Jumat : 9:00 – 18:00</p>
                                </div>
                                <div className="social">
                                    <a href="https://www.facebook.com" className="social__link">
                                        <i className="la la-facebook"></i>
                                    </a>
                                    <a href="https://www.twitter.com" className="social__link">
                                        <i className="la la-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7 offset-lg-1">
                                <div className="heading mb--40">
                                    <h2>Contact Us</h2>
                                    <hr className="delimeter"></hr>
                                </div>
                                <form action="mail.php" className="form" id="contact-form">
                                    <input type="email" name="con_email" id="con_email" className="form__input mb--30" placeholder="Email*"></input>
                                    <input type="text" name="con_name" id="con_name" className="form__input mb--30" placeholder="Nama Lengkap*"></input>
                                    <textarea className="form__input form__input--textarea mb--30" placeholder="Pesan" id="con_message" name="con_message"></textarea>
                                    <button type="submit" className="btn btn-shape-round form__submit">Send Request</button>
                                    <div className="form__output"></div>
                                </form>
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


                                        <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '460px', transform: 'translate3d(0px, 0px, 0px)' }}><div className="item first-active slick-slide slick-current slick-active" tabindex="0" data-slick-index="0" aria-hidden="false">
                                            <figure>
                                                <img height="100px" src="assets/img/sulsel.png" alt="Brand" className="mx-auto"></img>
                                            </figure>
                                        </div><div className="item last-active slick-slide slick-active" style= {{ width: '230px' }} tabindex="0" data-slick-index="1" aria-hidden="false">
                                                <figure>
                                                    <img height="100px" src="assets/img/tut_wuri_handayani.png" alt="Brand" className="mx-auto"></img>
                                                </figure>
                                            </div></div></div></div>
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