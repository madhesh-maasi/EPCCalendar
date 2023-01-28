import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Upcomingevents.module.scss";
import { graph } from "@pnp/graph/presets/all";
let timeZone = "India Standard Time"; //for local time zone
let headers = { Prefer: 'outlook.timezone="' + timeZone + '"' };
import Events from "./Events";
import { EventsNew } from "./EventsNew";
import EventsCal from "./EventsCal";
import * as moment from "moment";
import { Spinner } from "@fluentui/react/lib/Spinner";
let AllEvents = [];

const Upcomingevents = (props) => {
  const [eventsUC, setEventsUC] = useState([]);
  const [isloader, setIsLoader] = useState(true);
  //   Getting All events and filter Upcoming
  const getEvents = async () => {
    let startdate = moment().format("YYYY-MM-DD");
    let enddate = moment().format("YYYY-MM-DD");
    if (props.pivot == 1) {
      startdate = moment().format("YYYY-MM-DD");
      enddate = moment().add(30, "days").format("YYYY-MM-DD"); //one month data from today
    } else if (props.pivot == 2) {
      enddate = moment().format("YYYY-MM-DD");
      startdate = moment().subtract(90, "days").format("YYYY-MM-DD"); //three month before data from today.
    }
    await graph.groups
      .getById(props.groupID)
      .getCalendarView(new Date(startdate), new Date(enddate))
      .then((events) => {
        events = props.isAll ? events : events.filter((evt, i) => i <= 2);
        if (events.length > 0) setEventsUC([...events]);
        else setEventsUC([]);
        setIsLoader(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsLoader(true);
    getEvents();
  }, [props.isAll, props.sync]);
  return (
    <div className={styles.EventSection}>
      {isloader ? (
        <Spinner label="Getting data from calendar..." />
      ) : (
        <EventsCal items={eventsUC} isloader={isloader} />
      )}
      {/* <Events events={eventsUC} /> */}
    </div>
  );
};
export default Upcomingevents;
