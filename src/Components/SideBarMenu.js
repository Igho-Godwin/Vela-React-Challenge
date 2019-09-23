import React, { Component } from 'react';


class SideBarMenu extends Component {
 
    render () {
        return (
         
            <div className='font-11 padding-top-50'>
            
                        <div className='padding-left-30'>
                            Payments
                        </div>
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='all-payments-icon' className='padding-right-10' src='images/all-payments-icon.png'/>
                            <span className=''>All Payments</span>
                        </div>
            
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='reconcilled-payments-icon' className='padding-right-10' src='images/reconcilled-payments-icon.png'/>
                            <span className=''>Reconcilled Payments</span>
                        </div>
            
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='un-reconcilled-payments-icon' className='padding-right-10' src='images/un-reconcilled-payments-icon.png'/>
                            <span className=''>Un - Reconcilled Payments</span>
                        </div>
            
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='manual-settlement' className='padding-right-10' src='images/manual-settlement.png'/>
                            <span className=''>Manual Settlement</span>
                        </div>
            
                    </div>
        
        )
    }
}

    


export default SideBarMenu;