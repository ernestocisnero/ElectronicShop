import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormSignUpInput } from "../../interfaces";
import { validatePasswordFormat } from "../../helpers/validatePasswordFormat";



export const Signup = (): JSX.Element => {

    const { register, handleSubmit, formState: { errors } } = useForm<IFormSignUpInput>();

    const onSubmit: SubmitHandler<IFormSignUpInput> = (data) =>{
    
        validatePasswordFormat(data.password, data.passwordConfirm) ? console.log("Match") :console.log("No match")
        
    }


    return (

        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" >
                        <div className="card-body p-5 text-center">

                            <h3 className="mb-5">Sign Up</h3>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className={`form-control ${errors.name && "is-invalid"}`}  id="name" placeholder="John" autoComplete="on" 
                                    {...register("name", {required: true})} />
                                    {errors.name && <p className="invalid-feedback">Name is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input type="text" className={`form-control ${errors.lastName && "is-invalid"}`} id="lastName" placeholder="Doe" autoComplete="on"  
                                    {...register("lastName",{required: true})} />
                                    {errors.lastName && <p className="invalid-feedback">Last Name is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className={`form-control ${errors.email && "is-invalid"}`} id="email" placeholder="youremail@email.com" autoComplete="on"
                                    {...register("email",{required: true})} />
                                    {errors.email && <p className="invalid-feedback">Email is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className={`form-control ${errors.password && "is-invalid"}`} id="password" placeholder="********" autoComplete="on"
                                    {...register("password", {required: true} )} />
                                    {errors.password && <p className="invalid-feedback">Password is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="pass-confirm" className="form-label">Confirm your Password</label>
                                    <input type="password" className={`form-control ${errors.passwordConfirm && "is-invalid"}`} id="pass-confirm" placeholder="********" autoComplete="on"
                                    {...register("passwordConfirm", {required: true})} />
                                    {errors.passwordConfirm && <p className="invalid-feedback">Confirm your password</p>}
                                </div>

                                <button className="btn btn-primary btn-sm btn-block" type="submit">
                                    Create account
                                </button>

                                <hr />
                                <h6 className="mt-4">Do you have an account? <Link className="text-info" to={'/'}>Login</Link></h6>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
