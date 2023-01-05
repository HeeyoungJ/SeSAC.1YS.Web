import React, { Component } from 'react'

export default class ClassState extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         teacher: '정희영',
    //     } 
    // }

    state = {
        teacher: '정희영',
    }
  render() {
    const { teacher } = this.state;
    // 구조분해할당
    return (
      <div>
        <button onClick={() => this.setState({ teacher: 'tetz'})}>영어로!</button>
        <br />
        <span>{teacher}</span>
      </div>
    )
  }
}
