import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
         
            <div className='col-sm-12 text-color-light-black font-14'>
               <div>
                    <span className='text-color-blue bold-text font-24'>
                        TransMonitor
                    </span>
            
                    <nav className="navbar navbar-inverse navbar-static-top mobile-menu" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="about.php">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="contact.php">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    
                    <div id='search-div' className='display-inline-block padding-left-80 font-12 text-color-light-black  desktop-menu'>
                        <i className="fa fa-search" aria-hidden="true"></i> 
                        <input type='text' className='border-none padding-left-10 outline-none' id='search-box' name='search_box' placeholder='Search...' />
                    </div>
                    <div className='float-right desktop-menu'>
                        <div className='display-inline-block padding-right-30'>Support</div>
                        <div className='display-inline-block padding-right-30'>FAQ</div>
                        
                        <div className='display-inline-block' >
                            <img alt='notification-icon' className='padding-right-30' src='images/bell-53.png' />
                            <div className='text-color-white background-color-blue position-absolute margin-left-7 bottom-8 font-10 border-radius-50 padding-left-5 padding-right-5'>8</div>
                        </div>
            
                        <div className='display-inline-block'>
                            <div className='display-inline-block padding-right-10'>
                                <div className='text-right font-10'>
                                    Hello
                                </div>
                                <div className='text-right'>
                                    Oluwaleke Ojo
                                </div>
                            </div>
                            <img alt='profile-pic' className='border-radius-50 vertical-align-top' src='images/IMG-20180413-WA0005.png' />
                        </div>
            
                    </div>
                </div>
            </div>
        
        )
    }
}

    


export default Header;