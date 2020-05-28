import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import cirVitae from '../img/cv-icon.svg'
import IconLink from './IconLink'

const LinksMenu = () => {

    return (
        <div className="navbar-start has-text-centered">
            <IconLink linkName="github" linkUrl="https://github.com/Olipear" icon={github} />
        </div>
    )
}

export default LinksMenu
