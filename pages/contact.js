import Header from "../components/header"

export default function Contact() {
    return (
        <>
        <Header></Header>
        <main class="main-content-wrapper">
            <div class="inner-page-content pt--75 pt-md--55">
                <section class="contact-area mb--75 mb-md--55">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-5 mb-sm--30">
                                <div class="heading mb--32">
                                    <h2>Alamat Kami</h2>
                                    <hr class="delimeter"></hr>
                                </div>
                                <div class="contact-info mb--20">
                                    <p><i class="fa fa-map-marker"></i>Jl. Gatot Subroto, Jakarta</p>
                                    <p><i class="fa fa-phone"></i> +62-853-9009-9009</p>
                                    <p><i class="fa fa-clock-o"></i> Senin – Jumat : 9:00 – 18:00</p>
                                </div>
                                <div class="social">
                                    <a href="https://www.facebook.com" class="social__link">
                                        <i class="la la-facebook"></i>
                                    </a>
                                    <a href="https://www.twitter.com" class="social__link">
                                        <i class="la la-instagram"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-7 offset-lg-1">
                                <div class="heading mb--40">
                                    <h2>Contact Us</h2>
                                    <hr class="delimeter"></hr>
                                </div>
                                <form action="mail.php" class="form" id="contact-form">
                                    <input type="email" name="con_email" id="con_email" class="form__input mb--30" placeholder="Email*"></input>
                                    <input type="text" name="con_name" id="con_name" class="form__input mb--30" placeholder="Nama Lengkap*"></input>
                                    <textarea class="form__input form__input--textarea mb--30" placeholder="Pesan" id="con_message" name="con_message"></textarea>
                                    <button type="submit" class="btn btn-shape-round form__submit">Send Request</button>
                                    <div class="form__output"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="brand-logo-area mb--80 mb-md--60">
                    <div class="container">
                        <div class="row justify-content-center">
                            <h1>Partner</h1>
                            <div class="col-xl-12">
                                <div class="brand-log-wrapper bg-color ptb--75" data-bg-color="#e9fefd" style={{ backgroundColor: 'rgb(233, 254, 253)' }}>
                                    <div class="element-carousel slick-carousel-0 slick-initialized slick-slider" data-slick-options="{
                                    &quot;slidesToShow&quot;: 5,
                                    &quot;autoplay&quot;: true
                                }" data-slick-responsive="[
                                    {&quot;breakpoint&quot;: 1200, &quot;settings&quot;: {&quot;slidesToShow&quot;: 4}},
                                    {&quot;breakpoint&quot;: 992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3}},
                                    {&quot;breakpoint&quot;: 768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2}},
                                    {&quot;breakpoint&quot;: 480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}
                                ]">


                                        <div class="slick-list draggable"><div class="slick-track" style={{ opacity: 1, width: '460px', transform: 'translate3d(0px, 0px, 0px)' }}><div class="item first-active slick-slide slick-current slick-active" tabindex="0" data-slick-index="0" aria-hidden="false">
                                            <figure>
                                                <img height="100px" src="assets/img/sulsel.png" alt="Brand" class="mx-auto"></img>
                                            </figure>
                                        </div><div class="item last-active slick-slide slick-active" style= {{ width: '230px' }} tabindex="0" data-slick-index="1" aria-hidden="false">
                                                <figure>
                                                    <img height="100px" src="assets/img/tut_wuri_handayani.png" alt="Brand" class="mx-auto"></img>
                                                </figure>
                                            </div></div></div></div>
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