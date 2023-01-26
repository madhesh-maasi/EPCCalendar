import * as React from "react";
import "../assets/Calendar.css";
import * as moment from "moment";
import EventPopup from "./EventPopup";
export default function EventsCal(props): JSX.Element 
{
  const[modalopen,setmodalopen]=React.useState(false);
  const[modalItem,setmodalItem]=React.useState([]);
  const[eventTitle,seteventTitle]=React.useState("");
  const[eventstart,seteventstart]=React.useState("");
  const[eventend,seteventend]=React.useState("");

    function modalclose()
    {
        setmodalopen(false);
    }
  return (<div>
    {props.items.length>0?<><div className="clsUpcomingEvents">
      {
        props.items.map(function(item)
        {
                const Title=item.subject;
                const StartDate=item.start.dateTime;
                const EndDate=item.end.dateTime;
                
                return(<div className="clsEventsCalendar" onClick={()=>
                    {
                        setmodalItem(item);
                        setmodalopen(true);
                        seteventTitle(item.subject);
                        seteventstart(item.start.dateTime);
                        seteventend(item.end.dateTime);
                }}>
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
      </div><EventPopup modal={modalopen} EventTitle={eventTitle} EventStart={eventstart} EventEnd={eventend} closeclick={modalclose}/></>:<><div className="clsNoEvent">No events found</div></>
    }
      </div>
  );
}
