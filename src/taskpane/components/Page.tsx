import * as React from "react";
import { DefaultButton } from "@fluentui/react";
import FieldList, { Fields } from "./FieldList";
import QuoteList from "./QuoteList";

interface PageProps {
  fieldMessage: string;
  fieldItems: Fields[];
  fieldValues: string[];
  fetchBool: boolean;
  clickFunct: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class Page extends React.Component<PageProps> {
  render() {
    if (this.props.fetchBool) {
      return (
        <QuoteList message={this.props.fieldMessage} items={this.props.fieldValues}>
          <p className="ms-font-l">
            Select quote or <b>Go Back</b>.
          </p>
          <DefaultButton
            className="ms-welcome__action"
            iconProps={{ iconName: "ChevronRight" }}
            onClick={this.props.clickFunct}
          >
            Go Back
          </DefaultButton>
        </QuoteList>
      );
    } else {
      return (
        <FieldList message={this.props.fieldMessage} items={this.props.fieldItems}>
          <p className="ms-font-l">
            Verify the fields, then click <b>Run</b>.
          </p>
          <DefaultButton
            className="ms-welcome__action"
            iconProps={{ iconName: "ChevronRight" }}
            onClick={this.props.clickFunct}
          >
            Run
          </DefaultButton>
        </FieldList>
      );
    }
  }
}
