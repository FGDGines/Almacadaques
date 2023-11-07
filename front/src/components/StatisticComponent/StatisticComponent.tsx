import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { MdOutlineEmojiPeople, MdOutlineMood } from 'react-icons/md';
import { GiMeditation } from 'react-icons/gi';
import { BsFillHeartPulseFill } from 'react-icons/bs';
import { iconos } from "../../data/icons";

import './StatisticComponent.css'; // Importa el archivo CSS
import { Tilt } from 'react-tilt';

const StatisticComponent = ({ titles, type }: { titles: string[], type: 'bienestar' | 'medida' }) => {
  const icons = type === 'bienestar' ? iconos.bienestar : iconos.medida;

  return (
    <section className="stats">
      <Container>
        <Grid container spacing={3}>
          {icons.map((icon, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Tilt>
                <Paper className="statBox custom-stat-box">
                  <i>
                    <img src={icon} alt="Iconos" />
                  </i>
                  <Typography variant="subtitle1" className="statText">
                    {titles[index]}
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
