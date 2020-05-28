import React from 'react'
import logo from '../img/logo.svg'
import LinksMenu from './LinksMenu'

const Splash = ({SplashInfo}) => {

    return (
        <div className="splash">
            <img src={logo} alt="olipear" style={{ width: '20em' }} />
            <LinksMenu/>
            <div>
                {SplashInfo}
            </div>
            
        </div>
      )
}

export default Splash
