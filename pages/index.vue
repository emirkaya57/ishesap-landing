<template>
  <div>
    <loading></loading>
    <!-- PAGE CONTENT
		============================================= -->
    <div id="page" class="page">
      <!-- HEADER
			============================================= -->
      <header id="header" class="header tra-menu navbar-light">
        <div class="header-wrapper">
          <!-- MOBILE HEADER -->
          <div class="wsmobileheader clearfix">
            <span class="smllogo"
              ><img src="images/is_black3.png" alt="mobile-logo"
            /></span>
            <a id="wsnavtoggle" class="wsanimated-arrow"><span></span></a>
          </div>

          <!-- NAVIGATION MENU -->
          <div class="wsmainfull menu clearfix">
            <div class="wsmainwp clearfix">
              <!-- HEADER LOGO -->
              <div class="desktoplogo row">
                <!-- <a href="/" class="logo-black mr-5"><img src="images/is2.png" alt="header-logo"></a> -->
                <a href="/" class="logo-black"
                  ><img src="images/is_black3.png" alt="header-logo"
                /></a>
              </div>
              <div class="desktoplogo row">
                <!-- 	<a href="/" class="logo-white mr-5"><img src="images/is1.png" alt="header-logo"></a> -->
                <a href="/" class="logo-white"
                  ><img src="images/is_white3.png" alt="header-logo"
                /></a>
              </div>
              <!-- MAIN MENU -->
              <nav class="wsmenu clearfix">
                <ul class="wsmenu-list nav-skyblue-hover">
                  <!-- SIMPLE NAVIGATION LINK -->
                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/kobi/index.html" target="_blank">KOBİ</a>
                  </li>
                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/onmuhasebe/index.html" target="_blank"
                      >Ön Muhasebe</a
                    >
                  </li>
                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/muhasebe/index.html" target="_blank"
                      >Resmi Muhasebe</a
                    >
                  </li>
                  <li aria-haspopup="true">
                    <a>Diğer <span class="wsarrow"></span></a>
                    <ul class="sub-menu">
                      <li aria-haspopup="true">
                        <a href="/comingsoon.html" target="_blank">Doküman</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="./blog.html" target="_blank">Blog</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="./sss.html" target="_blank">SSS</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="./paketler.html" target="_blank">Paketler</a>
                      </li>
                      <li aria-haspopup="true">
                        <a href="./iletisim.html" target="_blank">İletişim</a>
                      </li>
                    </ul>
                  </li>

                  <li class="nl-simple" aria-haspopup="true">
                    <a href="/" target="_blank">Giriş Yap</a>
                  </li>

                  <li class="nl-simple" aria-haspopup="true">
                    <a
                      href="/"
                      target="_blank"
                      class="btn btn-skyblue last-link"
                      >Ücretsiz Dene</a
                    >
                  </li>
                </ul>
              </nav>
              <!-- END MAIN MENU -->
            </div>
          </div>
          <!-- END NAVIGATION MENU -->
        </div>
        <!-- End header-wrapper -->
      </header>
      <!-- END HEADER -->

      <div
        id="myCarousel"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div
              class="mask flex-center"
              style="background: rgba(0, 0, 0, 0.4)"
            >
              <div class="containers">
                <div class="row">
                  <div class="col-md-7 col-12 order-md-1 order-2">
                    <h4 style="color: #fff">
                      KOBİ’ler İçin Eşsiz Mali Çözümler
                    </h4>
                    <p style="color: #fff">
                      Verileriniz, bilgileriniz KOBİ yazılımı ile istediğiniz
                      anda, istediğiniz bilgiye erişim sağlamanızı
                      kolaylaştıracak şekilde dizayn edilmiştir.
                    </p>
                    <a href="/kobi/index.html" target="_blank">İNCELE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="mask flex-center"
              style="background: rgba(0, 0, 0, 0.4)"
            >
              <div class="containers">
                <div class="row">
                  <div class="col-md-7 col-12 order-md-1 order-2">
                    <h4 style="color: #fff">
                      Ön Muhasebe İhtiyaçlarınız Tek Bir Yazılımda
                    </h4>
                    <p style="color: #fff">
                      İnternetin olduğu her cihazdan erişebileceğiniz yeni nesil
                      ön muhasebe yazılımı tedarik etmek için bize
                      ulaşabilirsiniz.
                    </p>
                    <a href="/onmuhasebe/index.html" target="_blank">İNCELE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              class="mask flex-center"
              style="background: rgba(0, 0, 0, 0.4)"
            >
              <div class="containers">
                <div class="row">
                  <div class="col-md-7 col-12 order-md-1 order-2">
                    <h4 style="color: #fff">
                      Gelişmiş Resmi Muhasebe Yazılımı
                    </h4>
                    <p style="color: #fff">
                      Muhasebe fişleri, beyannameler, mali tablolar ve
                      defterlerinizi kolaylıkla web tabanlı, mobil destekli
                      İŞHESAP yazılımı ile oluşturabilirsiniz.
                    </p>
                    <a href="/muhasebe/index.html" target="_blank">İNCELE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Öncesi</span>
        </a>
        <a
          class="carousel-control-next"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Sonrası</span>
        </a>
      </div>

      <!--	<div>
			<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
				 <ol class="carousel-indicators">
				  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
				  <div class="carousel-item active">
					<div class="item d-flex px-5 justify-content-center  align-items-center " style="width: 100% ;height: 100vh;background:#8f656e;">
						<div class="row">
							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
								<h1>İŞ HESAP ÇOK GÜZELDİR</h1>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</br>
									 Vitae maiores est, eum molestias assumenda ad conseq</p>
									 Lorem ipsum dolor, sit amet consectetur adipisicing elit.</br>
									 Vitae maiores est, eum molestias assumenda ad conseq</p>
									 Lorem ipsum dolor, sit amet consectetur adipisicing elit.</br>
									 Vitae maiores est, eum molestias assumenda ad conseq</p>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
								<img src="https://html.crumina.net/html-seosight/img/slider5.png" style="height: 50vh;" alt="">
							</div>
						</div>
					</div>
				  </div>
				  <div class="carousel-item ">
					<div class="item d-flex px-5 justify-content-center  align-items-center " style="width: 100% ;height: 100vh;background: #c4b1b2;">
						
						<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<img src="/images/0.png" style="height: 50vh;" alt="">
						</div>
						<div class=" col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
							<h1>İŞ HESAP ÇOK GÜZELDİR</h1>
							<p >İş hesap loremdir</p>
							<p >İş hesap loremdir</p>
							<p >İş hesap loremdir</p>
							<p >İş hesap loremdir</p>
						</div>
						</div>
					</div>
				  </div>
				  <div class="carousel-item ">
					<div class="item d-flex px-5 justify-content-center  align-items-center " style="width: 100% ;height: 100vh;background: #8e70b5;">
						<div class="row">
							
						<div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<img src="https://html.crumina.net/html-seosight/img/slider2.png" style="height: 50vh;" alt="">
						</div>
						<div class="
						
						col-xl-6 col-lg-12 col-md-12 col-sm-12">
							<h1>İŞ HESAP ÇOK GÜZELDİR</h1>
							<p >İş hesap loremdir</p>
							<p >İş hesap loremdir</p>
							<p >İş hesap loremdir</p>
							<p >İş hesap loremdir</p>
						</div>
						</div>
					</div>
				  </div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				  <span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				  <span class="carousel-control-next-icon" aria-hidden="true"></span>
				  <span class="sr-only">Next</span>
				</a>
			  </div>

		</div>  -->
      <!--   <section id="hero-2" class="hero-section division">
		
			<div class="container white-color " style="height: 100vh;">
				
				<div class="row">
					<div class="col-xl-12 offset-xl-1 justify-content-center">
						<div class="row d-flex align-items-center m-row">


						
							<div class="col-md-5 col-lg-6 m-bottom">
								<div class="hero-2-img pc-25 mb-40">

									<a class="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">
										<div class="video-btn video-btn-lg bg_rose ico-75">
											<div class="video-block-wrapper"><span
													class="flaticon-play-button-1"></span></div>
										</div>
									</a>

									
									<img class="img-fluid" src="/images/Mobile testing-pana.png" height="" alt="İş Hesap">

								</div>
							</div>


							
							<div class="col-md-7 col-lg-6 m-top">
								<div class="hero-2-txt mb-40 white-color">

								
									<h2 class="h2">Firmanızdaki tüm mali iş yükünüz, tek bir uygulama ile elinizin
										altında… </h2>

									
									<p class="p-lg">Muhasebe yönetimi daha önce hiç bu kadar kolay olmamıştı.
									</p>





								</div>
							</div> 


						</div>
					</div>




				</div> 
			</div> 
		</section> 
 -->

      <!-- FEATURES-5
			============================================= -->
      <section id="features-5" class="wide-50 features-section division">
        <div class="container">
          <!-- SECTION TITLE -->
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-title text-center mb-70">
                <!-- Title -->
                <h2 class="h2-md">Özelliklerimiz</h2>

                <!-- Text -->
                <p class="p-xl">
                  Muhasebenizi kolay ve güvenli tutmak için doğru yerdesiniz.
                </p>
              </div>
            </div>
          </div>

          <!-- FEATURES-5 WRAPPER -->
          <div class="fbox-5-wrapper pc-30">
            <div class="row">
              <!-- FEATURE BOX #1 -->
              <div id="fb-5-1" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/1.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">Tek Paket, Tek Fiyat</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Tüm ön muhasebe ihtiyaçlarınız tek pakettedir. Yıllık
                      kiralama bedeli dışında ek modül vs ücreti ödemezsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FEATURE BOX #2 -->
              <div id="fb-5-2" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/2.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">Zahmetsiz Veri Aktarımı</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Diğer program veya bilgisayarınızdaki verilerinizi Excel
                      dosyaları olarak aktarabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FEATURE BOX #3 -->
              <div id="fb-5-3" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/3.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">Kullanıcı Dostu Arayüz</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Programı kullanmanız için herhangi bir eğitim ihtiyacına
                      gerek duymazsınız.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FEATURE BOX #4 -->
              <div id="fb-5-4" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/4.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">Teknik Destek</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Arayanlar için 15’nci sıradasınız gibi bir ifade
                      duymazsınız. İstediğiniz an teknik desteğe
                      ulaşabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FEATURE BOX #5 -->
              <div id="fb-5-5" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/5.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">Her Yerden Erişim Kolaylığı</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Şirketinize ait verilere interneti olan istediğiniz bir
                      cihazdan erişebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>

              <!-- FEATURE BOX #6 -->
              <div id="fb-5-6" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/6.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">Günlük Yedekleme</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Yazılımdaki verileriniz günlük olarak ücretsiz bir şekilde
                      yedeklenir, saklanır ve korunur.
                    </p>
                  </div>
                </div>
              </div>
              <!-- FEATURE BOX #5 -->
              <div id="fb-5-5" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/7.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">
                      Resmi Muhasebe (Mali Müşavir) Entegrasyonu
                    </h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Yazılımdaki verilerinizi Excel verisi olarak tüm resmi
                      muhasebe programlarına entegre edebilir veya firmamızın
                      resmi muhasebe yazılımını kullanmanız halinde otomatik
                      olarak muhasebeleştirebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
              <!-- FEATURE BOX #5 -->
              <div id="fb-5-5" class="col-md-6">
                <div
                  class="fbox-5 pc-25 mb-40 wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <!-- Icon -->
                  <div class="fbox-ico ico-70 skyblue-color">
                    <img src="/images/8.png" alt="iş hesap" />
                  </div>

                  <!-- Text -->
                  <div class="fbox-txt">
                    <!-- Title -->
                    <h5 class="h5-sm">
                      Tüm Yazılım İhtiyaçlarınıza Uygun Çözümler
                    </h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Muhasebe, personel, insan kaynakları, satış, üretim, ERP
                      yazılımları gibi diğer yazılımsal ihtiyaçlarınıza entegre
                      çözümler sunabilmekteyiz. Detaylar için iletişime
                      geçebilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- End row -->
          </div>
          <!-- END FEATURES-5 HOLDER -->
        </div>
        <!-- End container -->
      </section>
      <!-- END FEATURES-5 -->

      <!-- CONTENT-3
			============================================= -->
      <section id="content-3" class="pb-60 content-section division">
        <div class="container">
          <!-- CONTENT BOX-1 -->
          <div id="cb-1-1" class="cbox-1 pb-25">
            <div class="row d-flex align-items-center m-row">
              <!-- TEXT BLOCK -->
              <div class="col-md-6 col-lg-6 m-bottom">
                <div
                  class="txt-block left-column wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <!-- Section ID -->
                  <span class="section-id grey-color"
                    >Her Yerden Erişim Kolaylığı</span
                  >

                  <!-- Title -->
                  <h2 class="h2-md">Kullanıcı Arayüzü</h2>

                  <!-- List -->
                  <ul class="simple-list">
                    <li class="list-item">
                      <p class="p-lg">Birden çok bilgisayardan erişim.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Her kullanıcıyı yetkilendirme (Ekleme, Düzenleme, Silme
                        Raporlama işlemlerine göre).
                      </p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">Firma bilgi tanıma.</p>
                    </li>
                    <li class="list-item">
                      <p class="p-lg">Şube Tanıma.</p>
                    </li>
                    <li class="list-item">
                      <p class="p-lg">
                        İnternetin olduğu her yerde, mekandan bağımsız erişim
                        imkanı.
                      </p>
                    </li>
                    <li class="list-item">
                      <p class="p-lg">
                        Kullanıcılar tarafından yapılan her işlemin kaydı(Log
                        işlemleri).
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- END TEXT BLOCK -->

              <!-- IMAGE BLOCK -->
              <div class="col-md-5 col-lg-6 m-top">
                <div
                  class="img-block right-column pc-15 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <img
                    class="img-fluid cards-images"
                    src="/images/d2.png"
                    alt="İş Hesap"
                  />
                </div>
              </div>
            </div>
            <!-- End row -->
          </div>
          <!-- END CONTENT BOX-1 -->

          <!-- CONTENT BOX-2 -->
          <div id="cb-1-2" class="cbox-1">
            <div class="row d-flex align-items-center">
              <!-- IMAGE BLOCK -->
              <div class="col-md-5 col-lg-6">
                <div
                  class="img-block left-column pc-15 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <img
                    class="img-fluid cards-images"
                    src="/images/ister webden ister cebden.png"
                    alt="İş Hesap"
                  />
                </div>
              </div>

              <!-- TEXT BLOCK -->
              <div class="col-md-7 col-lg-6">
                <div
                  class="txt-block right-column pc-30 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <!-- Section ID -->
                  <span class="section-id grey-color"
                    >İster Web'den, İster Cep'ten</span
                  >

                  <!-- Title -->
                  <h2 class="h2-md">
                    İnternete bağlı olan bir cihaz ile yapabildikleriniz.
                  </h2>

                  <!-- Text -->
                  <ul class="simple-list">
                    <li class="list-item">
                      <p class="p-lg">Hızlı Fiyat sorgulama Ekranı.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">Hızlı günlük satış analizi.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Vadesi gelen veya geçen taksit hatırlatma.
                      </p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">Otomatik Güncelleme.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Fatura ve rapor dizaynını kullanıcının kendi
                        yapabilmesi.
                      </p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Fiyatlandırmaya yeni ek modüller dahil değildir.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- END TEXT BLOCK -->
            </div>
            <!-- End row -->
          </div>
          <!-- END CONTENT BOX-2 -->
        </div>
        <!-- End container -->
      </section>
      <!-- END CONTENT-3 -->

      <!-- CONTENT-8
			============================================= -->
      <section id="content-8" class="pb-60 content-section division">
        <div class="container">
          <div class="row d-flex align-items-center m-row mt-25">
            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div
                class="txt-block left-column pc-30 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                <!-- Section ID -->

                <!-- Title -->
                <h2 class="h2-md">Cari Kart Modülü</h2>

                <!-- Text -->
                <ul class="simple-list">
                  <li class="list-item">
                    <p class="p-lg">Sınırsız Cari Hesap kartı tanımlama.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">Sınırsız grup tanımlama.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">Cariye Stoklu-Stoksuz Satış.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cariye kasa'dan ödeme ve tahsilat yapabilme.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cariyi borçlandırma ve alacaklandırma işlemleri.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">Tahsilat ve ödeme makbuzu kesme.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari hesap ekstresi, Toplu Cari raporu ve cari işlem
                      raporu alabilme
                    </p>
                  </li>

                  <li class="list-item">
                    <p class="p-lg">Mahsup fişi(Cariden Cariye Virman).</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari kartlarına kartvizit profil fotoğraf yükleme.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari kart işlemlerine resim veya evrak yükleme.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari kart işlemlerden kısayol ile direk fatura düzeltme.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <!-- END TEXT BLOCK -->

            <div class="col-md-5 col-lg-6">
              <div
                class="img-block right-column pc-15 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <img
                  class="img-fluid cards-images"
                  src="/images/111İş Hesap Logo.png"
                  alt="İş Hesap"
                />
              </div>
            </div>
          </div>

          <!-- <div id="cb-1-2" class="cbox-1 mt-70">
					<div class="row d-flex align-items-center">


						
						<div class="col-sm-12 col-md-6 col-lg-6 m-top">
							<div class="img-block right-column pc-15 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
								<img class="img-fluid cards-images" src="/images/stoktakipmodulü.png" width="400px" alt="İş Hesap">
							</div>
						</div>


						
						<div class="col-sm-12 col-md-6 col-lg-6 m-top">
							<div class="txt-block right-column pc-30 mb-40 wow fadeInLeft" data-wow-delay="0.6s">

								


							
								<h2 class="h2-md">Stok Takip Modülü</h2>

								
								<ul class="simple-list">

									<li class="list-item">
										<p class="p-lg">Sınırsız Depo tanımlama.
										</p>
									</li>

									<li class="list-item">
										<p class="p-lg">Sınırsız Stok kartı Tanımlama.
										</p>
									</li>

									<li class="list-item">
										<p class="p-lg">Barkodsuz ürünler için otomatik barkod tanımlama.
										</p>
									</li>

									<li class="list-item">
										<p class="p-lg">Gramajlı ürünler için otomatik barkod tanımlama.
										</p>
									</li>

									<li class="list-item">
										<p class="p-lg">Stok grubu ve birimi tanımlama.
										</p>
									</li>

									<li class="list-item">
										<p class="p-lg">Stok kartlarına resim yükleme.
										</p>
									</li>
									<li class="list-item">
										<p class="p-lg">Toplu stok raporu ve stok hareketleri raporunu alabilme.
										</p>
									</li>
									<li class="list-item">
										<p class="p-lg">Depo hareketleri raporunu alabilme.
										</p>
									</li>
									<li class="list-item">
										<p class="p-lg">Barkod etiketi basma (tekli veya toplu).
										</p>
									</li>
									<li class="list-item">
										<p class="p-lg">Depolar arası virman.
										</p>
									</li>
								

								</ul>

							</div>
						</div> 


					</div>
				</div>  -->
        </div>
      </section>

      <section
        id="features-13"
        class="rel aliceblue_shape mt-inverse-40 features-section division mb-40"
      >
        <div class="container">
          <div class="row d-flex align-items-center">
            <!-- TEXT BLOCK -->
            <div class="col-md-10 col-lg-5">
              <div class="txt-block pc-15 wow fadeInUp" data-wow-delay="0.4s">
                <!-- Section ID -->
                <span class="section-id grey-color"
                  >Yenilikçi Özelliklerimiz</span
                >
                <!-- Title -->
                <h2 class="h2-md">Stok Takip Modülü</h2>

                <p class="p-lg">
                  Büyükten küçüğe tüm işletmelere hitap edebilen esnek yapılı,
                  kullanıcı taleplerine göre şekillendirilmiş, esnek bir yapıda
                  stok takip modülümüz mevcuttur. Bu modül ile tüm stok
                  takibinizi ve sınırsız depo kartı tanımlama, sınırsız stok
                  tanımlama, stok grubu ve birimi tanımlama gibi birçok
                  kolaylıkları tek bir platform üzerinden eş güdümlü olarak
                  yapabilirsiniz. Ofisinizde, işyerinizde, fabrikanızda,
                  mağazanızda veya yolda,araçta stok yönetiminize
                  erişebilirsiniz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->
            <!-- FEATURES-13 WRAPPER -->
            <div class="col-lg-7">
              <div class="fbox-13-wrapper pl-35">
                <div class="row">
                  <div class="col-md-6">
                    <!-- FEATURE BOX #1 -->
                    <div
                      id="fb-13-1"
                      class="fbox-13 mt-50 mb-30 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75 mr-5">
                        <img
                          src="images/raporlama-icon.png"
                          width="16px"
                          height="16px"
                          alt="İş Hesap"
                        />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Raporlama Sistemi</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Raporlama sistemi sayesinde anlık durumunuzu
                        görüntüleyebilirsiniz.Satış raporu ve satış grafiğinize
                        kolayca ulaşabilirsiniz.
                      </p>
                    </div>

                    <!-- FEATURE BOX #2 -->
                    <div
                      id="fb-13-2"
                      class="fbox-13 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75">
                        <img
                          src="images/kasa-icon.png"
                          width="16px"
                          height="16px"
                          alt="İş Hesap"
                        />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Kasa Takip Modülü</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Kasadan ödeme ve tahsilat işlemleri,kalan bakiyeyi
                        görme, Kasa'dan banka’ya virman yapabilme, İki tarih
                        arası detaylı raporlama yapabilirsiniz.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <!-- FEATURE BOX #3 -->
                    <div
                      id="fb-13-3"
                      class="fbox-13 mb-30 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75">
                        <img
                          src="images/taksit-icon.png"
                          width="16px"
                          height="16px"
                          alt="İş Hesap"
                        />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Taksit Takip Modülü</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Otomatik taksitlendirme Modülü,Vadesi gelen taksitleri
                        ana ekranda uyarma, Taksitlerin tahsilat ve ödeme
                        işlemleri,Detaylı taksit raporu alabilme gibi özellikler
                        sayesinde taksitlerinizin takibini yapabilirsiniz.
                      </p>
                    </div>
                    <!-- FEATURE BOX #4 -->
                    <div
                      id="fb-13-4"
                      class="fbox-13 wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75">
                        <img
                          src="images/banka-icon.png"
                          width="16px"
                          height="16px"
                          alt="İş Hesap"
                        />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Banka Takip Modülü</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Sınırsız banka hesabı tanımlama,Banka hareket girişi
                        yapabilme, Banka hareketlerini detaylı raporlama,
                        Banka'dan Bankaya veya Banka'dan Kasaya kolaylıkla
                        virman yapabilirsiniz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End row -->
            </div>
            <!-- END FEATURES-13 WRAPPER -->
          </div>
          <!-- End row -->
        </div>
        <!-- End container -->
      </section>

      <section id="content-12" class="mb-90 content-section division">
        <div class="container">
          <div class="lavender_gradient content-12-wrapper">
            <div class="row d-flex align-items-center">
              <!-- TEXT BLOCK -->
              <div class="col-lg-5">
                <div
                  class="txt-block left-column mb-40 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <!-- Title -->
                  <h2 class="h2-xs">Kolay Fatura Modülü</h2>

                  <!-- Text -->
                  <p class="p-lg">
                    Alış,Satış ve İade faturası düzenleme,Kişiselleştirilebilen
                    2 adet özel alan İrsaliyeyi faturaya dönüştürme, Hızlı
                    perakende satışı yapabilme,Detaylı alış, satış ve iade
                    faturası raporlama gibi özellikler sayesinde zahmetsiz
                    fatura kesimi yapabilirsiniz.
                  </p>
                </div>
              </div>
              <!-- END TEXT BLOCK -->

              <!-- IMAGE BLOCK -->
              <div class="col-lg-7">
                <div
                  class="content-12-img right-column wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <img
                    class="img-fluid"
                    src="images/kolay-fatura-modülü.png"
                    style="width: 90%"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- End row -->
        </div>
        <!-- End container -->
      </section>

      <!-- DOWNLOAD-1
			============================================= -->
      <section
        id="download-1"
        class="bg_sblue bg_pattern_01 pt-100 download-section division"
      >
        <div class="container white-color">
          <div class="row d-flex align-items-center m-row">
            <!-- IMAGE BLOCK -->
            <div class="col-md-5 col-lg-6 m-bottom">
              <div
                class="img-block right-column pc-25 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img
                  class="img-fluid"
                  style="max-width: 130%"
                  src="images/uygulamamızı-deneyimleyin.png"
                  alt="İş Hesap"
                />
              </div>
            </div>
            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6 m-top">
              <div
                class="txt-block left-column pc-20 wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <!-- Title -->
                <h2 class="h2-md">Mobil Uygulamamızı Deneyimleyin</h2>

                <!-- Text -->
                <p class="p-xl">
                  Tüm Android veya IOS tabanlı cep telefonlarında KOBİ mobil
                  uygulamamızı indirip kullanabilirsiniz. Cep telefonunuzdan
                  internete bağlı olduğu her an e-fatura düzenleyebilirsiniz.
                  Cari ekleyebilir, sipariş takibi yapabilir, kasa ve banka
                  işlemlerinizi gerçekleştirebilirsiniz
                </p>

                <!-- STORE BADGES -->
                <div class="stores-badge">
                  <!-- AppStore -->
                  <a
                    href="https://apps.apple.com/us/app/i-%C5%9F-hesap/id6443794945"
                    target="_blank"
                    class="store"
                  >
                    <img
                      class="appstore-white"
                      src="images/appstore-white.png"
                      alt="iş Hesap"
                    />
                  </a>

                  <!-- Google Play -->
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kuvarssoft.ishesap
								"
                    target="_blank"
                    class="store"
                  >
                    <img
                      class="googleplay-white"
                      src="images/googleplay-white.png"
                      alt="İş Hesap"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!-- END TEXT BLOCK -->
          </div>
          <!-- End row -->
        </div>
        <!-- End container -->
      </section>
      <!-- END DOWNLOAD-1 -->

      <!-- FOOTER-1
			============================================= -->
      <footer id="footer-1" class="footer division">
        <div class="container">
          <!-- FOOTER CONTENT -->
          <div class="row">
            <!-- FOOTER INFO -->
            <div class="col-md-12 col-lg-3">
              <div class="footer-info mb-40">
                <img
                  class="footer-logo mb-25"
                  src="/images/is_black3.png"
                  alt="footer-logo"
                />
              </div>
            </div>

            <!-- FOOTER LINKS -->
            <div class="col-sm-4 col-md-4 col-lg-3 offset-lg-1">
              <div class="footer-links">
                <!-- Title -->
                <h5 class="h5-xs">Sayfalarımız</h5>

                <!-- Footer Links -->
                <ul class="foo-links clearfix">
                  <li>
                    <p class="p-md">
                      <a href="http://test.siberhesap.com/docs" target="_blank"
                        >Doküman</a
                      >
                    </p>
                  </li>
                  <li>
                    <p class="p-md">
                      <a href="blog.html" target="_blank">Blog</a>
                    </p>
                  </li>
                  <li>
                    <p class="p-md">
                      <a href="hakkimizda.html" target="_blank">Hakkımızda</a>
                    </p>
                  </li>
                  <li>
                    <p class="p-md">
                      <a href="sss.html" target="_blank">SSS</a>
                    </p>
                  </li>
                  <li>
                    <p class="p-md">
                      <a href="paketler.html" target="_blank">Paketler</a>
                    </p>
                  </li>
                  <li>
                    <p class="p-md">
                      <a href="iletisim.html" target="_blank">İletişim</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <!-- FOOTER COMPANY LINKS -->
            <div class="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div class="footer-links mb-40">
                <!-- Title -->
                <h5 class="h5-xs">İletişim</h5>

                <!-- Social Links -->
                <h5 class="h5-xs">
                  <a
                    href="https://www.facebook.com/profile.php?id=100087111783559"
                    target="_blank"
                    class="foo-facebook"
                    >Facebook</a
                  >
                </h5>
                <h5 class="h5-xs">
                  <a
                    href="https://twitter.com/ishesapcom"
                    target="_blank"
                    class="foo-twitter"
                    >Twitter</a
                  >
                </h5>
                <h5 class="h5-xs">
                  <a
                    href="https://instagram.com/ishesapcom?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    class="foo-instagram"
                    >Instagram</a
                  >
                </h5>
                <h5 class="h5-xs">
                  <a
                    href="https://www.linkedin.com/showcase/i%CC%87shesap/"
                    target="_blank"
                    class="foo-linkedin"
                    >Lınkedin</a
                  >
                </h5>
                <h5 class="h5-xs">
                  <a
                    href="https://www.youtube.com/channel/UCZk-s2MrtbtHryIXpgl5c6A"
                    target="_blank"
                    class="foo-youtube"
                    >Youtube</a
                  >
                </h5>
              </div>
            </div>
          </div>
          <!-- END FOOTER CONTENT -->

          <!-- BOTTOM FOOTER -->
          <div class="bottom-footer">
            <div class="row">
              <!-- FOOTER COPYRIGHT -->
              <div class="col-md-12">
                <div class="footer-copyright">
                  <p>&copy; İşHesap</p>
                </div>
              </div>
            </div>
          </div>
          <!-- END BOTTOM FOOTER -->

          <div class="d-flex justify-content-center">
            <a href="javascript:void(0)">Gizlilik Sözleşmesi</a>
            <a class="ml-10" href="javascript:void(0)">Kullanıcı Sözleşmesi</a>
          </div>
        </div>
        <!-- End container -->
      </footer>
      <!-- END FOOTER-1 -->
    </div>
    <!-- END PAGE CONTENT -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
