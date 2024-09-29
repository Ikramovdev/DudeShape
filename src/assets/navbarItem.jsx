import React from 'react'

const NavbarItem = ({item}) => {
  return (
        <li>
            <a className='font-regular text-[16px] text-[#161616] leading-[20px]' href={item.path}>{item.title}</a>
        </li>
  )
}

export default NavbarItem