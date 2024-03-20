import React from 'react'


const HomePage = () => {
    return (
        <div>
            <main class="container-fluid">
                <div class="container text-center">
                    <h2 class="twww my-5 text-dark">Welcome To The
                        <br />
                        "Together We Will Win" Association</h2>
                    <div data-bs-ride="carousel" id="carouselExampleCaptions" class="carousel slide d-none d-lg-block">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://a.kikar.co.il/v2/articles/1013361/og-image.jpeg"
                                    class="d-block w-100 img_carosel rounded-5" alt="..." />
                                <div class="carousel-caption d-none d-md-block fs-3 fw-bold text-pic">
                                    <h3>Shay groacher</h3>
                                    <p>Founder of the Charity Together We Will Win organi<span class="text-dark">zation.</span></p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.makorrishon.co.il/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-19-at-12.32.03.jpeg"
                                    class="d-block w-100 img_carosel rounded-5" alt="..." />
                                <div class="carousel-caption d-none d-md-block fs-3 fw-bold text-pic">
                                    <h3>Logistics center</h3>
                                    <p>Shay in the logistics warehouse of an organization together we will win.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://storage.hidabroot.org/articles_new/349379_tumb_750Xauto.jpeg"
                                    class="d-block w-100 img_carosel rounded-5" alt="..." />
                                <div class="carousel-caption d-none d-md-block fs-3 fw-bold text-pic">
                                    <h3>together with the soldiers</h3>
                                    <p>From the activities of the organization to the IDF soldiers in all the places they are.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://kol-barama.co.il/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-10.50.22.jpeg"
                                    class="d-block w-100 img_carosel rounded-5" alt="..." />
                                <div class="carousel-caption d-none d-md-block fs-3 fw-bold text-pic">
                                    <h3>in the yesh<span class="text-dark">iva hall</span></h3>
                                    <p>The organization's activity is also in yeshiva, Shai d<span class="text-dark">uring a class in the middle of the yeshiva activity.</span></p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="container text-center d-flex flex-column my-3">
                    <button class="btn btn-outline-light"><a class="fw-bold fs-5 text-decoration-none text-dark"
                        href="https://www.charidy.com/Chessedvrachamim" target="_blank">To donate click here</a></button>
                    <div class="text-center">
                        <iframe class="rounded-5 my-2 col-md-8 col-sm-12" width="660" height="415"
                            src="https://www.youtube.com/embed/b_pqMPqxPEo?si=RntNBrzuCfOWeK1X" title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage