import Login from './pages/login';
import Profile from './pages/profile';
import Posts from './pages/posts';
import Post from './pages/post';
import Home from './pages/home';

const Routes = [
    {
        isNavBar: true,
        isExact: true,
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        isNavBar: false,
        path: '/posts/:id',
        name: 'Post',
        component: Post,
    },
    {
        isNavBar: true,
        path: '/posts',
        name: 'Posts',
        component: Posts
    },
    {
        isNavBar: false,
        path: '/profile',
        name: 'Profile',
        component: Profile,
        isPrivate: true
    },
    {
        isNavBar: true,
        path: '/login',
        name: 'Login',
        component: Login
    }
];

export default Routes;
