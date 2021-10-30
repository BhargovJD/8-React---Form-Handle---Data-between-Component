import React from 'react'

export default function Register(props) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        <form onSubmit={props.submit}>
                            <h4>User Register Form:</h4>
                            <div className="mb-3">
                                <label >User name</label>
                                <input name="name" type="text" className="form-control" />

                            </div>

                            <div className="mb-3">
                                <label>Email address</label>
                                <input name="email" type="email"/>
                            </div>

                            <div className="mb-3">
                                <label >Password</label>
                                <input name="password" type="password" />
                            </div>

                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    )
}
