import { Component } from "react";

class MyComponent extends Component {
  // 마운트 되었을때 동작
  componentDidMount() {
    console.log("마운트 되었어요🌽");
  }

  //   업데이트 되었을때 동작
  componentDidUpdate() {
    console.log("업데이트 되었어요🥬");
  }

  //   언마운트 되기 직전 동작
  componentWillUnmount() {
    console.log("언마운트 되었어요🪄");
  }

  render() {
    return <p>MyComponent {this.props.number} </p>;
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {/*
        
        - visible state 값에 따라서 MyComponent 가 생성 및 제거됨
        
        */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
