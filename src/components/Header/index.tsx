import { Menu, Row, Col } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";
import cartImg from "../../Assets/images/cart.svg";
const AppLogo = <img className="logo-img" alt="App Logo" src={Logo} />;
const CartImg = <img className="cart-icon" alt="Cart" src={cartImg} />;

function AppHeader() {
  return (
    <Row className="app-header shadow-btm flex">
      <Col span={6} className="logo">
        {AppLogo}
        <Link className="navbar-brand" to="/"></Link>
      </Col>

      <Col span={14}>
        <Menu
          className="nav-menu"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="Home">
            <Link to="/home" className="link medium">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="Products">
            <Link to="/products" className="link medium">
              Products
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={4} className="action-icon">
        <Col className="links">
          <Link to="/sign-in" className="link mr16  medium">
            SingIn
          </Link>
          <Link to="/register" className="link medium">
            Register
          </Link>
        </Col>
        <Col className="cart">
          {CartImg}
          <span>0 Items</span>
        </Col>
      </Col>
    </Row>
  );
}

export default AppHeader;
