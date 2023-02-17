import * as React from "react";

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
