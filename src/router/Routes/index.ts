import { Home, Login } from "../../pages";

const routes = [
  {
    path: "/",
    component: Login,
    exact: true,
    name: "login",
  },
  {
    path: "/home",
    component: Home,
    exact: true,
    name: "home",
    // routes: [
    //   {
    //     path: '/home/music',
    //     component: Music,
    //   },
    //   {
    //     path: '/home/video',
    //     component: VideoPage,
    //   },
    // ],
  },
  {
    path: "/home/music",
    // component: Music,
    component: `MUSIC`,
    name: "music",
  },
  {
    path: "/home/video",
    // component: VideoPage,
    component: "VideoPage",
    name: "video",
  },
];

export default routes;
