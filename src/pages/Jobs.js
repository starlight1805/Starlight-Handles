import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/Jobs.css';
import {Container} from 'react-bootstrap';
import { ListItem} from "@material-ui/core";
import moment from 'moment'
import MsgFloatingbtn from '../components/MsgFloatingbtn';

function Jobs() {
  var jobarray=[];
  const [statearray, setStateArray] = useState(jobarray);
  const [jobcount, setJobCount] = useState(10); 
  const [searchvalue,setSearchValue]=useState("");
  const [loadstate, setLoadState] = useState(true);
  const options = {
    method: 'GET',
    url: `https://remotive.io/api/remote-jobs?limit=${jobcount}`
  };
  const options2 = {
    method: 'GET',
    url: `https://remotive.io/api/remote-jobs?search=${searchvalue}`
  };

  const getJob=async ()=>{
    if(searchvalue==""){
      await axios.request(options).then(function (response) {
          jobarray=response.data.jobs;
          setLoadState(false);
          setStateArray(jobarray);
      }).catch(function (error) {
          console.error(error);
      });
    }
    else{
      await axios.request(options2).then(function (response) {
        jobarray=response.data.jobs;
        setStateArray(jobarray);
    }).catch(function (error) {
        console.error(error);
    });
    }
  }
  const handlesearchvalue=(event)=>{
    setSearchValue(event.target.value);
  }
  return (
    <>
    <MsgFloatingbtn/>
    <Container className='jobcontainer'>
      <div className='btnsearch'>
        <textarea className='searchbar' placeholder="Search" value={searchvalue} onChange={handlesearchvalue}></textarea>
        <button onClick={getJob} className="getjobbtn">GET JOBS</button>
      </div>
        {/*<section className='section'><span className='loader'></span></section>*/}
        {loadstate?<div><span className='loader' style={{marginLeft:'50%',marginTop:'50px',marginBottom:'50px'}}></span></div>:''}
      {statearray.map((localState, index) => (<ListItem>
        <div className="jobcard text-center">
          <div className="overflow">
            <div className='jobcard-body text-dark'>
              <img  className='jobimg' src={localState.company_logo_url||'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAADHCAMAAAAOPR4GAAAAzFBMVEXl+v8ghLUgUojn/P+T0Nzr///o/f8cgrTV7PUgVIkgcqUgUYZzl7h6uNXY8vsjh7e94vA1kL3M5fAXTIQ7a5nU8PlJm8RTosi10OFep8zH4O1UfKZgh62l0uaBo8GUx99rj7K61eRKdaCnxNiBob6My9oqXI+IqsUwfKygvtSWtc19tcqj2OM2ZZVirsx3m7uBw9YARoBajK9IeaNxuNBrn7yDvtmy2+tusdGXx95Yg6vD6fGx3uh1qcOiyttfrMp5r8Zek7NLiLIAPnwNAgSbAAASIUlEQVR4nO2dC3uiOBeAkRSEYqEStBSp5WKD0GGt004vdvab2///T99JQrjYdtZOu2tRzj7PbEWU8ybnlhCiJHXSSSeddNJJJ5100kknnXTSSSeddNJJJ+8hSNPQtnXYoiDb22d81Qv3GV8J3b3Gd/cbP473GV9N9xs/S9Vt67BFUZN0n3sfTbNtq7BNQYO9xpeCRNpn6/cTc3/xkbSa7jX+ZLbX+NFij0e8SHIGe42fB3uNT/YZXxrp/vG2ddiWIOnxk3x98WhuW5HtyOjrwQW+vjr4tI8NYD5+Oji4wtHVwcHB19G2tfmPBT1+BeyDK+czxT84CLet0H8r6Ogb4764oP9eRtO9Gvkg6bQ/vGHoBxeXnwle7FXtaz6e9vrWCW2Aqy+OLss/9sf9IeF9Pbg5sfq94cnV39dExvL1JcT/PbF/8xOz+ZuxBRaQY0yuv1A3uPjffhSAx9+41199G1tzIjs/Lln4++zvx/2+uyEYPTOAq1PL+XxJ2+LqSyRH4T6Y/+hiCF7P897BJYO/+Psawl/0sPvlHxR7V4Df6w//4g3A7J5gGfBp/NvlBEgHOWDoFB+i3rgIAT8cmQqOLne7/kXmVxr0L75xfpr4we4jndPnPP5fettW898SdHdadDgk/T5vgBWHl/PPtO8vvl877rbV/LcEnQ2t06sLkfSpzDk9WX2/YEEgx7m7q/Gf4vfGPORd/TWGso/j69GXK5784FX+sKvePzof359YRci7uDqBEEDxc1b3QPIjWPdX5PLTToa/0ddPN+Pj0XnVADcnwzkpnP7ys471SWZmBF5+ety5BqAp72Z8p0rHt8N+UfVc3AxXf1+I5BdNPaQkhJXAOzUBhtCITe7cDE/vJNW8u7dE1cMDISS/pb4ITcWMI44PBcDOjAB5tXPACh7r/pg2wEmvN/yLT3ccfF+B0weupEquT7BzKYrBXQkBBXyR8IdHx5JinkMD0BDA5nr0VWwqUrggMPgt6eGt/+1CCWyei34uEv7JwwhBCBj3oOz74kDeS2wkeUkk69dfyoEAjQe7cAMQmUd8Wqug+gsi3+kZCwFD6yeR80UoKVq60jHPgEU7fbkm8o7g9/vFCJ83wDcaAu5MFdpljkkKZ8Q+wH+uwX+nI+CdwYfydlwNcCHhQ/V3e2yeA34eSuE0l8n198pDoPilpbC+Q/i9ugdAwofX57T38zSDno7qTs/mfncNv5riKT1gSI3fgXj/o3qDFr+GvHv4PTbFc1E1ACRBa27Izzn9buKDBYxvGkkQen9VOT0b8cq7iN/v957xgJufzprTG/Iu4oOflwbQ8IA6fCTsnuRkx/BPzu7LBrBqHlBzeiJ63UkyZ9fwR6PzmgHUPEA4fWnyUWq6Dt41fHV0+nwIrGV6GVxfn5nqDuIjij8c9vrrHkBvcBXxXneIrE9NtKP4/fsyBPSLKZ8LGO4Lu8+n8QTvDD6SqPoN/COpCgF0HHBRc3rZSSV7h/AlN3yCb6rH437hADQdVvCy7GvKLuGHwdPeNxHgW+MiBFiHwumjfMfwkTYbsP8/g397d2pxfF7l5Qs32DX82Mmo9s/hn0uPR/QmT4FPMs0c4J3CR9qKhC/jo7NhiW84nmIGu4UvpXpkv4wvvQbfbN2UN9IC7GvvhD862y7MH0icF0s1346PRkeP7fIC6HxZ5o8ovgO+eX+7ZZ5XCgUg/AHVd8GHj2+V53WCpITIJOV/vwP+0fCuTfiqPYFaJhbKvx2/d9um+71KnL8vfr9V1o+m+jvjt8n6kTSR3xX/vm89tAjfpjdq8vcLffd0pqA1orp06u79Ij/95Gl7nF9N2Bj+vfK+BB/pD+3W4EsLNovxXlWfdAf41nFb8BFlAXmvmp+d229N6Ef2CvO5u3fBR9KtBd/QmlGf6kV85tZ7H/zRPZ0WPd821qaihvwBBeK+D/7xCb1F3JpBn8CXfzPX9xrfP6N3BlqE7xaz9770wkT3a/C56/faU/cIfOy8NM//KvzRCXv2pXX4shyrb8dXmO23yfhDh9+9wAsw3TfiI+mI3xBrXeSXceS9Hf9xzNfFtSjvTwrjpytW34aPpHOL47en6tP84s4l9u2X8Xsb4T+e8LvBLaj5i5sxouZnUx5vNf6HovPHH33Eh8yzYkyOpuXixIGmvgVf5Vmv12vDZN9tEZ7UVKzQM0j6JnzpVqwFakHafzjhDorCcrmOvNLegn88FCuhPv5cH7obH/EZDq1as6Knoz/Flxf2vVgG04KZXgC0mPkjyS/x8cQ96v0hfnBbroRsgevD4KR3wnZgU7PasvTgtCeWNW6IL5Y1XlfrYNtwlwfdDa17mqAUUfex5PfT6vfHd9Lm+FLKnCefl0vghmcfn57NSA9vTcTvbzf4rZPzu03xvWzCJsor+v5JkfX5UsEPKlChAtI5tdOM1PidIdQubDXbJvjRhH2WHPYquRUXcMMPvKc5YjPyDyZCZdnP5NriDzRsgi/zBb4N+qGoeMMPvbMrku7pXlRnUAFO9Ro+ubYKIz7+Lb4Ui5ih1+j71j0PfKrnf+xNrSH40SR9hpBbX64KfmwVy3jPz17Gd6flhw6teuefMYtXNd/52D9lgkw2J2+dm9K0jg9JzBILua3ec/gDLBOyXG8t3vlHJpvz83z5Y3c+CJ+VHt6O6rmP+7JV8pyjp8sa66li3qsLJE1KH/py9LE7n3Y/n54Y3t81vB/4nZK/d3/c7H3bjKPyGS69SQ8lD02lyF3pcgv2c7dPimdWj6IGPmBZgt8aP9xW+HKeLvKyrRohn4dL2vdxJBtRG/Z0u+Mzs73hT9Lkr4y6Tx9g7VVLmmsjpLzu9j0WRwHeTnIMrdQCehr9CtXnedP+az3LR3JiQXsJTw77vSY9i3thAC2pf+icXwqyT0vt53mTf61z1/B1pxnzuOmrWkbdCE9aspstrWxqDfByBGzik6fwvf742IxXOi0F6bThtsk2E3Q3rCHMHdJoARjKWE/wwezXnJ7J8MEdsM386FKZltDToU+dvzc/zBtRMBeoBb5O8vlz8JAhBkX1oLdpJ18If8NmDJsfMhswjLKvAY7jE+fwqdVz+ip0BB99nrshUP0M11B6/fncyfOcEKKDEOfn0LLmznze7z3X8VQOS5sZtIpekhqPK5ZCt6ibzw+ZgLnTYfCL7DV6vX172NL+7z/D9DLty/RBiNqGT2/6jHvPNcCG4pSbGSzaZvlMkHR8unlfr0kV9PKkFcXeU0Ho8WjY/wMDsOjm1YVEaYsy3pqAA5z0X90AVmn4WA681lQ7zwhCo9ux9Ur+suv1CEq9FtNL1ACOj4a9TWOgVR8kONMd2LQcSXRrus34LTpAECEvcLX200u8AY7ojxH8E31/nlfw8W7AUwEHfjy7H1u/jQLzQzEyzCfT0Gy50zcFYEbHD0cnQ6v3JBNA8TuvBoV5NEi93YJnAkTm6O786HQ8tPpcOPohoOsyBqH9Hnta28P9S4IQUqkZHN+dgTz8/WN1HUV0GJjnziRYZKFnquqOsguBJlAURQVOSTIrgXdURd1t9KagNdm2Pp100kknnXSyr8JqEybbzcdbKQngel6cZlkWu6H23176AwiyUz93IqjHiZ47tfVE/3lHuEkAksRr853Pq/GMnfyJvqrr63ni2prtubP816DAR+AI4t/q659eCgm3UdSnb659qjpXnM2PiPdNb4WxEzZ+pwWxM5HSWN8JzoqK/6vViU8V3oSe4MgrvE5yHf4rsUiRvHS6WCSxJ4mRCdIaN91dfj9CC2PXdWPqN+UQRrWrM5FddSY/N3Tpv/zHyEz62XIlA5KmGPv1iyDFDLPpYpq5dh0UnDVZDBbTJIvt6liaNBXeQJCbA71of6RkU65HPMmjwcLPl8QXv5ulhiQtVYAXGW8Td/DrF16tcpzPxA0aNcjL+3TIJQsBpLnBLz0J0+jXLz3mTzwvfuFB+btkSEowDmr4SMuifDUYrMgyX4hZcFDOJ7k/GAQRWS6n/JgZr0qFN18aQbea02vuroQpOzolUaxRa5wRnGe8+1Csr8qOVBa4uLDiYSOyzTAAzYvdR2wiZ1X7EkMsUUNKuJxoihJGmKSo4J2apbmu46u2r/vUF7QwMHBU7I2jTcFZbThqQnOC8uxYIhROCCbZpjdLUAx4tXXTyNSYDerQfVRUMyPFdmRIynQSF6cqdi70RDbGkakqnoNJzMxIzTCeiJtVFJ+IxRqKR3d5QGoKH9FUum7XiWp3tdbwoW+Wvq0yPbQBBkUVquHUIKmkcvW0IJO4wiTkRySu8Eb8SFrgYqPB6hB9NgtnirC0qcEbCEkz2SjOZXpOzAofDiuLpZworM8mhiHHSoWPSSKWKes+e1QXTCVR6eWJq9SvXcenl85d8cKcFG2aElz9irXqxvTfWIavEwonOii8Gb4GXzpYayokQT/awiIUL8d4ofDnFQ1SGKDnGNjh55T4GZYzygIWNSV4JTJDTCIC77CLFPi013HuqYpLZo1A18QP88qIJAXsVI9VqjEJa03GmmaFSQmsepGBZxt1v+rlBl6snamGnEeoFFDjpg9tTHQDB3zBcUJybos1/GRJuHUGju1jvdARIkYG/cHtUfUI384XHAlUlFbNpZtrxg/nLCpPsCfYmLFWYH4jDtNvC+GYXSk8qPneP+NP1x6ZUECHKsbRlwaBC0KPDxyDGSuyIx9CZlzHVyV/OaCfgpwwVUHzwt4pvrSQuf+rNgn4BjeaD83nrq3gauBzD6nwTRZblcrryukzerWaByuZYYBpbYJv095fMxRwYuzX8FPZ0MHOVVdPIWRd06f0ExImBs5q+JKZ6EXgX4BZeBGkU+4bMZxnzmRM16eX+JBioMccvxmi1/AnDXwIPXilUeVE35g2E1NNGgFMiaGxN8JH2rWxFvo4fr336bdR/FSOtQjLrgKNFkipvFxU+HY8DTK+9YqWDyQFzcTaPMBPFMjvsoFTmjAKfIQGWMZuU8mn+NMafkIjLyRcfM2NH3npipAos1XoilW1KERx9U3xzQE2nLUHhqi1O1q999m+HNDlrprI4P1KBhku1Iv6jPe+7RV36SACDqAGXAh7RPES8gEkLoP+JBW0TdGw1KjIWsM/Nf7ArPe+MTCpcrldhBXW7SY1fsPxav0FLzdbIoPgk00HBAd1sSFXTUK9LWDJiht17mqRr4EZs4Ao8MX9CpqgCBXoAda3HB+MYkH5NUfkGRXaL/8dPg19UE+p5XuQeDIEoc+Qy+ojk2neorlVdyv8zKg12+/xIZ4KL+Viw4UiClxmX39JyxlkRlSXRDeCKYAhzTF0ZoQi8nNRY33K7mNkBQjgT1k6NMFy9MQRkQZyIHbWh3Zric/BelU92hF2PJb4RPVR4pt+o1wYFDXlBvgStKYRlJlE1aBAVaGyIMItITmwYhaZhNoZre0IRAbItQb2qt4vq5OBHtKKjFoHc0DAL2KENAOL0Ge/xS+HPEgD853KeCK6Ro3JMkGs7CmryAKflT2QksQXR6L63oQ/WWIjsNkdJ6Sq2YK2Js2cHj0E+Wy2ZA/VACV1W5QsWUUH5xg4LvCNEl8N8wlXn6UtavVpgc+ed8O4gf/E+AF/xQpaxU0RmObSgFAD0DDymyx9vjPQDMpf8AI4SsMSxWepPhIKT/ErHgGDCgSSn5PRMa9kZ3qmMkcF3VIazLyBPKGdDPqwMKxqOShIvz3BvNBUQghGxWAXnGOZclhanzieAqa0DJAqLkVKfIid8LHm4FyFGtzIU00zNc8HB6db4C4ndN2HGU7o3hBFhxGw9VBjvrJksUTVFnRoRh3XHujRRmFf8KNw4ejLPIARpFMUlEhKV7kcBTCmjBJ+VW2wHNCxNQ37TOdkCWYBAyQN/oCUyOYoNHCblM9WqLazXAae5g2WuZhCo/wCn34Mx3ZjakNzoyVe4mgymRCdBl/wxQnktmDgO5NyzRuS3EGk06NBTiZik8zYz3WHK2y/gp6avBlmM38SRZE/K8bKCMbx2Ww2S2KbH9DcBF7QGKDF3GRjeDtzJRPe4OdRHeDvjE9kwBiUnZDSQ2LVEoQat1C3+lglIb1kIUUVIdlxxr5Hq00aqabHjs7K2Y6nCr+mAehiBM22oQvLi1CHo/+VUydIINQHqP/0xesn/dNkHFr/Ewk91r6GH6tP95Unvpa++MLutnMnnXTSSSeddNJJJ5100kknnXTSSavk/3sLQRwgpdPoAAAAAElFTkSuQmCC'} alt='Logo'/>
              <div classname='job-content'><h4 className="card-title">{localState.title}&nbsp;({localState.salary})</h4>
              <p className="jobcard-text text-secondary">Company:&nbsp;{localState.company_name}</p>
              
              {/*<div className="card-text text-secondary" dangerouslySetInnerHTML={{__html: localState.description}}></div>*/}
              <a className='btn btn-outline-success' href={localState.url} style={{fontFamily:'Cantarell',width:'150px',fontWeight:'700'}}  target="_blank" rel="noopener noreferrer">APPLY NOW</a>
              </div>
              {/*{moment(localState.publication_date).fromNow()}*/}
              <div><h5 className='postedtime'>{moment(localState.publication_date).fromNow()}</h5></div>
            </div>
          </div>
        </div>
        </ListItem>
      ))}
        <div style={{textAlign:'center'}}>
          <button className='getjobbtn' style={{width:'60px',marginTop:'10px'}} onClick={() => setJobCount(10)}>1</button>
          <button className='getjobbtn' style={{width:'60px',marginTop:'10px'}} onClick={() => setJobCount(20)}>2</button>
          <button className='getjobbtn' style={{width:'60px',marginTop:'10px'}} onClick={() => setJobCount(30),getJob()}>...</button>
        </div>
        
    </Container></>
  );
}

export default Jobs;
