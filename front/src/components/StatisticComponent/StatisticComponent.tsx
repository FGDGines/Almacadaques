import { Container, Grid, Paper, Typography } from '@mui/material';
import { MdOutlineEmojiPeople, MdOutlineMood } from 'react-icons/md';
import { GiMeditation } from 'react-icons/gi'
import {BsFillHeartPulseFill} from 'react-icons/bs'

import './StatisticComponent.css'; // Importa el archivo CSS
import { Tilt } from 'react-tilt';

const StatisticComponent = () => {
  return (
    <section className="stats">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <MdOutlineMood className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Felicidad
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <BsFillHeartPulseFill className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Motivación
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <MdOutlineEmojiPeople className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Yoga
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <GiMeditation className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Meditación
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default StatisticComponent;
