import { HeaderBar, Hero, Logo, Title } from "./styles";
import bannerImg from "../../assets/images/hero.png";
import logo from "../../assets/images/logo.png";

const Header = () => (
  <HeaderBar>
    <Hero style={{ backgroundImage: `url(${bannerImg})` }}>
      <Logo src={logo} alt="EFOOD" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </Hero>
  </HeaderBar>
);

export default Header;
