import React from 'react';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="display-6 text-center mb-0">Контакты</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://traineeships.ec.europa.eu/sites/default/files/styles/eac_ratio_16_9_large/public/2021-06/contact-03.png?h=a955cd85&itok=Jp1BE4h6" alt=""
                            className="w-75 h-75 mb-3"/>
                        </div>
                        <div className="col-md-6">
                            <form action="">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Ваше имя</label>
                                    <input type="text" className="form-control" id="name"
                                           placeholder="Имя Фамилия"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Ваш email</label>
                                    <input type="email" className="form-control" id="email"
                                           placeholder="youremail@.com"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Ваш вопрос</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1"
                                              rows="5"></textarea>
                                </div>
                                <button className="btn btn-outline-dark" type="submit">Отправить<i className="fa fa-paper-plane ms-2"></i></button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Contact;
