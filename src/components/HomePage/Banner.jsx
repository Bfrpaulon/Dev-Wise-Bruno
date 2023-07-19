import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, useTheme, useMediaQuery } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  banner: {
    background: '#005B99', // --primary-100
    color: '#FFFFFF',
    padding: '2rem',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
    },
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  slogan: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
  description: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
    },
  },
  button: {
    color: '#005B99',
    background: '#FFFFFF',
    padding: '0.75rem 2rem',
    borderRadius: '50px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    '&:hover': {
      background: '#ebebeb', // --bg-200
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.section className={classes.banner} style={animationProps}>
      <div className={classes.content}>
        <Typography variant={isSmallScreen ? 'h3' : 'h1'} className={classes.slogan}>
          Bem-vindo ao nosso Blog!
        </Typography>
        <Typography variant={isSmallScreen ? 'h5' : 'h2'} className={classes.description}>
          Descubra conteúdos incríveis sobre diversos temas e aprofunde seus conhecimentos.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          component="a"
          href="#"
        >
          Explore agora
        </Button>
      </div>
    </animated.section>
  );
};

export default Banner;
