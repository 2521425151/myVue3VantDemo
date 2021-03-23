const components = {
    path: '/components',
    name: 'components',
    meta: {
        title: "components",
        keepAlive: true
    },
    component: () => import("../../views/components/index.vue")
  }
  
  export default components