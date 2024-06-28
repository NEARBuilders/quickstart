const { href } = VM.require("${alias_old}/widget/lib.url") || {
  href: () => {},
};

const NavContainer = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #ccc;
  @media (max-width: 768px) {
    border: none;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const NavLogo = styled.div`
  // Add your logo styling here
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  &.active {
    font-weight: bold;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 1rem;
    z-index: 1000;
  }
`;

const Button = styled.button``;

const Navbar = ({ routes, currentPage, accountId }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const renderNavLinks = () =>
    Object.entries(routes).map(
      ([key, route]) =>
        !route.hide && (
          <NavLink key={key} href={`#/${key}`} className={currentPage === key ? "active" : ""}>
            {route.init.name}
          </NavLink>
        )
    );

  const ViewSourceButton = ({ currentPage }) => (
    <Link
      to={href({
        widgetSrc: "${config_index}",
        params: {
          page: "inspect",
          widgetPath: currentPage,
        },
      })}
    >
      <Button>View Source</Button>
    </Link>
  );

  return (
    <NavContainer>
      <NavContent>
        <Link
          to={href({
            widgetSrc: "${config_index}",
          })}
        >
          <NavLogo>
            <p>Logo</p>
          </NavLogo>
        </Link>
        <NavActions>
          <ViewSourceButton currentPage={routes[currentPage].path} />
          <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
        </NavActions>
      </NavContent>
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileMenuButton onClick={toggleMobileMenu}>✕</MobileMenuButton>
        <ViewSourceButton currentPage={routes[currentPage].path} />
      </MobileMenu>
    </NavContainer>
  );
};

return <Navbar routes={props.routes} currentPage={props.page} accountId={context.accountId} />;
