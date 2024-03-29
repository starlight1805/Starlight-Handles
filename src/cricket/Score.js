import { CardActions, Typography, Box } from '@material-ui/core';
import React, { Component } from 'react';
import { Card, CardContent, Grid, Button } from '@material-ui/core';
import imgvs3 from "../pages/Images/logo12.png"
import { getMatchDetail } from './api';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    date: {
        alignItems: 'flex-start',
        marginBottom: 20,
        fontSize: 12
    },
    component: {
        padding: 10,
        backgroundColor: '#3f51b5',
        color: '#fff',
        alignItems: 'flex-start',
        display: 'flex',
    },
    container: {
        display: 'flex'
    },
    matchDetails: {
        marginLeft: 'auto',
        fontSize: 12
    }
};

class Score extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            open: false
        }
    }

    getDetails(id) {
        getMatchDetail(id).then(data => {
            console.log(data);
            this.setState({ detail: this.state.detail = data });
        }).catch(error => console.log(error));
    }

    getScore = (score) => {
        if (!score) return {};
        let numb = score && score.split('/');
        let nummid = numb && numb[1] && numb[1].split('v');
        let ans = {};
        ans.first = numb && nummid && numb[0] && nummid[0] && numb[0].replace(/[^0-9]/g, '') + '/' + nummid[0].replace(/[^0-9]/g, '');
        ans.second = numb && nummid && numb[2] && nummid[1] && nummid[1].replace(/[^0-9]/g, '') + '/' + numb[2].replace(/[^0-9]/g, '');
        console.log(ans.first + '   ' + ans.second);
        return ans;
    }

    getMatchCart = () => {
        let score = this.getScore(this.state.detail.score);
        return (
            <Card style={{ marginTop: 20, width: '80%', height: '30%',color:"#FFFFFF"}}>
                <Box className={this.props.classes.component} style={{backgroundColor:"#0a0a0a"}}>
                    <Typography>{this.props.match["team-1"]} Vs {this.props.match["team-2"]}</Typography>
                    <Button onClick={() => this.getDetails(this.props.match.unique_id)}style={{ marginLeft: 'auto', border: '1px solid #fff',color:'#fff' }} disabled={this.props.match.matchStarted ? false : true} className="showdetailcricketbtn">See Score</Button>
                </Box>
                <CardContent className="cricketcard" style={{height:"30%"}}>
                    <Box className={this.props.classes.container}>
                        <Typography className={this.props.classes.date} style={{fontSize:'1rem'}} >{new Date(this.props.match.dateTimeGMT).toLocaleString()} </Typography>
                        <Typography className={this.props.classes.matchDetails}>{this.props.match.matchStarted ? "Match is started" : "Match not yet started"}</Typography>
                    </Box>
                    <Grid container justify="center" alignItems="center">
                        <Grid>
                            
                            <h4 className="card-title" style={{color:"#FFFFFF"}}>{this.props.match["team-1"]}</h4>
                            <Typography>{score.first}</Typography>
                        </Grid>
                        <Grid>
                            <img style={{ width: 85}} src={imgvs3} alt="VS" />
                        </Grid>
                        <Grid>
                            
                            <h4 className="card-title" style={{color:"#FFFFFF"}}>{this.props.match["team-2"]}</h4>
                            <Typography>{score.second}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" style={{ display: 'block' }}>
                        <Typography>{this.state.detail.score}</Typography>
                        
                    </Grid>
                </CardActions>
                
            </Card>
        );
    }

    render() {
        return (
            <React.Fragment>
                {this.getMatchCart()}
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Score);