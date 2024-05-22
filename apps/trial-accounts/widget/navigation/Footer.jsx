const { Button } = VM.require("abdullahi3000.near/widget/components") || {
  Button: () => <></>,
};

const logoLink =
  "https://res.cloudinary.com/dtt0cjt51/image/upload/v1711122280/cafg8h33bpq15uugd8ta.png";

const Container = styled.div`
  padding: 32px 50px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  background-color: #ebeaea;

  @media screen and (max-width: 768px) {
    padding: 32px 20px;
    gap: 40px;
  }
`;

const Card = styled.div`
  display: flex;
  padding: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;

  border-radius: 16px;
  border: 1px solid var(--Gradient-1, #2287C2);
  background-color: #0b0c14;
  box-shadow: 4px 24px 48px 0px rgba(249, 225, 122, 0.05);

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 20px;
  }

  h3 {
    color: var(--paleta-escolhida-ffffff, #fff);
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 48px;
    line-height: normal;
    text-wrap: balance;
    margin: 0;

    span {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 24px 20px;
    gap: 30px;

    img {
      width: 100px;
      height: 100px;
    }

    h3 {
      font-size: 28px;
    }
  }
`;

const Logo = styled.img`
  height: 200px;
  width: max-content;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

const FooterContainer = styled.div`
  padding: 32px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  p {
    color: var(--b-0-b-0-b-0, var(--White-50, #6e6d6d));
    text-align: center;
    font-family: "InterVariable", sans-serif;
    font-size: 16px;
    line-height: 170%; /* 27.2px */
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 14px;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    font-size: 24px;
    color: #000;
    text-decoration: none;
    transition: all 300ms;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8 2.75H1L9.26086 13.7645L1.44995 22.7499H4.09998L10.4883 15.401L16 22.75H23L14.3917 11.2723L21.8001 2.75H19.1501L13.1643 9.63578L8 2.75ZM17 20.75L5 4.75H7L19 20.75H17Z"
      fill="black"
    />
  </svg>
);

  return (
    <Container className="container-xl">
      {/* {!noBanner && (
        <Card>
          <div className="d-flex flex-column align-items-center">
            <img src={logoLink} />
            <h3>
              Let{"’"}s Make <span>Waves!</span>
            </h3>
          </div>
          <a href="https://near.social/abdullahi3000.near/widget/app?page=joinUs">
            <Button variant="primary" noLink={true}>
              Join Now
            </Button>
          </a>
        </Card>
      )} */}
      <FooterContainer>
        <LinksContainer>
          <a
            href="https://twitter.com/harmonicguild"
            className="d-flex align-items-center"
            target="_blank"
          >
            <XIcon />
          </a>
          <a href="https://harmonicguild.io" target="_blank">
            <i className="bi bi-globe"></i>
          </a>
          <a href="https://t.me/harmoniccommunity" target="_blank">
            <i className="bi bi-telegram"></i>
          </a>
          <a href="https://github.com/Harmonic-Guild" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </LinksContainer>
        <p>©{new Date().getFullYear()} Harmionic Guild- All rights reserved</p>
      </FooterContainer>
    </Container>
  );

