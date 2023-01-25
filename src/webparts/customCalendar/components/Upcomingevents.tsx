import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Upcomingevents.module.scss";
let timeZone = "India Standard Time"; //for local time zone
let headers = { Prefer: 'outlook.timezone="' + timeZone + '"' };
import Events from "./Events";
const Upcomingevents = (props) => {
  const [eventsUC, setEventsUC] = useState([]);
  //   Getting All events and filter Upcoming
  const getEvents = async () => {
    let endTime = `${
      new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split("T")[0]
    }T00:00:00.000`;
    let startTime = `${new Date().toISOString().split("T")[0]}T00:00:00.000`;
    console.log(startTime);
    console.log(endTime);

    await props.graph.groups
      .getById(props.groupID)
      .events.configure({ headers })
      .top(999)()
      .then((events) => {
        console.log(events);
        let filteredEvents = events.filter(
          (event) => new Date(event.start.dateTime) <= new Date(startTime)
        );
        console.log(filteredEvents);
        setEventsUC([...filteredEvents]);
      });
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div className={styles.upcomingevents}>
      <Events events={eventsUC} />
    </div>
  );
};
export default Upcomingevents;
