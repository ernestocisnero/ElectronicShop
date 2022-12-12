import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormLoginInput } from "../../interfaces";
import { googleSignIn, logInUserEmailPassword } from "../../firebase";
import { AppContext } from "../../context/AppContext";


export const Login = (): JSX.Element => {

    const { dispatch } = useContext(AppContext);
    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm<IFormLoginInput>();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: '',
                password: '',
            });
        }

    }, [isSubmitSuccessful])

    //Handle Login
    const onSubmit: SubmitHandler<IFormLoginInput> = async ( data ): Promise<void> => {

        const user = await logInUserEmailPassword(data.email, data.password);
        dispatch({ type: "log_user", payload: user });
    }

    //Handle Login with Google

    const handleGoogleSignIn = async (event: React.FormEvent): Promise<void> =>{
        event.preventDefault();
        const user = await googleSignIn();
        dispatch({ type: "log_user", payload: user });
    }

    return (

        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" >
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Login</h3>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className={`form-control ${errors.email && "is-invalid"}`} id="email" {...register("email", { required: true })} autoComplete="on" />
                                    {errors.email && <p className="invalid-feedback">Email is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className={`form-control ${errors.password && "is-invalid"}`} id="password" {...register("password", { required: true })} autoComplete="on" />
                                    {errors.password && <p className="invalid-feedback">Password is required</p>}
                                </div>

                                <button className="btn btn-primary btn-sm btn-block" type="submit">
                                    Login
                                </button>
                                <hr />

                                <div>
                                    <button className="btn btn-primary mr-2" style={{ backgroundColor: '#dd4b39' }} onClick={ handleGoogleSignIn }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-google mr-2" viewBox="0 0 16 16">
                                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                        </svg>
                                        Google
                                    </button>

                                    <button className="btn btn-primary ml-2" style={{ backgroundColor: '#00ACEE' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-twitter mr-2" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                        Twitter
                                    </button>
                                </div>
                                <hr />
                                <h6 className="mt-4">Don't have an account? <Link className="text-info" to={'/signup'}>Sign Up</Link></h6>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
