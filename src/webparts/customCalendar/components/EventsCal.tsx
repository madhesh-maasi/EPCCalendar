import * as React from "react";
import "../assets/Calendar.css";
import * as moment from "moment";
import EventPopup from "./EventPopup";
import { useState } from "react";
import ICS from "./ICS";
export default function EventsCal(props): JSX.Element {
  const [modalopen, setmodalopen] = React.useState(false);
  const [modalItem, setmodalItem] = React.useState([]);
  const [eventTitle, seteventTitle] = React.useState("");
  const [eventstart, seteventstart] = React.useState("");
  const [eventend, seteventend] = React.useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [body, setBody] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const [allDay, setAllDay] = useState(false);
  function modalclose() {
    setmodalopen(false);
  }
  return (
    <div>
      {props.items.length > 0 ? (
        <>
          <div className="clsUpcomingEvents">
            {props.items.map(function (item) {
              const Title = item.subject;
              const StartDate = item.start.dateTime;
              const EndDate = item.end.dateTime;

              return (
                <div
                  className="clsEventsCalendar"
                  onClick={() => {
                    console.log(item);
                    setStartDateTime(item.start.dateTime);
                    setEndDateTime(item.end.dateTime);
                    setAllDay(item.isAllDay);
                    setBody(item.body.content);
                    setLocation(item.location.displayName);
                    setOrganizer(item.organizer.emailAddress.name);
                    setmodalItem(item);
                    setmodalopen(true);
                    seteventTitle(item.subject);
                    seteventstart(item.start.dateTime);
                    seteventend(item.end.dateTime);
                  }}
                >
                  <div className="clsLeftCard">
                    <div className="clsEventMonth">
                      <span className="clsEventMonthName">
                        {moment(StartDate).format("MMM")}{" "}
                      </span>
                      <span className="clsEventDate">
                        {moment(StartDate).format("DD")}
                      </span>
                    </div>
                  </div>
                  <div className="clsRightCard">
                    <div className="clsEventTitle">
                      <span className="clsEventspan">{Title}</span>
                    </div>
                    <div className="clsEventSubTitle">
                      <span className="clsEventspan">
                        {moment(StartDate).format("ddd")}{" "}
                        {moment(StartDate).format("hh:mm a")} -{" "}
                        {moment(EndDate).format("hh:mm a")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <EventPopup
            location={location}
            organizer={organizer}
            modal={modalopen}
            EventTitle={eventTitle}
            EventStart={eventstart}
            EventEnd={eventend}
            closeclick={modalclose}
            body={body}
            startDateTime={startDateTime}
            endDateTime={endDateTime}
            allDay={allDay}
          />
        </>
      ) : (
        <>
          {!props.isloader && <div className="clsNoEvent">No events found</div>}
        </>
      )}
    </div>
  );
}
