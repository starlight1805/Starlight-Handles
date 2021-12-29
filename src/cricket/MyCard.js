import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import imgvs from "../pages/Images/logo10.jpg"
import imgvs2 from "../pages/Images/logo11.png"
import imgvs3 from "../pages/Images/logo12.png"

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
import { getMatchDetail } from "./api";

const MyCard = ({ match }) => {
  const [detail, setDatail] = useState({});
  const [open, setOpen] = useState(false);

  const getMatchCard = () => (
    <div>
      <Card
        style={{
            
          background: match.matchStarted ? "#e2e2e2" : "",
          marginTop: 45,
        }}
      >
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4} className="cricketcard">
            <Grid item>
              <h4 className="card-title" style={{color:"#FFFFFF"}}>{match["team-1"]}</h4>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src={imgvs3}
                alt="vs"
              />
            </Grid>
            <Grid item>
            <h4 className="card-title" style={{color:"#FFFFFF"}}>{match["team-2"]}</h4>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Grid container justify="center">
            <Button
              onClick={() => {
                showDetailBtnClicked(match["unique_id"]);
              }}
              className="showdetailcricketbtn"
            >
              Details
            </Button>
            <Button
              style={{ marginLeft: 5 }}
              className="showdetailcricketbtn"
            >
              Starting time {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    </div>
  );

  const showDetailBtnClicked = (id) => {
    getMatchDetail(id)
      .then((data) => {
        console.log(data);
        setDatail(data);
        handleClickOpen();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {match.type == "Twenty20" ? getMatchCard() : ""}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Match Detail..."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography>{detail.stat}</Typography>
            <Typography>
              Match
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {detail.matchStarted ? "Started" : "Still not started"}
              </span>
            </Typography>
            <Typography>
              Score
              <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
                {" "}
                {detail.score}
              </span>
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCard;