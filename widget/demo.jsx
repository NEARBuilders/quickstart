const Button = styled.button``;
const [elements, setElements] = useState([]);

const addElement = () => {
  setElements([
    ...elements,
    () => (
      <Widget src="${config_account}/widget/page.camera" />
      // <Camera
      //   audio={false}
      //   screenshotFormat="image/jpeg"
      //   videoConstraints={{
      //     facingMode: "environment",
      //   }}
      // />
    ),
  ]);
};

const removeElement = () => {
  setElements(elements.slice(0, -1));
};

return (
  <>
    <div>
      <Button onClick={addElement}>add</Button>
      <Button onClick={removeElement}>remove</Button>
    </div>
    <Widget src="${config_account}/widget/AdaptiveGrid" props={{ elements }} />
  </>
);
