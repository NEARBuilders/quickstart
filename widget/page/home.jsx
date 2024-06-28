const { href } = VM.require("${alias_old}/widget/lib.url") || {
  href: () => {},
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Button = styled.button``;

return (
  <Container>
    <Link
      to={href({
        widgetSrc: "${config_index}",
        params: {
          page: "camera",
        },
      })}
    >
      <Button>📷 Camera</Button>
    </Link>
  </Container>
);
