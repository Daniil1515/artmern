import React from 'react';
import {NavLink} from "react-router-dom";

const Login = () => {


    return (
        <div>
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-md-5 d-flex flex-column align-items-center form justify-content-center">
                        <h3 className="display-6 fw-bolder text-white">Welcome</h3>
                        <p className="lead text-center text-white">Войдите или пройдите регистрацию</p>
                        <NavLink to="/register" className="btn btn-outline-light pb-2 w-50">Register</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 text-center">Login</h1>
                        <form>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone
                                        else.
                                    </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label " htmlFor="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-outline-dark w-100 mt-4" >Login</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;
