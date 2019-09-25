import React from 'react';

import PropTypes from 'prop-types';


const TransactionDisplayBox = (props) => { 
    
        return(     
        
                         <div className='padding-top-10 padding-bottom-10'>
                                    
                                <div className='display-inline-block' >
                                        
                                    <div className='font-10 daily-transaction-text-color-blackShade'>
                                            {props.title}
                                    </div>
                                    
                                    <div className='font-18 daily-volume-textColor-blackShade'>
                                        {new Intl.NumberFormat().format(props.amount)}
                                    </div>
                                </div>
            
                                <div className='display-inline-block padding-left-20' >
                                    <img  src='images/gradient.png' className='vertical-align-baseline' alt='Gradient' />
                                </div>
            
                            </div>
            
                      
            
                      
            
        
        )
    }
     


// Checks Prop Values
TransactionDisplayBox.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

    


export default TransactionDisplayBox;