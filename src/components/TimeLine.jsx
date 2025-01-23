import {EXPERIENCES} from "../constants";
import React from 'react';
import { Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CustomTimeline = styled(Timeline)`
  & .MuiTimelineDot-root {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  & .MuiTimelineConnector-root {
    background-color: none;
  }
  & .MuiTimelineContent-root {
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    color: white;
    border-radius: 8px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  }
`;

const MyTimeline = () => {
  return (
    <div>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My Career Timeline
      </motion.h1>
      <CustomTimeline position="alternate">
        {EXPERIENCES.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <motion.img
                whileInView={{opacity:2, y:0}}
                initial={{opacity:0, y:0}}
                transition={{duration:1.5}}
                src={item.image}  
                alt={item.role}
                className="rounded-full"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
                <TimelineContent sx={{ py: '8px', px: 2 }}>
                    <motion.div 
                        whileInView={{opacity:1, y:0}}
                        initial={{opacity:0, y:-10}}
                        transition={{duration: 1}}
                        >
                        <Typography variant="h6" component="span" sx={{ color: '#fff', fontWeight: 'bold' }}>
                            {item.role}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 'bold', fontStyle: 'italic' }}>
                            {item.company}
                        </Typography>
                        <Typography>{item.description}</Typography>
                        <Typography variant="body2" sx={{ color: '#ffccff', fontStyle: 'italic' }}>
                            {item.year}
                        </Typography>
                    </motion.div>
                </TimelineContent>
          </TimelineItem>
        ))}
      </CustomTimeline>
    </div>
  );
};

export default MyTimeline;

