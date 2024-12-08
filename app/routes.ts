import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/hello.png', 'routes/hello.png.tsx'),
] satisfies RouteConfig;
