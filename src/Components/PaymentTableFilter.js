import React, { Component } from 'react';

class PaymentTableFilter extends Component {
 
    render () {
        return (
         
           <div className='row'>
            
                <div className='col-sm-12 padding-top-50 padding-left-0 '>
                    <div className='row '>
                        <div className='col-sm-12 font-36'>
                            Payments
                         </div>
                    </div>
                    <div className='row padding-top-15 font-13'>
                        <div className='col-sm-4 padding-bottom-10'>
                            <div className='display-inline-block'>Showing</div>
                            <div className='display-inline-block padding-left-10 '>
                                <select className='border-none outline-none  background-transparent text-color-blue'>
                                    <option>20</option>
                                </select>    
                            </div>
                            <div className='display-inline-block padding-left-10'>
                                out of 500 payments
                            </div>
                        </div>
            
                        <div className='col-sm-4 text-left padding-bottom-10'>
                            <div id='search-div' className='display-inline-block  font-11 text-color-light-black grey-border-bottom width-100 padding-bottom-5'>
                                <i className="fa fa-search" aria-hidden="true"></i> 
                                <input type='text' className='border-none padding-left-10 outline-none background-transparent' id='search-box' name='search_box' placeholder='Search payments' />
                            </div>
                        </div>
            
                        <div className='col-sm-4 padding-bottom-10'>
                            <div className='display-inline-block '>Show</div>
                            <div className='display-inline-block padding-left-10 vertical-align-middle'>
                                <div className='selectdiv '>
                                    <select className='background-transparent grey-border-full padding-5 outline-none '>
                                        <option className='text-color-orderBlack'>All</option>
                                        <option>Reconcilled</option>
                                        <option>Un-reconcilled</option>
                                        <option>Settled</option>
                                        <option>Unsettled</option>
                                    </select>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            
           </div>
        
        )
    }
}

    


export default PaymentTableFilter;