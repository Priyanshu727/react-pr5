import React from 'react'
import Header from './component/Header';

function Main() {
    return (
        <section className="mainbnner vh-100">
            <div className="banner">
                <Header />

                <div className="container">
                    <div className="row justify-content-center align-item-center">
                        <div className=" main-cont col-6 mx-auto text-center">
                            <h1 className='text-white'>Powerful Digital <br />Solutions With Gp<span>.</span></h1>
                            <h2>We are team of talented digital marketers</h2>
                        </div>
                    </div>

                    <div className=" main-table row justify-content-center mt-5 text-center">
                        <div className="col-2 ">
                            <div className="icon-box">
                                <i class="ri-store-line"></i>
                                <h3>
                                    Lorem <br /> Ipsum
                                </h3>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="icon-box">
                                <i class="ri-bar-chart-box-line"></i>
                                <h3>Dolor Sitema</h3>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="icon-box">
                                <i class="ri-calendar-todo-line"></i>
                                <h3>
                                    Sedare Perspiciatis
                                </h3>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="icon-box">
                                <i class="ri-paint-brush-line"></i>
                                <h3>
                                    Magni Dolores
                                </h3>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="icon-box">
                                <i class="ri-database-2-line"></i>
                                <h3>
                                    Nemos Enimade
                                </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default Main