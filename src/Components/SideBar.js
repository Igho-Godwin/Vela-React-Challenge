import React, { Component } from 'react'

import SideBarMenu from './SideBarMenu.js';

class SideBar extends Component {
 
    render () {
        return (
         
            <div className='background-color-white padding-top-50 padding-bottom-50 padding-top-25 height-150 padding-left-0 padding-right-0 padding-bottom-20'>
               <div className='padding-left-20'>
                   <button className='background-color-green text-color-white background-color-green border-none padding-top-5 padding-bottom-5 font-12 padding-left-30 padding-right-30 border-radius-20  '>GENERATE INVOICE</button>
               </div>
               <div className='text-color-blackShade-sidebar'>
            
                    <div className='font-11 padding-top-30'>
                        <div className='padding-bottom-30 padding-left-30'>
                            Main
                        </div>
                        <div className='font-11  menu-active padding-top-7 padding-bottom-7 padding-left-25'>
                            <img alt='overview-icon' className='padding-right-10' src='images/overview-icon.png'/>
                            <span className=''>Overview</span>
                        </div>
                    </div>
            
                    <SideBarMenu />
            
                    <div className='font-11 padding-top-30'>
            
                        <div className='padding-left-30'>
                            Orders
                        </div>
            
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='all-orders-icon' className='padding-right-10' src='images/order.png'/>
                            &nbsp;
                            <span className=''>All Orders</span>
                        </div>
            
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='pending-orders-icon' className='padding-right-10' src='images/pending-orders-icon.png'/>
                            <span className=''>Pending Orders</span>
                        </div>
            
                        <div className='font-11 padding-top-10 padding-left-30'>
                            <img alt='reconcilled-orders' className='padding-right-10' src='images/reconcilled-orders.png'/>
                            <span className=''>Reconcilled Orders</span>
                        </div>
            
                    </div>
            
                    
                    <div className='font-11 padding-top-30'>
            
                        <div className='font-11 padding-left-30'>
                            <img alt='merchant-profile' className='padding-right-10' src='images/merchant-profile.png'/>
                            &nbsp;
                            <span className=''>Merchant Profile</span>
                        </div>
            
                    </div>
            
                    
            
               </div>
            </div>
        
        )
    }
}

    


export default SideBar;