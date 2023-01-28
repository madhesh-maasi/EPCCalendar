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
import "../assets/Calendar.css";
import { Icon } from "office-ui-fabric-react/lib/Icon";
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
const Calendar = (props) => {
  const [isAll, setIsAll] = useState(false);
  const [sync, setSync] = useState(false);
  console.log(props.groupID);
  return (
    <>
      <div className="refreshSection">
        <div onClick={() => setSync(!sync)}>
          <Icon iconName="SyncOccurence" style={{ marginRight: 8 }} />
          Sync Calendar
        </div>
      </div>
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem
          headerText="Upcoming"
          headerButtonProps={{
            "data-order": 1,
            "data-title": "My Files Title",
          }}
        >
          <Upcomingevents
            groupID={props.groupID}
            graph={props.graph}
            pivot={1}
            isAll={isAll}
            sync={sync}
          />
        </PivotItem>
        <PivotItem headerText="Past">
          <Upcomingevents
            groupID={props.groupID}
            graph={props.graph}
            pivot={2}
            isAll={isAll}
            sync={sync}
          />
        </PivotItem>
      </Pivot>
      {
        <div className="calendarFooterSection">
          <div className="expandCollapse" onClick={() => setIsAll(!isAll)}>
            {isAll ? "Collapse" : "Expand"}
          </div>
        </div>
      }
    </>
  );
};
export default Calendar;
