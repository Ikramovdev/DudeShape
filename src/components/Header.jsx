import React from 'react'
import {Logo, MoreIcon, SearchIcon} from '../assets/icon'
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
    <header className='my-[40px] sm:my-0 sm:mt-[44px] sm:mb-[26px]'>
        <div className='container'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[217px]'>
                    <a className='inline-block' href='#'>
                        <Logo/>
                    </a>
                    <ul className='hidden md:flex items-center gap-[70px]'>{navbarList.map(item => <NavbarItem key={item.id} item={item}/>)}</ul>
                </div>
                <div className='flex items-center gap-[30px]'>
                    <button className='hidden sm:block hover:scale-[1.3] duration-300'><SearchIcon/></button>
                    <button className='hover:scale-[1.3] duration-300'><MoreIcon/></button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header