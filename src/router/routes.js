
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'worlz', component: () => import('pages/worlz.vue') },
      { path: 'news', component: () => import('pages/news.vue') },
      { path: 'events', component: () => import('pages/events.vue') },
      { path: 'newspaper', component: () => import('pages/newspaper.vue') },
      { path: 'noticeboard', component: () => import('pages/noticeboard.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
