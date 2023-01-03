import { CheckoutForm } from "../UI"


export const Payments = (): JSX.Element => {
  return (
    <div className="container d-flex flex-column flex-md-row justify-content-between my-2">
      <div className="personal-data">
        <CheckoutForm />
      </div>

      <div className="card-data my-2">
        <div className="card card-payment d-flex flex-column justify-content-between" style={{ width: "210px", height: "300px", borderRadius: "15px" }}>

          <div className="d-flex justify-content-between m-3">
            <img src="icons/icons8-chip-card-100.png" alt="chip-card" style={{ width: "30px", height: "30px" }} />
            <img src="icons/icons8-contactless-payment-48.png" alt="contactless-payment" style={{ width: "30px", height: "30px" }} />
          </div>

          <div className="d-flex flex-column text-danger m-3" style={{ opacity: 1 }}>
            <p style={{ color: "#013D29" }}>Your Name</p>
            <p style={{ color: "#013D29" }}>111111111111111111</p>
            <div className="d-flex justify-content-around">
              <p style={{ color: "#013D29" }}>11/02/25</p>
              <p style={{ color: "#013D29" }}>123</p>
            </div>

          </div>
        </div>

        <button type="submit" className="btn btn-block my-3 rounded" style={{ backgroundColor: "#013D29", color: "#fff" }}>Pay</button>

      </div>
    </div>

  )
}
