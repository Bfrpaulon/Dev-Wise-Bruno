import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '4rem 0',
    backgroundColor: '#F5F5F5', // --bg-100
  },
  title: {
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#005B99', // --primary-100
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    backgroundColor: '#ebebeb', // --bg-200
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  content: {
    flex: '1 0 auto',
    padding: '1rem',
  },
  titleCard: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#333333', // --text-100
  },
  summaryCard: {
    fontSize: '1rem',
    color: '#5c5c5c', // --text-200
  },
}));

const FeaturedSection = () => {
  const classes = useStyles();
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Exemplo de dados dos artigos
  const articles = [
    {
      id: 1,
      title: 'Título do Artigo 1',
      summary: 'Resumo breve do Artigo 1',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      title: 'Título do Artigo 2',
      summary: 'Resumo breve do Artigo 2',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      title: 'Título do Artigo 3',
      summary: 'Resumo breve do Artigo 3',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <animated.section className={classes.section} style={animationProps}>
      <Typography variant="h2" component="h2" className={classes.title}>
        Artigos em Destaque
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <animated.div style={animationProps}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={article.image}
                  title={article.title}
                />
                <CardContent className={classes.content}>
                  <Typography variant="h3" component="h3" className={classes.titleCard}>
                    {article.title}
                  </Typography>
                  <Typography variant="body1" component="p" className={classes.summaryCard}>
                    {article.summary}
                  </Typography>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </animated.section>
  );
};

export default FeaturedSection;
