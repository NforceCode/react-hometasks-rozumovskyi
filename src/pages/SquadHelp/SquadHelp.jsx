import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SquadHelpHeader from 'components/forms/SquadHelp/Header';
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
              voluptatem temporibus aspernatur vitae esse sed dolor veniam! Iure
              itaque nulla tenetur. Quos tenetur dolores dignissimos maiores et
              provident natus, error eum blanditiis vitae dolorum, expedita,
              culpa sed perferendis maxime dicta. Illo alias atque omnis dolorum
              quos laudantium, mollitia, quas, nihil corrupti expedita ad vero?
              Ut accusantium sapiente recusandae at magni. Eius nihil ut tempora
              quae debitis distinctio dolorum ab? Mollitia itaque dolor deserunt
              alias reiciendis esse accusamus eum commodi! Distinctio aliquam in
              aut sunt modi quae officiis dignissimos aspernatur quibusdam sed,
              voluptatem, mollitia quisquam facere quia aliquid alias molestiae
              repellendus fuga adipisci deleniti esse voluptatibus dolore! Sequi
              ullam in iure dignissimos, laborum et corporis at ipsam aut
              obcaecati, doloremque consequuntur nihil est dolorem, repellendus
              rem saepe. Dignissimos nisi deleniti, quis nobis beatae deserunt
              possimus facere unde, fugiat labore maxime corporis incidunt
              soluta explicabo asperiores, expedita blanditiis reprehenderit
              mollitia ipsa ab vitae ratione quos similique voluptates?
              Distinctio error cumque nisi, sint iure molestiae debitis odio
              neque culpa, reprehenderit consectetur molestias deserunt at eum
              doloribus laborum voluptas expedita, provident deleniti
              perspiciatis ullam nulla ducimus. Libero facilis saepe non earum
              culpa ducimus, rerum soluta vel quisquam itaque natus? Id beatae
              alias inventore quae sint ex rerum enim cupiditate doloribus unde?
              Excepturi nam laboriosam esse, commodi modi iure. Aut repellendus
              fuga ad doloribus natus laudantium vero consequuntur porro saepe,
              rem praesentium beatae corporis eius reiciendis voluptas quod enim
              dolorem. Exercitationem inventore corrupti unde harum ea esse
              temporibus minus accusantium dolorum. Molestias tempore libero
              quidem maxime assumenda! At ipsa dolor, tempora delectus
              asperiores soluta maiores, eveniet cupiditate nesciunt accusamus
              numquam modi dolorum optio earum repudiandae aspernatur aliquid
              eum. Expedita assumenda placeat, nulla iste, iusto labore quas
              quo, officiis cumque deleniti adipisci. Ex numquam voluptatum
              culpa magni libero illo! Saepe laboriosam tempore adipisci eius.
              Numquam ratione natus aut repellendus veniam a corporis, dolore
              consequuntur sint voluptates porro ipsa tempora voluptatem
              voluptas quod fugiat similique earum repellat ducimus saepe libero
              dolorum vel dolores fugit! Quos alias libero, corporis minus,
              culpa fuga possimus repellat natus eligendi rerum eius accusantium
              esse quaerat nam quae. Impedit labore nulla perspiciatis dolore ut
              recusandae saepe voluptatem illum consequuntur quia mollitia
              distinctio earum, odit quibusdam ipsum consectetur commodi
              molestias eaque expedita dolor? Perferendis, amet deleniti sint
              illo laudantium repudiandae repellendus? Vitae temporibus suscipit
              sunt autem molestias sapiente error dicta accusantium. Eius
              debitis deleniti facilis tempora earum hic aperiam ratione et.
              Atque expedita exercitationem voluptatibus, perspiciatis quaerat
              illum beatae porro voluptatum molestias libero? Commodi, ex. Eum
              accusamus, suscipit, vitae repellat maiores officiis alias id at
              inventore nulla atque tempore laboriosam animi dolores culpa
              sapiente, ad unde voluptas! Accusantium neque, minima iste
              deserunt vero odio similique totam fugiat! Suscipit cumque
              eligendi dolor atque earum, nam laboriosam reprehenderit nesciunt
              minus temporibus. Earum.
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
