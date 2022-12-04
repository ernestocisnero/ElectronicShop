import { Link } from "react-router-dom"


export const Signup = (): JSX.Element => {
    return (
        <div className="main-login-wrapper">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong" >
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign Up</h3>

                                <form action="submit">
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastName" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="pass-confirm" className="form-label">Confirm your Password</label>
                                        <input type="password" className="form-control" id="pass-confirm" />
                                    </div>

                                    <button className="btn btn-primary btn-sm btn-block">
                                        Create account
                                    </button>

                                    <hr />
                                    <h6 className="mt-4">Do you have an account? <Link className="text-info" to={'/login'}>Login</Link></h6>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
