import React from 'react';
import './css/main.css';
import Header from './Components/Header.js';
import SideBar from './Components/SideBar.js';
import Main from './Components/Main.js';

const  App = () =>{
    
        return (
            
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='row  header padding-10 padding-left-50 padding-right-50 '>
                        <Header/>
                    </div> 
                    <div className='row margin-top-5'>
                        <div className='col-sm-12'>
                            <div className='row'>
                                <div className='col-sm-2 background-color-white padding-right-0'>
                                    <SideBar/>
                                </div>
                               
                                <Main/>
                         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        )

}

export default App;
