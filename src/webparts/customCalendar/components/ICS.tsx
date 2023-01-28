import * as React from "react";
import ICalendarLink from "react-icalendar-link";

export default function ICS(props) {
  const event = {
    title: props.eventdata.EventTitle,
    description: props.eventdata.EventTitle,
    startTime: props.eventdata.EventStart,
    endTime: props.eventdata.EventEnd,
    location: props.eventdata.location
  };

  return (
    <div className="App">
      <ICalendarLink event={event}>Add to Calendar</ICalendarLink>
    </div>
  );
}