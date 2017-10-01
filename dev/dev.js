import React from 'react'
import { render } from 'react-dom'
import { ReactSideNav } from '../src/react_side_nav'

render(
  <div className='app'>
    <ReactSideNav />
  </div>,
  document.getElementById('app')
)
