import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CCHikViewCart.css';

const CCHikViewCart = () => {

    const { hikvisionId } = useParams();
    const [hikvision, setHikvision] = useState({});
    useEffect(() => {
        const url = `https://pacific-temple-58154.herokuapp.com/hikvisions/${hikvisionId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setHikvision(data));
    }, []);

    return (
        <div className='container py-4'>
            <div className='cchikviewcart'>
                <h4 className='ps-2 pt-3'>Checkout</h4>
                <div class="table-responsive px-3">
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{hikvision.model}</td>
                                <td>{hikvision.quantity}</td>
                                <td>{hikvision.price}</td>
                                <td>@mdo</td>
                            </tr>
                            {/* <tr>
                                <th scope="row">Total Price</th>
                                <td></td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                             <tr>
                                <th scope="row">Home Delivery</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>  */}
                        </tbody>
                    </table>

                    <div className='text-end pe-5'>
                        <h5> <span className='pe-5'> Total Price: </span>1000 Tk</h5>
                        <h5>  <span className='pe-5'>Home Delivery:</span> 100 Tk</h5>
                        <h5> <span className='pe-5'> Grand Total: </span>1100 Tk</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CCHikViewCart;