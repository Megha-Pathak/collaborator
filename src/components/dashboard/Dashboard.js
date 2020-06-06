import React, { Component } from 'react'
import Notifications from './Notification'
import ProjectList from '../project/ProjectList'
class Dashboard extends Component {
  
  render() {
    return (
      <div classname = "dashboard container">
        <div classname = "row">
        <div className="col s12 m6">
            <ProjectList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard