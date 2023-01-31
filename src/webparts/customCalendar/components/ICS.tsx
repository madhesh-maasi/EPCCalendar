import * as React from "react";
import ICalendarLink from "react-icalendar-link";
import "./ICS.scss";
import { Icon } from "@fluentui/react";
export default function ICS(props) {
  const event = {
    title: props.eventdata.EventTitle,
    description: props.eventdata.EventTitle,
    startTime: props.eventdata.EventStart,
    endTime: props.eventdata.EventEnd,
    location: props.eventdata.location,
  };

  return (
    <div className="App">
      <Icon iconName="Add" style={{ marginRight: 6 }} />
      <ICalendarLink event={event}>Add to Calendar</ICalendarLink>
    </div>
  );
}
