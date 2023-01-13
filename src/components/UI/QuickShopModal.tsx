import { useState, useEffect } from 'react';

type PropType = {
    type: string,
    price: number,
    manufacturer: string,
}
export const QuickShopModal = ({ price, manufacturer, type }: PropType) => {

    
    return (
        <>
            <button type="button" className="btn rounded btn-info" data-bs-toggle="modal" data-bs-target={`#exampleModalCenter${type}`}>
                Quick shop
            </button>

            <div className="modal fade" id={`exampleModalCenter${type}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Checkout</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="product-image m-3">
                                <img src={`images/${type}.jpg`} alt="product-image" width={100} />
                            </div>
                            <div className="product-data mt-2">
                                <h6>{type}</h6>
                                <p>Price: ${price}</p>
                                <small>By: {manufacturer}</small>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-danger rounded" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-sm rounded" data-bs-dismiss="modal" style={{ backgroundColor: "#013D29", color: "#fff" }}>Pay</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
