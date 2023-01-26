import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import * as moment from "moment";

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
    position: 'absolute',
    width: "80%",
    top: "50% !important",
    left: "50% !important",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EventPopup(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const[reload,setreload]=React.useState(false);
  const handleClose = () => {
    props.closeclick();
  };


  let Title=props.EventTitle;
  let Date=props.EventStart?moment(props.EventStart).format("DD/MM/YYYY"):"";
  let Starttime=props.EventStart?moment(props.EventStart).format("hh:mm a"):"";
  let Endtime=props.EventEnd?moment(props.EventEnd).format("hh:mm a"):"";

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Event Details</h2>
      <div>{Title}</div>
      <div>{Date} {Starttime} - {Endtime}</div>
      <a href={"https://chandrudemo.sharepoint.com/sites/kalidevsite/_vti_bin/owssvr.dll?CS=109&Cmd=Display&List={LIST_GUID}&CacheControl=1&ID=EVENT_ID&Using=eventics"}>Click here</a>
    </div>
  );

  return (
    <div>
      <Modal
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
