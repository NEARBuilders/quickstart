// Layout Components
const StandardLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const SidebarLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  .aside {
    width: 200px;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 200px;
    }
  }
  .main {
    flex-grow: 1;
  }
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: ${(props) => {
    switch (props.childCount) {
      case 1: return "1fr";
      case 2: return "1fr 1fr";
      case 3: return "1fr 1fr 1fr";
      case 4:
      default: return "1fr 1fr 1fr";
    }
  }};
  grid-template-rows: ${(props) => {
    switch (props.childCount) {
      case 1:
      case 2:
      case 3: return "1fr";
      case 4:
      default: return "1fr 1fr";
    }
  }};
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  ${(props) => {
    if (props.childCount === 4 && props.index === 3) {
      return `
        grid-column: 1 / span 3;
      `;
    }
  }}
`;

const Layout = ({ variant, blocks, children, debug }) => {
  const DebugWrapper = debug ? styled.div`
    border: 2px solid red;
    padding: 2px;
  ` : styled.div``;

  if (!variant) {
    variant = "standard";
  }
  const availableVariants = ["standard", "sidebar", "grid"];
  if (!availableVariants.includes(variant)) {
    return 'Invalid Variant: "' + variant + '"';
  }

  switch (variant) {
    case "standard":
      return (
        <StandardLayout>
          <DebugWrapper>{blocks.Header && <blocks.Header />}</DebugWrapper>
          <DebugWrapper style={{ flex: 1 }}>{children}</DebugWrapper>
          <DebugWrapper>{blocks.Footer && <blocks.Footer />}</DebugWrapper>
        </StandardLayout>
      );
    case "sidebar":
      return (
        <StandardLayout>
          <DebugWrapper>{blocks.Header && <blocks.Header />}</DebugWrapper>
          <SidebarLayout>
            <div className="aside">
              <DebugWrapper style={{ height: '100%' }}>{blocks.Sidebar && <blocks.Sidebar />}</DebugWrapper>
            </div>
            <div className="main">
              <DebugWrapper style={{ height: '100%' }}>{children}</DebugWrapper>
            </div>
          </SidebarLayout>
          <DebugWrapper>{blocks.Footer && <blocks.Footer />}</DebugWrapper>
        </StandardLayout>
      );
    case "grid":
      const elements = React.Children.toArray(children);
      return (
        <GridContainer childCount={elements.length}>
          {elements.map((child, index) => (
            <GridItem key={index} childCount={elements.length} index={index}>
              <DebugWrapper>{child}</DebugWrapper>
            </GridItem>
          ))}
        </GridContainer>
      );
  }
};