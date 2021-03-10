import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SquadHelpHeader from 'pages/SquadHelp/Header';
import Login from './LogIn/SquadHelpLogin';
import SignUp from './SignUp/SquadHelpSignUp';
import styles from './SquadHelp.module.scss';

const SquadHelp = props => {
  const currentLocation = document.location.pathname;

  const linkPath = {
    path:
      currentLocation === '/squadhelp/login'
        ? '/squadhelp/signup'
        : '/squadhelp/login',
    text: currentLocation === '/squadhelp/login' ? 'Sign Up' : 'Login',
  };

  return (
    <div className={styles.body}>
      <SquadHelpHeader
        pageLink={
          <Link className={styles.creativeBtnName} to={linkPath.path}>
            {linkPath.text}
          </Link>
        }
      />

      <Switch>
        <Route exact path='/squadhelp'>
          <h2>Under Construction</h2>
          <p>
            In the meantime you can use fast navigation костыли for navigating
            site efficiently
          </p>
          <ul>
            <li>
              <Link to={'/squadhelp/login'}>Login page</Link>
            </li>
            <li>
              <Link to={'/squadhelp/signup'}>Signup page</Link>
            </li>
            <li>
              <Link to={'/squadhelp/tos'}>Terms of Service page</Link>
            </li>
            <li>
              <Link to={'/squadhelp/passwordrecovery'}>
                Password recovery page
              </Link>
            </li>
          </ul>
        </Route>
        <Route path='/squadhelp/signup' component={SignUp} />
        <Route path='/squadhelp/login' component={Login} />
        <Route path='/squadhelp/tos'>
          <div>
            <h2>Terms of Service</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quod commodi, reiciendis aperiam pariatur id labore facere. Aut
              labore molestias sunt, eos cupiditate fugit deleniti perspiciatis
              vel, tempora quae incidunt nostrum adipisci quasi! Ducimus, atque
              fuga quo illo tempora sapiente ex, veritatis excepturi nulla quasi
              mollitia eius obcaecati voluptatum quis laborum eaque nobis
              voluptatem temporibus aspernatur vitae esse sed dolor veniam!
            </p>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, amet
              iusto perferendis maxime rem rerum quis ab odit! Quidem explicabo
              mollitia ad non natus ab.
            </p>
          </div>
        </Route>
        <Route path='/squadhelp/passwordrecovery'>
          <div>
            Sorry but Jimmy didnt finish this feature, so you better remember
            your password yourself
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default SquadHelp;
