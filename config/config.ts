import { defineConfig, IConfig } from 'umi';

const config: IConfig = {
  dva: {
    hmr: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    'primary-color': 'cyan',
  },
  routes: [
    { path: '/login', component: '@/pages/Login/index' },
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        { path: '/home', component: '@/pages/Home/index' },
        { path: '/me', component: '@/pages/Me/index' },
      ],
    },
  ],
  proxy: {
    '/api/': {
      changeOrigin: true,
      secure: false,
      pathRewrite: { '/api': '/' },
    },
  },
};

export default defineConfig(config);
