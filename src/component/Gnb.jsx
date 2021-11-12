import { useRouter } from 'next/dist/client/router';
import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default function Gnb() {
  const router = useRouter();
  const activeItem = router.pathname === '/' ? 'home' : router.pathname.replace('/','');
  
  const goLink = (e, data)=>{
      const link = data.link;
      router.push(link);
  }
  return (
     <Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          link='/'
          onClick={goLink}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          link='/about'
          onClick={goLink}
        />
      </Menu>
  )
}