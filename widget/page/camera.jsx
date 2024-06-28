const CameraContainer = styled.div`
  /* width: 600px; */
  height: 600px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
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

const OverlayComponent = ({ position, getScreenshot }) => (
  <div
    style={{
      backgroundColor: getRandomColor(),
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
    }}
  >
    <button onClick={getScreenshot} style={{ color: "white" }}>
      {position}
    </button>
  </div>
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
    components[position] = (props) => <OverlayComponent key={position} {...props} position={position} />;
  });

  return components;
};

return (
  <CameraContainer>
    <Camera
      audio={false}
      screenshotFormat="image/jpeg"
      videoConstraints={{
        facingMode: "user",
      }}
      overlayComponents={createOverlayComponents()}
    />
  </CameraContainer>
);
