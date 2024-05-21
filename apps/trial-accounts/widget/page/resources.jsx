const { SidebarLayout } = VM.require("${alias_builddao}/widget/template.SidebarLayout") || {
  SidebarLayout: () => <></>,
};

const config = {
  theme: {},
  layout: {
    src: "${alias_builddao}/widget/Layout",
    props: {
      variant: "standard",
    },
  },
  blocks: {
    // these get passed to the layout and children
    Header: () => <></>,
    Footer: () => <></>, // customize your footer
  },
  router: {
    param: "tab",
    routes: {
      guide: {
        path: "${alias_builddao}/widget/Resources",
        blockHeight: "final",
        init: {
          feedName: "Guide",
          name: "Guide",
          icon: "bi-map",
          mdPath: "https://raw.githubusercontent.com/NEARBuilders/gateway/main/resources.md",
        },
        default: "true",
      },
      deployWeb4: {
        path: "${alias_builddao}/widget/Resources",
        blockHeight: "final",
        init: {
          feedName: "Deploying to Web4",
          name: "Deploying to Web4",
          icon: "bi-rocket",
          postAccountId: "efiz.near",
          postBlockHeight: "113409716",
        },
      },
    },
  },
};

const Root = styled.div``;

return (
  <Root>
    <SidebarLayout
      currentPath={"/${alias_builddao}/widget/app?page=resources"}
      page={props.tab}
      routes={config.router.routes}
    >
      <Widget src="${alias_builddao}/widget/app.view" props={{ config, ...props }} />
    </SidebarLayout>
  </Root>
);
