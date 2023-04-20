import PlayerHome from './components/player/PlayerHome.vue';
import HostHome from './components/host/HostHome.vue';
import LoginPage from './pages/login.vue';
import ProfilePage from './pages/profile.vue';
import LeaderBoard from './pages/leaderboard.vue';

export const routes = [
  { path: '/play', component: PlayerHome },
  { path: '', component: HostHome },
  { path: '/login', component: LoginPage },
  { path: '/profile', component: ProfilePage },
  { path: '/leaderboard', component: LeaderBoard }
];
