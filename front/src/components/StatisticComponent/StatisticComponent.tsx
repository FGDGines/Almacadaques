import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { MdOutlineEmojiPeople, MdOutlineMood } from 'react-icons/md';
import { GiMeditation } from 'react-icons/gi';
import { BsFillHeartPulseFill } from 'react-icons/bs';

import './StatisticComponent.css'; // Importa el archivo CSS
import { Tilt } from 'react-tilt';

const StatisticComponent = ({ titles }: { titles: string[] }) => {
  const icons = [MdOutlineMood, BsFillHeartPulseFill, MdOutlineEmojiPeople, GiMeditation];

  return (
    <section className="stats">
      <Container>
        <Grid container spacing={3}>
          {titles.map((title, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Tilt>
                <Paper className="statBox custom-stat-box">
                  {React.createElement(icons[index], { className: "statIcon" })}
                  <Typography variant="subtitle1" className="statText">
                    {title}
                  </Typography>
                </Paper>
              </Tilt>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default StatisticComponent;
