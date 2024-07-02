const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-columns: ${(props) => {
    switch (props.childCount) {
      case 1:
        return "1fr";
      case 2:
        return "1fr 1fr";
      case 3:
        return "1fr 1fr 1fr";
      case 4:
      default:
        return "1fr 1fr 1fr";
    }
  }};
  grid-template-rows: ${(props) => {
    switch (props.childCount) {
      case 1:
      case 2:
      case 3:
        return "1fr";
      case 4:
      default:
        return "1fr 1fr";
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

const { elements } = props;

const childCount = elements.length;

return (
  <GridContainer childCount={childCount}>
    {elements.map((Element, index) => (
      <GridItem key={index} childCount={childCount} index={index}>
        <Element />
      </GridItem>
    ))}
  </GridContainer>
);
