import * as React from "react";
import ICalendarLink from "react-icalendar-link";
import "./ICS.scss";
import { Icon } from "@fluentui/react";
import * as moment from "moment";
export default function ICS(props) {

  let startUTCDate:any = moment(props.eventdata.EventStart).utc().format();
  let UTCStartTime=moment(props.eventdata.EventStart).utc(startUTCDate).local().format();

  let endUTCDate:any = moment(props.eventdata.EventEndte).utc().format();
  let UTCEndTime=moment(props.eventdata.EventEnd).utc(endUTCDate).local().format();

  const event = {
    title: props.eventdata.EventTitle,
    description: props.eventdata.EventTitle,
    startTime: UTCStartTime,
    endTime: UTCEndTime,
    location: props.eventdata.location,
  };
 console.log(event);
  return (
    <div className="App">
      <Icon iconName="Add" style={{ marginRight: 6 }} />
      <ICalendarLink event={event}>Add to Calendar</ICalendarLink>
    </div>
  );
}
