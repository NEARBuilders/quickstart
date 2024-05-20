return {
  type: "app",
  routes: {
    home: {
      path: "${config_account}/widget/page.home",
      blockHeight: "final",
      init: {
        name: "Home",
      },
    },
    feed: {
      path: "${config_account}/widget/page.feed",
      blockHeight: "final",
      init: {
        name: "Feed",
      },
    },
    demo: {
      path: "${config_account}/widget/page.demo",
      blockHeight: "final",
      init: {
        name: "Demo",
      },
    },
  },
};
