import { Home, Login, Users } from '../../pages';

const routes = [
  {
    path: '/',
    component: Login,
    exact: true,
    name: 'login',
  },
  {
    path: '/home',
    component: Home,
    exact: true,
    name: 'home',
    routes: [
      // {
      //   path: '/home/users',
      //   component: Users,
      //   name: 'music',
      // },
    ],
  },
  {
    path: '/home/users',
    component: Users,
    name: 'music',
  },
  {
    path: '/home/video',
    // component: VideoPage,
    component: Users,
    name: 'video',
  },
];

export default routes;
