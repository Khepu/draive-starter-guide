import React from 'react';
import Layout from '@theme/Layout';
import Logo from '../components/logo';
import styles from './index.module.css';
import clsx from 'clsx';

const HomeHeader = ():JSX.Element => (
  <header className={styles.heroBanner}>
    <div className="container">
      <h1>Welome to the Draive team!</h1>
      <Logo/>
    </div>
  </header>
);

const HomeBody = ():JSX.Element => (
  <div className={clsx('container', styles.body)}>
    <p>
      Building a self-driving car is no joke, and we take it very seriously!
      Being organized is our most important tool in dealing with the complexity
      of the project. This page should provide a good grasp of our workflow, or
      at least the parts that are common across draive, to any new team
      members. After reading it, you should feel comfortable enough with our
      naming conventions, know where to find new tasks, and where to ask for
      help. 
    </p>
    <p>
      This guide assumes some familiarity with git, StackOverflow, and Trello.
    </p>
  </div>
);

export default function Home() {
  return (
    <Layout
      title={'Starter Guide'}
      description="Description will go into a meta tag in <head />">
      <HomeHeader/>
      <main>
        <HomeBody/>
      </main>
    </Layout>
  );
}
