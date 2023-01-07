
type PropType = {
    setFirstName:Function
    setLastName:Function
    setCardNumber: Function
    setExpDate: Function
    setCVV: Function
}
export const CheckoutForm = ( { setFirstName, setLastName, setCardNumber, setExpDate, setCVV }: PropType ): JSX.Element => {
    
    return (
        <form className="my-3">
            {/* Billing Address Form */}
            <h4 style={{ color: "#013D29" }}>Billing Address</h4>
            <div className="d-flex justify-content-evenly flex-column flex-md-row mb-3">
                <div className="mr-3">
                    <label htmlFor="exampleInputFirstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="exampleInputFirstName" onChange={ (event)=> setFirstName( event.currentTarget.value ) }/>
                </div>
                <div className="mr-3">
                    <label htmlFor="exampleInputLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="exampleInputLastName" onChange={ (event)=> setLastName(event.currentTarget.value) }/>
                </div>
            </div>

            <div className="d-flex justify-content-evenly flex-column mb-3">
                <div className="mr-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" aria-required />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputAddress1" className="form-label">Main street</label>
                    <input type="text" className="form-control" id="exampleInputAddress1" aria-required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress2" className="form-label">Street (optional)</label>
                    <input type="text" className="form-control" id="exampleInputAddress2" />
                </div>
            </div>

            <div className="d-flex justify-content-evenly flex-column flex-md-row mb-3">
                <div className="mr-3">
                    <label htmlFor="exampleInputCountry" className="form-label">Country</label>
                    <select className="form-control" id="exampleInputCountry">
                        <option value="United States">United States</option>
                        <option value="United States" selected>Choose...</option>
                    </select>
                </div>
                <div className="mr-3">
                    <label htmlFor="exampleInputState" className="form-label">State</label>
                    <select className="form-control" id="exampleInputState">
                        <option value="United States">Florida</option>
                        <option value="United States" selected>Choose...</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputZip" className="form-label">Zip</label>
                    <input type="number" className="form-control" id="exampleInputZip" />
                </div>
            </div>

            <div className="border my-2"></div>

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Shipping address is the same as my billing address</label>
            </div>

            <div className="border my-2"></div>

            {/* Payment Form */}
            <h4 style={{ color: "#013D29" }}>Payment</h4>
            <div className="my-3 btn-group" role="group">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">Debit Card</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">Credit Card</label>
                </div>
            </div>
            <div className="d-flex justify-content-evenly flex-column flex-md-row mb-3">
                <div className="mr-3">
                    <label htmlFor="exampleInputNameOnCard" className="form-label">Name on Card</label>
                    <input type="text" className="form-control" id="exampleInputNameOnCard" />
                </div>
                <div className="mr-3">
                    <label htmlFor="exampleInputNumberOnCard" className="form-label">Card number</label>
                    <input type="text" className="form-control" id="exampleInputNumberOnCard" onChange={ (event)=> setCardNumber(event.currentTarget.value) }/>
                </div>
            </div>

            <div className="d-flex justify-content-evenly flex-column flex-md-row mb-3">
                <div className="mr-3 input-group-sm">
                    <label htmlFor="exampleInputExpiration" className="form-label">Expiration date</label>
                    <input type="date" className="form-control" id="exampleInputExpiration" onChange={ (event)=> setExpDate(event.currentTarget.value) }/>
                </div>
                <div className="mr-3 input-group-sm">
                    <label htmlFor="exampleInputCVV" className="form-label">CVV</label>
                    <input type="number" className="form-control" id="exampleInputCVV" onChange={ (event) => setCVV(event.currentTarget.value) }/>
                </div>
            </div>
        </form>
    )
}
