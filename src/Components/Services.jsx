import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-4">Наши автомобили</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                    <img src="..." className="card-img-top" alt="/"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make
                                            up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-outline-dark">Подробней</a>
                                        <a href="#" className="btn btn-outline-dark ms-2">Добавить в корзину</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Services;
