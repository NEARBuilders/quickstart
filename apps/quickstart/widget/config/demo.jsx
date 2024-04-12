return {
  type: "app",
  routes: {
    test: {
      path: "${config_account}/widget/page.demo.test",
      blockheight: "final",
      init: {
        name: "Test",
      },
    },
  },
};
