import React, { useContext } from 'react'

import cropIcon from '../assets/images/crop.svg'
import { SideBar, Button } from './styledComponent';
import AppContext from '../helper/context';

const Toolbar = () => {
  const { cropEnable, setEnable } = useContext(AppContext);
  const handleClick = () => {
    setEnable(!cropEnable)
  }
  return (
    <SideBar>
      <Button onClick={handleClick}>
        <img src={cropIcon} alt="box" />
      </Button>
    </SideBar>
  )
}

export default Toolbar
