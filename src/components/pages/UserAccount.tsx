import { useContext } from 'react';
import { AppContext } from "../../context/AppContext"
import { signOutUser } from '../../firebase';

export const UserAccount = (): JSX.Element => {
    const { userState, dispatch } = useContext(AppContext);

    const handleSignOut = async () => {
        const user_signedOut = await signOutUser();
        await dispatch({ type: 'logOut_user', payload: user_signedOut })
    }

    const updateImage = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Updated image profile");

    }

    const updatePassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("Updated password successfuly");

    }

    return (
        <section className="d-flex justify-content-center">
            <div className="user_account my-3">
                <div className="background"></div>

                <div className='profile-image-wrapper d-flex justify-content-between flex-wrap'>

                    <div className="profile-image">
                        <img className="user-profile-image" src={userState.userPhotoURL ? `${userState.userPhotoURL}` : "/images/profile.png"} alt="This is the user profile image" />
                    </div>

                    <div className="btn-options-wrapper m-2">
                        <button className='btn btn-primary rounded btn-sm mr-2' style={{ color: "#fff" }} onClick={updateImage}>Update Image</button>
                        <button className="btn btn-danger btn-sm rounded" style={{ color: "#fff" }} onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>

                <div className="user-data d-flex flex-column justify-content-center align-items-center my-2">


                    <div className="userName d-flex">
                        <h5 className='mr-3 d-none d-sm-none d-md-none d-lg-block text-capitalize' style={{ color: "#013D29" }}>Username:</h5>
                        <h5 className='mr-3 d-sm-block d-md-block d-lg-none'>
                            <svg style={{ color: "#013D29" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-vcard" viewBox="0 0 16 16">
                                <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                                <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                            </svg>
                        </h5>
                        <p className="font-weight-bold text-primary" >{userState.displayName}</p>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">Premiun User</h6>

                    <div className="email d-flex">
                        <h5 className='mr-3 d-none d-sm-none d-md-none d-lg-block text-capitalize' style={{ color: "#013D29" }}>Email:</h5>
                        <h5 className='mr-3 d-sm-block d-md-block d-lg-none'>
                            <svg style={{ color: "#013D29" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill mr-3" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z" />
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z" />
                            </svg>
                        </h5>
                        <p className="font-weight-bold text-primary" >{userState.email}</p>
                    </div>


                    <h6 className='mt-3' style={{ color: "#013D29" }}>Password update</h6>
                    <form className='border p-5'>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Enter your current password</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder=".........." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Enter your new password</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=".........." />
                        </div>

                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput2">Confirm your new password</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=".........." />
                        </div>

                        <button className='btn btn-info rounded btn-sm mr-2' style={{ color: "#fff" }} onClick={updatePassword}>Update password</button>
                    </form>
                </div>

            </div>
        </section>
    )
}
