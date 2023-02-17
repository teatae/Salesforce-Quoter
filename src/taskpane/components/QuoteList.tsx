import * as React from "react";

/* global require, console */

/*
var jsforce = require("jsforce");

var conn = new jsforce.Connection({
  loginUrl: "https://fuzelogistics1234--sbincloud.sandbox.my.salesforce.com",
});

conn.login(
  "fuzedev@fuzelogistics.com.sbincloud",
  "Fuze1234$",
  function (err: any, userInfo: { id: string; organizationId: string }) {
    if (err) {
      return console.error(err);
    }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...
  }
);

//var records = [];
conn.query(
  "SELECT Id, Name FROM Account",
  function (err: any, result: { totalSize: string; records: { length: string } }) {
    if (err) {
      return console.error(err);
    }
    console.log("total : " + result.totalSize);
    console.log("fetched : " + result.records.length);
  }
);
*/

export interface QuoteListProps {
  message: string;
  items: string[];
  children: any;
}

export default class QuoteList extends React.Component<QuoteListProps> {
  render() {
    const { message, items, children } = this.props;

    const listItems = items.map((quote: string, index) => (
      <li className="ms-ListItem" key={index}>
        <span className="ms-font-m ms-fontColor-neutralPrimary">{quote}</span>
      </li>
    ));

    return (
      <main className="ms-welcome__main">
        <h2 className="ms-font-xl ms-fontWeight-semilight ms-fontColor-neutralPrimary ms-u-slideUpIn20">{message}</h2>
        <form className="input">
          <ul className="ms-List ms-welcome__features ms-u-slideUpIn10">{listItems}</ul>
        </form>
        {children}
      </main>
    );
  }
}
