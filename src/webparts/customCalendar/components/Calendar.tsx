import * as React from "react";
import { useState, useEffect } from "react";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";
import Upcomingevents from "./Upcomingevents";
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
const Calendar = (props) => {
  console.log(props.groupID);
  return (
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem
        headerText="Upcoming"
        headerButtonProps={{
          "data-order": 1,
          "data-title": "My Files Title",
        }}
      >
        <Upcomingevents groupID={props.groupID} graph={props.graph} pivot={1}/>
      </PivotItem>
      <PivotItem headerText="Past">
      <Upcomingevents groupID={props.groupID} graph={props.graph} pivot={2}/>
      </PivotItem>
    </Pivot>
  );
};
export default Calendar;
