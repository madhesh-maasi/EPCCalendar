import * as React from "react";
import "../assets/Calendar.css";
import * as moment from "moment"
export default function EventsCal(props): JSX.Element {
  return (<div>
    {props.items.length>0?<><div className="clsUpcomingEvents">
      {
        props.items.map(function(item)
        {
                const Title=item.subject;
                const StartDate=item.start.dateTime;
                const EndDate=item.end.dateTime;
                
                return(<div className="clsEventsCalendar">
                <div
                  className="clsLeftCard"
                >
                  <div className="clsEventMonth">
                    <b><span className="clsEventspan">{moment(StartDate).format("MMMM")} </span></b>
                    <b><span className="clsEventspan">{moment(StartDate).format("DD")}</span></b>
                  </div>
                </div>
                <div className="clsRightCard">
                <div className="clsEventTitle">
                  <b><span
                    className="clsEventspan"
                  >
                   {Title}
                  </span></b>
                  </div>
                  <div className="clsEventTitle">
                  <b><span className="clsEventspan">
                      {moment(StartDate).format("dddd")} {moment(StartDate).format("hh:mm a")} - {moment(EndDate).format("hh:mm a")}
                    </span></b>
                  </div>
                </div></div>
              )
        })
      }
      </div></>:<><div className="clsNoEvent">No events found</div></>
    }
      </div>
  );
}
