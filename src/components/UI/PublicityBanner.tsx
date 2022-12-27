
export const PublicityBanner = (): JSX.Element => {
    return (
        <div className="d-flex justify-content-center">
            <div className="publicity-banner d-none d-sm-none d-md-none d-lg-block">
                {/* Shows on large and lager devices */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="mt-5" style={{ color: "#fff" }}>Do you know about Opta the new PLC by Arduino ?</h2>
                            <p className="mt-3" style={{ color: "#fff" }}>An industrial micro PLC with  IoT capabilities</p>
                        </div>
                        <div className="col">
                            <img className="opta-image" src="images/Opta.png" alt="The new PLC opta by Arduino" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column d-none d-sm-block d-md-block d-lg-none">
                <div className="publicity-banner">
                    {/* Shows on small and smaller devices */}
                    <div className="container ">
                        <h2 style={{ color: "#fff" }}>Do you know about Opta the new PLC by Arduino ?</h2>
                        <p className="mt-3" style={{ color: "#fff" }}>An industrial micro PLC with  IoT capabilities</p>
                    </div>
                </div>
                <img className="opta-image" src="images/Opta.png" alt="The new PLC opta by Arduino" />
            </div>

        </div>
    )
}
