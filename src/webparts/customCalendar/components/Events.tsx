import * as React from "react";
import styles from "./Events.module.scss";
const Events = (props) => {
  return (
    <>
      {props.events.length > 0 &&
        props.events.map((event) => {
          return (
            <div className={styles.eventSection}>
              <div className={styles.eventDateSection}>
                {event.start.dateTime}
              </div>
              <div className={styles.eventInfoSection}>
                <button className={styles.eventSubject}>{event.subject}</button>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Events;
