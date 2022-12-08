type Typeprop = {
    passwStrongness: number;
}
export const ProgressBarPassword = ({ passwStrongness }: Typeprop): JSX.Element => {

    return (
        <div className="progress my-2">
            {
                passwStrongness < 25 &&
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${passwStrongness}%` }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                    Weak
                </div>
            }
            {
                passwStrongness > 25 && passwStrongness < 75 &&
                <div className="progress-bar bg-info" role="progressbar" style={{ width: `${passwStrongness}%` }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                    Mid 
                </div>
            }
            {
                passwStrongness > 75 &&
                <div className="progress-bar bg-success" role="progressbar" style={{ width: `${passwStrongness}%` }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                    Strong 
                </div>
            }

        </div>
    )
}
