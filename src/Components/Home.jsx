import React from 'react';
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder md-4 text-center text-white">Лучший вариант авто</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum harum quasi quis velit. Assumenda cupiditate doloremque magni quae repellat ullam!</p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/services" className="btn btn-outline-light me-4 px-4 py-2">Выбрать авто</NavLink>
                                <button className="btn btn-outline-light  px-4 py-2">Заказать автоподбор</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
};

export default Home;
