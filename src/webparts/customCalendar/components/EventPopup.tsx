import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import * as moment from "moment";
import "../assets/Calendar.css";
import Typography from "@material-ui/core/Typography";
import { AccessAlarm, Clear } from "@material-ui/icons";
import ICS from "./ICS";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

export default function EventPopup(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [reload, setreload] = React.useState(false);
  const handleClose = () => {
    props.closeclick();
  };

  var tz = Intl.DateTimeFormat().resolvedOptions().timeZone

  let Title = props.EventTitle;
  let Date = props.EventStart
    ? moment(props.EventStart).format("MM/DD/YYYY")
    : "";
  let Starttime = props.EventStart
    ? moment(props.EventStart).format("hh:mm a")
    : "";
  let Endtime = props.EventEnd ? moment(props.EventEnd).format("hh:mm a") : "";

  const body = (
    <div className={`${classes.paper} selectedEventModal`}>
      <div className="modalHeader">
        <Typography variant="h5" className="modalTitle">
          Event Details
        </Typography>
        <Clear onClick={handleClose} className="modalCloseIcon" />
      </div>
      <div className="modalDataSection">
        <div className="modalData">
          <div className="modalDataLabel">
            {" "}
            <Typography>Subject:</Typography>
          </div>
          <div className="modalDataAnswer">
            <Typography>{Title}</Typography>
          </div>
        </div>
        <div className="modalData">
          <div className="modalDataLabel">
            {" "}
            <Typography>Organizer:</Typography>
          </div>
          <div className="modalDataAnswer">
            <Typography>{props.organizer}</Typography>
          </div>
        </div>
        <div className="modalData">
          <div className="modalDataLabel">
            {" "}
            <Typography>Start Date</Typography>
          </div>
          <div className="modalDataAnswer">
            <Typography>
              {moment(props.startDateTime).format("MM/DD/YYYY hh:mm a")}
            </Typography>
          </div>
        </div>
        <div className="modalData">
          <div className="modalDataLabel">
            {" "}
            <Typography>End Date</Typography>
          </div>
          <div className="modalDataAnswer">
            <Typography>
              {moment(props.endDateTime).format("MM/DD/YYYY hh:mm a")}
            </Typography>
          </div>
        </div>
        <div className="modalData">
        <div className="modalDataLabel">
            {" "}
            <Typography>Time Zone</Typography>
          </div>
          <div className="modalDataAnswer">
            <Typography>
              {tz}
            </Typography>
          </div>
        </div>
        {props.allDay && (
          <div className="modalData">
            <div className="modalDataLabel">
              {" "}
              <Typography>All Day</Typography>
            </div>
            <div className="modalDataAnswer">
              <Typography>{`${props.allDay}`}</Typography>
            </div>
          </div>
        )}
        {props.location !== "" && (
          <div className="modalData">
            <div className="modalDataLabel">
              {" "}
              <Typography>Location</Typography>
            </div>
            <div className="modalDataAnswer">
              <Typography>{props.location}</Typography>
            </div>
          </div>
        )}
        {props.body !== "" && (
          <div className="modalData description">
            <div className="modalDataLabel">
              {" "}
              <Typography>Description</Typography>
            </div>
            <div className="modalDataAnswer">
              <div
                dangerouslySetInnerHTML={{
                  __html: props.body,
                }}
              />
            </div>
          </div>
        )}
      </div>
      <ICS eventdata={props}/>
      {/* <a
        href={
          "https://graph.microsoft.com/v1.0/groups/634c5ebd-3477-427e-9842-1fc9b0f978b0/events/AAMkAGE4Mzc1MWQxLWEwZGEtNDRkMi1iYzYwLWMwNGJhMTk4MmI0YgBGAAAAAABULBCDu9X_TJM-vh04nvz1BwDdgDgyTW65SJsjy0j7nJIsAAAAAAENAADdgDgyTW65SJsjy0j7nJIsAADTNn5nAAA=?$expand=attachments"
        }
      >
        Click here
      </a> */}
    </div>
  );

  return (
    <div>
      <Modal
        className="selectedEventModalOverlay"
        open={props.modal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
