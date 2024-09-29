import React from 'react'

const NavbarItem = ({item}) => {
  return (
        <li>
            <a className='font-regular text-[16px] text-[#161616] leading-[20px] hover:text-[#154444] duration-300' href={item.path}>{item.title}</a>
        </li>
  )
}

export default NavbarItem


