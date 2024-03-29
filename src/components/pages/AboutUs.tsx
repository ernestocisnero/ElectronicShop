

export const AboutUs = (): JSX.Element => {
    return (
        <section className="container my-5 d-flex flex-column justify-content-center">

            <div className="card m-3" style={{ width: "70%", borderColor: "#013D29" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: "#013D29" }}>About us</h5>
                    <h6 className="card-subtitle mb-2 text-muted">MyHardware</h6>
                    <p className="card-text">
                        This is an online store clone app, NOT a real store. The purpose of this is practicing and learning.
                        All the products, and brands showed in this App belongs to its real manufacturers and owners.
                        Any concern or information that you may require about the products you see here please refer to its official websites or authorized references.
                    </p>
                    <div className='card-footer'>
                        Used technologies: Typescript, React, Bootstrap, firebase, Netlify.
                    </div>
                </div>
            </div>

            <div className="card m-3" style={{ width: "70%", borderColor: "#013D29" }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: "#013D29" }}>About the author</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Ernesto Cisnero</h6>
                    <p className="card-text">
                        I'm a web developer, I have a passion for building web applications and have spent the last few years learning and practicing with these technologies.
                        I am proficient in Javascript and have a strong understanding of its syntax and core concepts, as well as the React framework and its components.
                    </p>

                    <div className='card-footer d-flex flex-column flex-md-row align-items-start'>

                        <a href="https://github.com/ErnestoCisnero" target="_blank" className="ml-1 mb-1" style={{ color: "#013D29", textDecoration: "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg> Github
                        </a>

                        <a href="https://www.linkedin.com/in/miguel-ernesto-cisnero-de-la-cruz/" target="_blank" className="ml-1 mb-1" style={{ color: "#013D29", textDecoration: "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg> Linkedin
                        </a>

                        <a href="https://ernestocisnero.netlify.app/" target="_blank" className="ml-1 mb-1" style={{ color: "#013D29", textDecoration: "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg> Portfolio
                        </a>


                    </div>

                </div>
            </div>
        </section>
    )
}
