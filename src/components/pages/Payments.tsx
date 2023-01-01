

export const Payments = (): JSX.Element => {
  return (
    <div className="container border my-2">
      <div className="personal-data">
        personal data
      </div>

      <div className="card-data my-2">
        <div className="card card-payment d-flex flex-column justify-content-between" style={{ width: "210px", height: "300px", borderRadius: "15px" }}>
          
          <div className="d-flex justify-content-between m-3">
            <img src="icons/icons8-chip-card-100.png" alt="chip-card"  style={{ width: "30px", height: "30px"}}/>
            <img src="icons/icons8-contactless-payment-48.png" alt="contactless-payment"  style={{ width: "30px", height: "30px"}}/>
          </div>

          <div className="d-flex flex-column text-danger m-3" style={{ opacity:1 }}>
            <p>Your Name</p>
            <p>111111111111111111</p>
            <p>11/02</p>
          </div>

        </div>
      </div>
    </div>
  )
}
