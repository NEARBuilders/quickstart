const { CSS } = VM.require("${config_account}/widget/CSS") || {
  CSS: () => <></>,
};

const config = {
  theme: {},
  layout: {
    src: "${alias_devs}/widget/Layout",
    props: {
      variant: "standard",
    },
  },
  blocks: {
    Header: () => (
      <Widget
        src="${config_account}/widget/components.Navbar"
        props={{
          routes: config.router.routes,
          page: props.page || "home",
        }}
      />
    ),
    Footer: () => <Widget src="${config_account}/widget/components.Footer" />,
  },
  router: {
    param: "page",
    routes: {
      home: {
        path: "${config_account}/widget/page.home",
        blockHeight: "final",
        default: true,
        init: {
          name: "Home",
        },
      },
      camera: {
        path: "${config_account}/widget/page.camera",
        blockHeight: "final",
        default: true,
        init: {
          name: "Camera",
        },
      },
      inspect: {
        path: "${alias_builddao}/widget/page.inspect.Index",
        blockHeight: "final",
        hide: true,
      },
    },
  },
};

return (
  <CSS>
    <Widget src="${alias_old}/widget/app.view" props={{ config, ...props }} />
  </CSS>
);