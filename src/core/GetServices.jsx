import React, { Component } from "react";

import * as Constants from "../common/constants.js";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentType: "Flavours",
      services: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(Constants.SERVICES_URL)
      .then(res => res.json())
      .then(res2 =>
        this.setState({
          services: res2.data,
          isLoading: false
        })
      );
  }

  render() {
    const { currentType, services, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {services
          .filter(el => el.serviceTypeName == currentType)
          .map(elem => elem.subTenantServices.map(e => <li>{e.name}</li>))}
      </ul>
    );
  }
}
export default Services;