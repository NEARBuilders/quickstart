const { currentPath, page, ...passProps } = props;

// require a config in order to for sidebar layout
const { routes } = VM.require("/*__@appAccount__*//widget/config.demo") ?? {
  routes: {},
};

const { SidebarLayout } = VM.require(
  "/*__@appAccount__*//widget/template.SidebarLayout"
) || {
  SidebarLayout: () => <></>,
};

if (!page) page = Object.keys(routes)[0] || "home";

const Root = styled.div``;

function Router({ active, routes }) {
  const routeParts = active.split(".");

  let currentRoute = routes;
  let src = "";
  let defaultProps = {};

  for (let part of routeParts) {
    if (currentRoute[part]) {
      currentRoute = currentRoute[part];
      src = currentRoute.path;

      if (currentRoute.init) {
        defaultProps = { ...defaultProps, ...currentRoute.init };
      }
    } else {
      // Handle 404 or default case for unknown routes
      return <p>404 Not Found</p>;
    }
  }

  return (
    <div key={active}>
      <Widget src={src} props={{ ...passProps, ...defaultProps }} />
    </div>
  );
}

const Container = styled.div`
  // display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

return (
  <Root>
    <Container>
      <SidebarLayout currentPath={currentPath} page={page} routes={routes}>
        <Content>
          <Router active={page} routes={routes} />
        </Content>
      </SidebarLayout>
    </Container>
  </Root>
);
