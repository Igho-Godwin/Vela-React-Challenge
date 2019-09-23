import React, { Component } from 'react'

import TransactionDisplayBox from './TransactionDisplayBox.js';

import PaymentTable from './PaymentTable.js';

import PaymentTableFilter from './PaymentTableFilter.js';

class Main extends Component {
 
    render () {
        return (
         
            <div className='col-sm-10 padding-left-40 padding-top-50 '>
            
                <div className='row'>
            
                    <div className='col-sm-6 padding-bottom-10'>
                        
                        <div className='row'>
            
                            <div className='col-sm-6  flex-45 background-color-white'>
                                <TransactionDisplayBox title='Daily Transaction Volume' amount={2342} />
                            </div>
            
                            <div className='col-sm-6 background-color-white flex-45 margin-left-10'>
                                
                                <TransactionDisplayBox title='Daily Transaction Value' amount={4000000} />
            
                            </div>
            
                        </div>
            
                    </div>
            
                    <div className='col-sm-6 padding-bottom-10'>
            
                        <div className='row'>
            
                            <div className='col-sm-6  flex-45 background-color-white'>
                            <TransactionDisplayBox title='Daily Transaction Volume' amount={2342} />
                        </div>
            
                        <div className='col-sm-6 background-color-white flex-45 margin-left-10'>
                                
                            <TransactionDisplayBox title='Daily Transaction Value' amount={4000000} />
            
                        </div>
            
                    </div>
            
                  </div>
                
                </div>
        
                <div className='row  padding-top-10 padding-right-28'>
                    <div className='col-sm-7 padding-left-0 padding-right-5 padding-bottom-10 '>
            
                        <div className='background-color-white display-block   padding-left-20 padding-top-20 padding-right-20 padding-bottom-30'>
                            <div className=' font-18 bold-text display-inline-block'>
                                Today 5, Aug 2018
                            </div>
            
                            <div className='display-inline-block pull-right'>
                                <div className='selectdiv2 display-inline-block padding-right-40 '>
                                    <select className='background-transparent grey-border-full padding-5 outline-none table-head-text-color '>
                                        <option className='text-color-orderBlack'>
                                            1 Jan - 1 Jun
                                        </option>
                                    </select>
                                 </div>
                                 <div className='display-inline-block vertical-align-top '>
                                    <div className='display-inline-block padding-right-10'>
                                        <button className='grey-gradient  grey-border-full border-radius-4'>
                                            <img alt='less than arrow' src='images/less-arrow.png'/>
                                        </button>
                                    </div>
                                    <div className='display-inline-block'>
                                        <button className='grey-gradient grey-border-full border-radius-4'> 
                                            <img alt='greater than arrow' src='images/greater-than-arrow.png'/>
                                        </button>
                                     </div>
            
                                 </div>
                            </div>
            
                        </div>
            
                        <div id='chart_div' className='background-color-white display-block'></div>
                    </div>
                    <div className='col-sm-5 padding-left-0' >
                        <div className='background-color-white padding-left-20 padding-top-15  padding-bottom-15 '>
                            <div className='text-color-orderBlack font-14 bold-text '>
                                Orders
                            </div>
                            <div className='width-85 padding-top-7 line-height-0'>
                                <div className='display-inline-block background-color-green min-height-4 max-height-4 bar-border-radius-left width-80'>&nbsp;</div>
                                <div className='display-inline-block background-color-orange min-height-4 max-height-4 bar-border-radius-right width-20'>&nbsp;</div>
                            </div>
            
                            <div className='font-14 text-color-orderBlack padding-top-7 '>
                                <div>
                                    Pending Orders: <span className='text-color-light-orange bold-text'>20</span>
                                </div>
                                <div className='padding-top-7'>
                                    Reconcilled Orders: <span className='text-color-green bold-text'>80</span>
                                </div>
                                <div className='padding-top-7'>
                                    Total Orders: <span className='text-color-blue bold-text'>100</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='padding-top-5'>
                            <div className='background-color-white padding-left-20 padding-top-15  padding-bottom-15  '>
                                <div className='text-color-orderBlack font-14 bold-text '>
                                    Payments
                                </div>
                                <div className='width-85 padding-top-7 line-height-0'>
                                    <div className='display-inline-block background-color-green min-height-4 max-height-4 bar-border-radius-left width-80'>&nbsp;</div>
                                    <div className='display-inline-block background-color-orange min-height-4 max-height-4 bar-border-radius-right width-20'>&nbsp;</div>
                                </div>
            
                                <div className='font-14 text-color-orderBlack padding-top-7 '>
                                    <div>
                                        Un-reconcilled Payments: <span className='text-color-light-orange bold-text'>20</span>
                                    </div>
                                    <div className='padding-top-7'>
                                        Reconcilled Payments: <span className='text-color-green bold-text'>80</span>
                                    </div>
                                    <div className='padding-top-7'>
                                        Total Payments: <span className='text-color-blue bold-text'>100</span>
                                    </div>
                                </div>
                            </div>
                          </div>
                    </div>
                </div>
                <PaymentTableFilter />
                <PaymentTable />
            </div>
         
        
        )
    }
}

    


export default Main;