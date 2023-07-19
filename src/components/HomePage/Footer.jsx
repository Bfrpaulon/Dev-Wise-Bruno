import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link, TextField, Button, Snackbar } from '@material-ui/core';
import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '2rem 0',
    backgroundColor: '#F5F5F5',
    textAlign: 'center',
  },
  section: {
    marginBottom: '2rem',
  },
  socialIcons: {
    marginTop: '1rem',
  },
  textField: {
    marginBottom: '1rem',
  },
  subscribeButton: {
    marginLeft: '0.5rem',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Footer = () => {
  const classes = useStyles();
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (email === '') {
      setShowErrorAlert(true);
      return;
    }
    if (!isValidEmail(email)) {
      setShowErrorAlert(true);
      return;
    }
    setShowAlert(true);
    setEmail('');
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleAlertErrorClose = () => {
    setShowErrorAlert(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <animated.footer className={classes.footer} style={animationProps}>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={4}>
          <div className={classes.section}>
            <Typography variant="h6" component="h6">
              Links
            </Typography>
            <nav className={classes.linksContainer}>
              <Link href="/about" color="textPrimary">
                Sobre
              </Link>
              <Link href="/contact" color="textPrimary">
                Contato
              </Link>
              <Link href="/privacy" color="textPrimary">
                Política de Privacidade
              </Link>
              <Link href="/terms" color="textPrimary">
                Termos de Uso
              </Link>
            </nav>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.section}>
            <Typography variant="h6" component="h6">
              Redes Sociais
            </Typography>
            <Grid container justify="center" className={classes.socialIcons}>
              <Grid item>
                <Link href="#" target="_blank" rel="noopener" color="textPrimary">
                  <GitHub />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" target="_blank" rel="noopener" color="textPrimary">
                  <LinkedIn />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" target="_blank" rel="noopener" color="textPrimary">
                  <Twitter />
                </Link>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.section}>
            <Typography variant="h6" component="h6">
              Assine nosso boletim informativo
            </Typography>
            <Typography variant="body2" component="p">
              Receba as últimas atualizações do blog diretamente em sua caixa de entrada.
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubscribe}>
              <TextField
                id="email"
                label="Endereço de e-mail"
                variant="outlined"
                size="small"
                className={classes.textField}
                value={email}
                onChange={handleEmailChange}
                error={showErrorAlert}
                helperText={showErrorAlert && 'Por favor, insira um e-mail válido.'}
              />
              <Button type="submit" variant="contained" color="primary" className={classes.subscribeButton}>
                Assinar
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        message="Você foi inscrito no boletim informativo!"
      />
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
        onClose={handleAlertErrorClose}
        message="Por favor, insira um e-mail válido."
      />
    </animated.footer>
  );
};

export default Footer;
