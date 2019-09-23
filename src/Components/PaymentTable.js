import React, { Component } from 'react';

class PaymentTable extends Component {
 
    render () {
        return (
         
           <div className='row'>
            
                <div className='col-sm-12 padding-top-10 padding-bottom-50 padding-right-45 padding-left-0 max-width-100 overflow-auto  '>
            
                    <table id="payment-table" className="table width-100 font-13">
                        <thead >
                            <tr className='table-head-text-color background-grey'>
                                <th className='width-50'>Item Type</th>
                                <th>Price</th>
                                <th>Transaction No</th>
                                <th>Time</th>
                                <th></th>
                            </tr>
                         </thead>
            
                         <tbody>
            
                            <tr className='background-color-white '>
                                <td>
                                    <div className='padding-top-5 padding-bottom-5'>
                                        <div className='display-inline-block'><img  alt='default-Payment' src='images/default-image.jpg' className='border-radius-50'  height='36' /></div>
                                        <div className='display-inline-block padding-left-20'>
                                            Apple Mac Book 15" 250 SSD 12GB
                                        </div>
                                    </div>
                                </td>
                                <td className='table-head-text-color'>$73430</td>
                                <td className='table-head-text-color'>123456790</td>
                                <td className='table-head-text-color'>12:30</td>
                                <td>
                                    <button className='border-radius-20 background-transparent font-12 padding-right-28 padding-left-28 padding-bottom-5 padding-top-5 grey-border-button'>
                                        <img alt='pending-btn-icon' src='images/pending-icon.png' />
                                        &nbsp;
                                        Pending
                                    </button>
                                    <div className='display-inline-block padding-left-20'>
                                        <img alt='arrow icon'  src='images/down-arrow.png' />
                                    </div>
                                 </td>
                            </tr>
            
                             <tr className='background-color-white margin-top-5'>
                                <td>
                                    <div className='padding-top-5 padding-bottom-5'>
                                        <div className='display-inline-block'><img src='images/default-image.jpg' alt='def-img' className='border-radius-50'  height='36' /></div>
                                        <div className='display-inline-block padding-left-20'>
                                            Apple Mac Book 15" 250 SSD 12GB
                                        </div>
                                    </div>
                                </td>
                                <td className='table-head-text-color'>$73430</td>
                                <td className='table-head-text-color'>123456790</td>
                                <td className='table-head-text-color'>12:30</td>
                                <td>
                                    <button className='border-radius-20 background-transparent font-12 padding-right-20 padding-left-20 padding-bottom-5 padding-top-5 grey-border-button'>
                                        <img alt='reconcilled-indicator' src='images/reconcilled-indicator.png' />
                                        &nbsp;
                                        Reconcilled
                                    </button>
                                    <div className='display-inline-block padding-left-20'>
                                        <img alt='arrow icon'  src='images/down-arrow.png' />
                                    </div>
                                 </td>
                            </tr>
            
                         </tbody>
            
                    </table>
                
                </div>
            
           </div>
        
        )
    }
}

    


export default PaymentTable;