import PlayerHome from './components/player/PlayerHome.vue';
import HostHome from './components/host/HostHome.vue';
import LoginPage from './pages/login.vue';
import ProfilePage from './pages/profile.vue';
import LeaderBoard from './pages/leaderboard.vue';

export const routes = [
  { path: '/game/play', component: PlayerHome },
  { path: '/game', component: HostHome },
  { path: '/login', component: LoginPage },
  { path: '/game/profile', component: ProfilePage },
  { path: '/game/leaderboard', component: LeaderBoard }
];
