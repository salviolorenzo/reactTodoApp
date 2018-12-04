import React, { Component } from "react";
import OWKey from "./config";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=${OWKey}`
    )
      .then(r => r.json)
      .then(r => console.log);
  }

  render() {
    return <p>hey</p>;
  }
}

export default Weather;
