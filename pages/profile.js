import Header from '../components/header'
export default function Profile() {
    return(
        <>
        <Header></Header>
        <div class="main-content-wrapper">
            <div class="page-content-inner ptb--80 ptb-md--60 pb-sm--55">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                                                    <div class="user-dashboard-tab flex-column flex-md-row">
                                <div class="user-dashboard-tab__head nav flex-md-column" role="tablist" aria-orientation="vertical">
                                    <button type="button" class="nav-link active" data-bs-toggle="tab" role="tab" data-bs-target="#dashboard" aria-controls="dashboard" aria-selected="true">Dashboard</button>
                                    <button type="button" class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#orders" aria-controls="orders" aria-selected="true">Orders</button>
                                    <button type="button" class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#addresses" aria-controls="addresses" aria-selected="true">Addresses</button>
                                    <button type="button" class="nav-link" data-bs-toggle="tab" role="tab" data-bs-target="#accountdetails" aria-controls="accountdetails" aria-selected="true">Account Details</button>
                                    <a type="button" class="nav-link" href="/logout">Logout</a>
                                </div>
                                
                                <div class="user-dashboard-tab__content tab-content">
                                    <div class="tab-pane fade show active" id="dashboard">
                                        <p>Selamat Datang <strong>Admin Chrissandy Sapulete</strong>? (<a href="/logout">Log out</a>)</p>
                                        <p>Dari dasbor akun Anda. Anda dapat dengan mudah memeriksa & melihat pesanan terbaru Anda, mengelola alamat pengiriman dan penagihan, serta mengedit kata sandi dan detail akun Anda.</p>
                                    </div>
                                    <div class="tab-pane fade" id="orders">
                                        <div class="message-box mb--30 d-none">
                                            <p><i class="fa fa-check-circle"></i>No order has been made yet.</p>
                                            <a href="shop.html">Go Shop</a>
                                        </div>
                                        <div class="table-content table-responsive">
                                            <table class="table text-center">
                                                <thead>
                                                    <tr>
                                                        <th>Order</th>
                                                        <th>Tanggal</th>
                                                        <th>Status</th>
                                                        <th>Total</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                                                                    </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="addresses">
                                        <p class="mb--20">Alamat berikut akan digunakan pada halaman checkout secara default.</p>
                                        <form action="/change-address" method="post" class="form form--account">
                                        <input type="hidden" name="csrf_test_name" value="fa40c529e66dad0948f9cbbb7ca387f9" />                                            <input type="hidden" name="id_user" value="24"/>
                                            <fieldset class="form__fieldset mb--20">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form__group">
                                                            <label class="form__label" for="alamat_pengiriman">Alamat Pengiriman<span class="required">*</span></label>
                                                            <textarea name="alamat_pengiriman" id="alamat_pengiriman" class="form__input"  placeholder="Masukkan Alma Lengkap Anda"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
                                                        <div class="form__group">
                                                            <input type="submit" value="Ubah Alamat" class="btn btn-size-md"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="accountdetails">

                                        <form action="/change-profile" method="post" class="form form--account">
                                        <input type="hidden" name="csrf_test_name" value="fa40c529e66dad0948f9cbbb7ca387f9" />                                            <input type="hidden" name="id_user" value="24"/>
                                            <fieldset class="form__fieldset mb--20">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form__group">
                                                            <label class="form__label" for="nama_lengkap">Nama Lengkap<span class="required">*</span></label>
                                                            <input type="text" name="nama_lengkap" id="nama_lengkap" class="form__input" value="Admin Chrissandy Sapulete"/>
                                                            <span class="form__notes"><em>Ini akan menjadi bagaimana nama Anda akan ditampilkan di bagian akun dan di ulasan</em></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb--20">
                                                    <div class="col-12">
                                                        <div class="form__group">
                                                            <label class="form__label" for="email">Email Address <span class="required">*</span></label>
                                                            <input type="email" name="email" id="email" class="form__input" disabled value="admin@sandy.sivia.id"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row mb--20">
                                                    <div class="col-12">
                                                        <div class="form__group">
                                                            <label class="form__label" for="email">Nomor Handphone <span class="required">*</span></label>
                                                            <input type="nomor_handphone" name="nomor_handphone" id="nomor_handphone" class="form__input" placeholder="+62" value="628909877659"/>
                                                            <span class="form__notes"><em>Wajib menambahkan +62XXXXXXXXXXX</em></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
                                                        <div class="form__group">
                                                            <input type="submit" value="Ubah Profil" class="btn btn-size-md"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                        <form action="/change-password" method="post" class="form form--account">
                                            <input type="hidden" name="csrf_test_name" value="fa40c529e66dad0948f9cbbb7ca387f9" />                                            <input type="hidden" name="id_user" value="24"/>
                                            <fieldset class="form__fieldset mb--20">
                                                <legend class="form__legend">Password change</legend>
                                                <div class="row mb--20">
                                                    <div class="col-12">
                                                        <div class="form__group">
                                                            <label class="form__label" for="password_baru">Password Baru</label>
                                                            <input type="password" name="password_baru" id="password_baru" class="form__input"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form__group">
                                                            <label class="form__label" for="konfirmasi_password_baru">Konfirmasi Password Baru</label>
                                                            <input type="password" name="konfirmasi_password_baru" id="konfirmasi_password_baru" class="form__input"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12 mt-2">
                                                        <div class="form__group">
                                                            <input type="submit" value="Ubah Password" class="btn btn-size-md"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}