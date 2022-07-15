import React from 'react';

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container mu-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/premium-vector/muscle-car-retro-logo-emblem_212474-147.jpg?w=2000" alt=""
                            className="w-75 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">О нас</h3>
                            <h1 className="display-6">Что <b>мы</b> делаем</h1>
                            <hr />
                            <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum, debitis deleniti ipsam labore possimus qui quidem sapiente sit ullam.</p>
                            <button className="btn btn-outline-dark px-4 py-2">Написать нам</button>
                            <button className="btn btn-outline-dark px-4 py-2 ms-2">Позвонить нам</button>
                        </div>
                    </div>
                    
                </div>
                
            </section>
        </div>
    );
};

export default About;
