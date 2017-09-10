import React, { Component } from 'react'

import {NodeComponent} from './components/node_component/component'

export default class Root extends Component {
  render () {
    return (
      <div className='demo-container'>
        <NodeComponent />
      </div>
    )
  }
}
