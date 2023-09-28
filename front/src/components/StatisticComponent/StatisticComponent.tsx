import { Container, Grid, Paper, Typography } from '@mui/material';
import ProjectManagementIcon from '@mui/icons-material/AssignmentTurnedIn';
import ContentManagementIcon from '@mui/icons-material/Work';
import UserIcon from '@mui/icons-material/EmojiPeople';
import AimIcon from '@mui/icons-material/Star';
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
                <ProjectManagementIcon className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Happy Dance
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <ContentManagementIcon className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Motivación
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <UserIcon className="statIcon" />
                <Typography variant="subtitle1" className="statText">
                  Yoga
                </Typography>
              </Paper>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Tilt>
              <Paper className="statBox custom-stat-box">
                <AimIcon className="statIcon" />
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
