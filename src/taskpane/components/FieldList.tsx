import * as React from "react";

export interface Fields {
  icon: string;
  primaryText: string;
  placeholder: string;
}

export interface FieldListProps {
  message: string;
  items: Fields[];
  children: any;
}

export default class FieldList extends React.Component<FieldListProps> {
  render() {
    const { message, items, children } = this.props;

    const listItems = items.map((field: Fields, index) => (
      <li className="ms-ListItem" key={index}>
        <i className={`ms-Icon ms-Icon--${field.icon}`}></i>
        <span className="ms-font-m ms-fontColor-neutralPrimary">{field.primaryText}</span>
        <input id={`field-${index}`} type="text" placeholder={`Enter ${field.placeholder}`} />
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
