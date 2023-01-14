
export const Learn = (): JSX.Element => {
  return (
    <section className="container d-flex flex-column flex-md-row justify-content-between my-5">

      <div className="card my-3" style={{ width: "18rem" }}>
        <h5 className="card-title m-3">What is a PLC?</h5>
        <img className="card-img-top" src="images/M580.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            PLC stands for Programmable Logic Controller. They are industrial computers used to control different electro-mechanical processes for use in manufacturing,
            plants, or other automation environments.
          </p>

          <p className="card-text">
            PLCs vary in size and form factors. Some are small enough to fit in your pocket while others are large enough to require their own heavy-duty racks to mount.
            Some PLC’s can be customized with back planes and functional modules to fit different types of industrial applications.
          </p>

          <p className="card-text">
            PLCs are widely used in a variety of industries because they’re fast, easy to operate and are considered easy to program. PLCs can be programmed in several ways, from ladder logic, which is based on electromechanical relays, to specially adapted programming languages of BASIC and C, to name a few.

          </p>
          <p className="card-text">
            Most PLCs today use one of the following 5 programming languages: Ladder Diagram, Structured Text, Function Block Diagram, Instruction List, or Sequential Function Charts.
          </p>
        </div>
      </div>

      <div className="card m-3" style={{ width: "18rem" }}>
        <h5 className="card-title m-3">What is a Development Board?</h5>
        <img className="card-img-top" src="images/UNO-R3.jpg" alt="Card image cap" />
        <div className="card-body">
          <p className="card-text">
            A microprocessor development board is a printed circuit board containing a microprocessor and the minimal support logic needed for an electronic engineer or any person that wants to become acquainted with the microprocessor on the board and to learn to program it. It also served users of the microprocessor as a method to prototype applications in products.
          </p>

          <p className="card-text">
            Development boards are generally customized by embedded system developers according to development needs. Developers can also research and design a development board by themselves.
          </p>

          <p className="card-text">
          Arduino is the most popular open-source electronics prototyping platform to create interactive electronic applications. 
          The Arduino UNO board contains everything needed to support the microcontroller. The Arduino UNO microcontroller board is very familiar to absolute beginners and experts. It should consider to be one of the first microcontroller based development boards. 
          The Arduino UNO R3 is simplest and the most powerful prototyping environment based on the ATmega328P microcontroller.
          </p>
        </div>
      </div>
    </section>
  )
}
