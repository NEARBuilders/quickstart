const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const [image, setImage] = useState(null);
const backgroundColor = image ? "transparent" : getRandomColor();

const Button = styled.button``;

const { getStore } = props;

return (
  <div
    style={{
      backgroundColor: backgroundColor,
      backgroundImage: image ? `url(${image})` : "none",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      opacity: image ? 0.8 : 0.5,
      flexGrow: 1,
    }}
  >
    {JSON.stringify(getStore())}
    {/* <Button
      onClick={() => {
        const img = getScreenshot();
        if (img) {
          setImage(img);
        }
      }}
    >
      
    </Button> */}
  </div>
);
