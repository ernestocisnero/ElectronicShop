import { CheckoutForm } from "../UI"
import { useState } from 'react';


export const Payments = (): JSX.Element => {
  const [firstName, setFirstName] = useState('Your');
  const [lastName, setLastName] = useState('Name');
  const [cardNumber, setCardNumber] = useState('xxxx xxxx xxxx xxxx');
  const [expDate, setExpDate] = useState('Jan/01');
  const [cvv, setCVV] = useState('...');
  
  return (
    <div className="container d-flex flex-column flex-md-row justify-content-between my-2">
      <div className="personal-data">
        <CheckoutForm setFirstName={ setFirstName } setLastName={ setLastName } setCardNumber={ setCardNumber } setExpDate={ setExpDate } setCVV ={ setCVV }/>
      </div>

      <div className="card-data my-2">
        <div className="card card-payment d-flex flex-column justify-content-between" style={{ width: "210px", height: "300px", borderRadius: "15px" }}>

          <div className="d-flex justify-content-between m-3">
            <img src="icons/icons8-chip-card-100.png" alt="chip-card" style={{ width: "30px", height: "30px" }} />
            <img src="icons/icons8-contactless-payment-48.png" alt="contactless-payment" style={{ width: "30px", height: "30px" }} />
          </div>

          <div className="d-flex flex-column text-danger m-3" style={{ opacity: 1 }}>
            <p style={{ color: "#013D29" }}>{firstName} {lastName}</p>
            <p style={{ color: "#013D29" }}>{cardNumber}</p>
            <div className="d-flex justify-content-around">
              <p style={{ color: "#013D29" }}>{expDate}</p>
              <p style={{ color: "#013D29" }}>{cvv}</p>
            </div>

          </div>
        </div>

        <button type="submit" className="btn btn-block my-3 rounded" style={{ backgroundColor: "#013D29", color: "#fff" }}>Pay</button>

      </div>
    </div>

  )
}
