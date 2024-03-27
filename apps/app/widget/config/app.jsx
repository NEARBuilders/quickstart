return {
  type: "app",
  routes: {
    home: {
      path: "/*__@appAccount__*//widget/page.home",
      blockHeight: "final",
      init: {
        name: "Home",
      },
    },
    feed: {
      path: "/*__@appAccount__*//widget/page.feed",
      blockHeight: "final",
      init: {
        name: "Feed",
      },
    },
    demo: {
      path: "/*__@appAccount__*//widget/page.demo",
      blockHeight: "final",
      init: {
        name: "Demo",
      },
    },
  },
};
