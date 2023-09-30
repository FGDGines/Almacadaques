
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FC } from 'react';
import { tpAlternateTimeLine } from '../../types/typesComponents';
import './TimeLine.css'
const AlternateTimeline: FC<tpAlternateTimeLine> = ({data}) => {
  return (
    <Timeline position="alternate">
      {data.map((item )=>{
        const {id , text} = item 
        return  <TimelineItem key={id}>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{text}</TimelineContent>
              </TimelineItem>
      })}
    </Timeline>
  );
}


export default AlternateTimeline