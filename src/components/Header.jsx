import React from 'react'
import {Logo} from '../assets/icon'
import NavbarItem from '../assets/navbarItem'
const Header = () => {
    const navbarList = [
        {
            id:1,
            title:"Home",
            path:"#"
        },
        {
            id:2,
            title:"About",
            path:"#"
        },
        {
            id:3,
            title:"Features",
            path:"#"
        },
        {
            id:4,
            title:"Features",
            path:"#"
        },
    ]
  return (
    <header className='mt-[44px]'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div>
                    <a className='inline-block' href='#'>
                        <Logo/>
                    </a>
                </div>
                <ul className='flex items-center gap-[70px]'>{navbarList.map(item => <NavbarItem key={item.id} item={item}/>)}</ul>
            </div>
        </div>
    </header>
  )
}

export default Header