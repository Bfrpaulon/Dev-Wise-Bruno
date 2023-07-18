import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticlesPage from './components/ArticlesPage';
import ArticlePage from './components/ArticlePage';
import CategoriesPage from './components/CategoriesPage';
import CategoryPage from './components/CategoryPage';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/articles" component={ArticlesPage} />
      <Route path="/article/:id" component={ArticlePage} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/category/:id" component={CategoryPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  );
};

export default App;
