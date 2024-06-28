const Container = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  border: 1px solid #ccc;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Credits = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
`;

return (
  <Container>
    <Links>
      <LeftMenu>
        <div>Logo Placeholder</div>
        <p>Footer Description</p>
        <SocialIcons>
          <div>Icon 1</div>
          <div>Icon 2</div>
          <div>Icon 3</div>
        </SocialIcons>
      </LeftMenu>
    </Links>
    <Credits>
      <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
    </Credits>
  </Container>
);
