import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '4rem 0',
    backgroundColor: '#F5F5F5',
  },
  sectionTitle: {
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#005B99',
  },
  card: {
    display: 'flex',
    height: '100%',
    borderRadius: '10px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    backgroundColor: '#FFFFFF',
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
    color: '#333333',
  },
  summaryCard: {
    fontSize: '1rem',
    color: '#5c5c5c',
    maxHeight: '6rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
}));

const ContentSections = () => {
  const classes = useStyles();
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const contentSections = [
    {
      id: 1,
      title: 'Notícias',
      articles: [
        {
          id: 1,
          title: 'Descoberta revolucionária na...',
          summary:
            'Uma nova técnica de otimização de performance...',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'Novo framework JavaScript...',
          summary:
            'Um novo framework JavaScript foi lançado...',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 3,
          title: 'Descoberta revolucionária na...',
          summary:
            'Uma nova técnica de otimização de...',
          image: 'https://via.placeholder.com/300x200',
        },
      ],
    },
    {
      id: 2,
      title: 'Dicas',
      articles: [
        {
          id: 4,
          title: '5 dicas para melhorar...',
          summary:
            'Confira essas 5 dicas essenciais para otimizar...',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 5,
          title: 'Como criar animações incríveis...',
          summary:
            'Aprenda a criar animações impressionantes...',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 6,
          title: 'Melhores práticas de...',
          summary:
            'Descubra as melhores práticas para tornar seu site...',
          image: 'https://via.placeholder.com/300x200',
        },
      ],
    },
  ];

  return (
    <animated.section className={classes.section} style={animationProps}>
      {contentSections.map((section) => (
        <div key={section.id}>
          <Typography variant="h2" component="h2" className={classes.sectionTitle}>
            {section.title}
          </Typography>
          <Grid container spacing={3}>
            {section.articles.map((article) => (
              <Grid item xs={12} sm={6} md={4} key={article.id}>
                <animated.div style={animationProps}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.media} image={article.image} title={article.title} />
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
        </div>
      ))}
    </animated.section>
  );
};

export default ContentSections;
