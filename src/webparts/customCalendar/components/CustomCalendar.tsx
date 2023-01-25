import * as React from "react";
import styles from "./CustomCalendar.module.scss";
import { ICustomCalendarProps } from "./ICustomCalendarProps";
import { escape } from "@microsoft/sp-lodash-subset";
import "../../../ExternalRef/CSS/Style.css";
import Calendar from "./Calendar";
export default class CustomCalendar extends React.Component<
  ICustomCalendarProps,
  {}
> {
  public render(): React.ReactElement<ICustomCalendarProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      groupID,
    } = this.props;

    return (
      <Calendar groupID={this.props.groupID} graph={this.props.graphContext} />
    );
  }
}
