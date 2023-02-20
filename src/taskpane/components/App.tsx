import * as React from "react";
//import { Link, Route, Routes } from "react-router-dom";
import { Fields } from "./FieldList";
import Page from "./Page";
import Header from "./Header";
import Progress from "./Progress";

/* global document, console, require */

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  fieldMessage: string;
  fieldItems: Fields[];
  fieldValues: string[];
  fetch: boolean;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, context: any) {
    super(props, context);
    this.state = {
      fieldMessage: "",
      fieldItems: [],
      fieldValues: [],
      fetch: false,
    };
  }
  /*
  var jsforce = require("jsforce");
  var conn = new jsforce.Connection({
    loginUrl: "https://fuzelogistics1234--sbincloud.sandbox.my.salesforce.com",
  });
  */
  componentDidMount() {
    this.setState({
      fieldMessage: "Salesforces Intergration!",
      fieldItems: [
        {
          icon: "Ribbon",
          primaryText: "Shipment Information",
          placeholder: "hi",
        },
        {
          icon: "Ribbon",
          primaryText: "Shipment Information",
          placeholder: "hi",
        },
        {
          icon: "Ribbon",
          primaryText: "Shipment Information",
          placeholder: "hi",
        },
      ],
      fieldValues: [],
      fetch: false,
    });
  }

  clickHandler = async () => {
    let values = [];
    for (let i = 0; i < this.state.fieldItems.length; i++) {
      let id = "field-" + i;
      let val = document.getElementById(id) as HTMLInputElement | null;
      if (val) {
        values.push(val?.value);
      } else {
        values.push("");
      }
    }
    values.map((item) => console.log(item));
    this.setState({ fieldValues: values });
    this.setState({ fetch: true });
  };

  setFetchFalse = async () => {
    this.setState({ fetch: false });
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }
    return (
      <div className="ms-welcome">
        <Header logo={require("./../../../assets/logo-filled.png")} title={this.props.title} message="Welcome" />
        <Page
          fieldMessage={this.state.fieldMessage}
          fieldItems={this.state.fieldItems}
          fieldValues={this.state.fieldValues}
          fetchBool={this.state.fetch}
          clickFunct={this.state.fetch ? this.setFetchFalse : this.clickHandler}
        />
      </div>
    );
  }
}
