import React, { Component } from 'react'
import Button from './Button'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>This is a class component</h2>

        <Button  props={"class button"}/>
      </div>
    )
  }
}
