import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username : "",
        email : "",
        password : ""
    });

    //handle input
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    //handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        //object destructuring
        //store object data variables
        const {username, email, password} = user;

        //submitted on port 3000 front end, but need to add to backend port 3001 through the proxy

        try {
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    username, email, password
                })
            })
            if(res.status === 400 || !res){
                window.alert("Already Used Details")
            }else {
                //restart server after proxy works
                window.alert("Registration Successfully");
                navigate.push('/login')
            }
        }catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container shadow my-5">
                <div className="row justify-content-center">
                    <div className="col-md-5 d-flex flex-column align-items-center form justify-content-center form order-2">
                        <h3 className="display-6 fw-bolder text-white">Welcome</h3>
                        <p className="lead text-center text-white">Пройдите регистрацию или войдите</p>
                        <NavLink to="/login" className="btn btn-outline-light pb-2 w-50">Login</NavLink>
                    </div>
                    <div className="col-md-6 p-5">
                        <h1 className="display-6 text-center">Register</h1>
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text"
                                       className="form-control"
                                       id="name"
                                       name="username"
                                       value={user.username}
                                       onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email"
                                       className="form-control"
                                       id="exampleInputEmail1"
                                       aria-describedby="emailHelp"
                                       name="email"
                                       value={user.email}
                                       onChange={handleInput}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password"
                                       className="form-control"
                                       id="exampleInputPassword1"
                                       name="password"
                                       value={user.password}
                                       onChange={handleInput}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">I agree Terms and Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-outline-dark w-100 mt-4">Register</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;
