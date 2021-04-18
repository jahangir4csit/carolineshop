import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Container from '@material-ui/core/Container';
import TrendingFlatOutlinedIcon from '@material-ui/icons/TrendingFlatOutlined';

import slide from '../../assets/img/fashion1.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    title: 'FASHION & BEAUTY',
    subtitle: '30% OFF',
    imgPath: slide,
  },
  {
    title: 'FAVOURITE CLOTHING',
    subtitle: '50% OFF',
    imgPath: slide,
  },
  {
    title: 'AMAZINE COLLECTION',
    subtitle: '40% OFF',
    imgPath: slide,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
    position: 'relative',
    maxHeight: '570px',
  },
  bannerContent: {
    position: 'relative',
    overflow: 'hidden'
  },
  header: {
    position: 'absolute',
    width: '50%',
    top: '15%',
    paddingLeft: theme.spacing(4),
    backgroundColor: 'transparent',
    zIndex: '9999999',
    [theme.breakpoints.down('xs')]: {
      top: '20%',
      paddingLeft: theme.spacing(8),
      },
  },
  title:{
    fontSize: '70px',
    color: '#404040',
    fontWeight: '600',
    paddingBottom: 0,
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px',
    },
  },
  subtitle:{
    fontSize: '56px',
    color: '#FF8E78',
    fontWeight: '300',
    lineHeight: '80px',
    marginBottom: '10px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      lineHeight: '10px',
    },
  },
  sliderThumb: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  sliderNav: {
    position: 'absolute',
    top: '47%',
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: 0,
    paddingBottom: 0,
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '60%',
    maxHeight: '550px',
  },
  button: {
    borderRadius: '0px',
    border: '1px solid #fff',
    fontSize: '16px',
    letterSpacing: '0px',
    lineHeight: '33px',
    color: '#000',
    padding: '13px 35px',
    background: '#fff',
    marginTop: '50px',
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
      lineHeight: '15px',
      marginTop: '15px',
      fontSize: '13px',
    },
    '& svg': {
        color: theme.palette.primary.main,
    },
    '&:hover': {
        border: '1px solid #000',
        background: '#000',
        color: '#fff',
        '& svg':{
            color: '#fff',
        }
    }
}
}));

function Slider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.bannerContent}>
          <Paper square elevation={0} className={classes.header}>
              <Typography variant="h3" className={classes.subtitle}>{tutorialSteps[activeStep].subtitle}</Typography>
              <Typography variant="h2" className={classes.title}>{tutorialSteps[activeStep].title}</Typography>
              <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<TrendingFlatOutlinedIcon />}
              >
                  GET COLLECTION
              </Button>
          </Paper>
          <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
          >
              {tutorialSteps.map((step, index) => (
              <div key={step.label} className={classes.sliderThumb}>
                  {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                  ) : null}
              </div>
              ))}
          </AutoPlaySwipeableViews>
        </div>
      </Container>
      <MobileStepper
          className={classes.sliderNav}
          position="static"
          variant=""
          activeStep={activeStep}
          nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              NEXT
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
          }
          backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              PREV
          </Button>
          }
      />
    </div>
  );
}

export default Slider;