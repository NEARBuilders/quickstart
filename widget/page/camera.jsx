const CameraContainer = styled.div`
  height: 600px;
  /* width: 300px; */
`;

// Function to generate a random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const OverlayComponent = ({ position, getScreenshot, toggleFacingMode, facingMode }) => (
  <Widget src="${config_account}/widget/components.GridItem" props={{ getScreenshot }} />
);

const createOverlayComponents = () => {
  const gridPositions = [
    "top-left",
    "top-center",
    "top-right",
    "center-left",
    "center",
    "center-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const components = {};
  gridPositions.forEach((position) => {
    components[position] = (props) => (
      <OverlayComponent key={position} {...props} position={position} />
    );
  });

  return components;
};

return (
  <CameraContainer>
    <Camera
      audio={false}
      screenshotFormat="image/jpeg"
      videoConstraints={{
        facingMode: "environment",
      }}
      overlayComponents={createOverlayComponents()}
    />
  </CameraContainer>
);
