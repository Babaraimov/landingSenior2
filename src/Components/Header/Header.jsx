import scss from "./Header.module.scss";
import LogoIcon from "../../assets/Icons/LogoIcon";
import VectorBottom from "../../assets/Icons/VectorBottom";

function Header() {
  return (
    <div className={scss.headerMain}>
      <div className={scss.mainLogo}>
        <LogoIcon />
      </div>
      <div className={scss.navbars}>
        <ul className={scss.navbars__ul}>
          <li className={scss.navbars__Item}>
            <a className={scss.navbars__Item__products} href="">
              Products <VectorBottom />
            </a>
          </li>
          <li className={scss.navbars__Item}>
            <a className={scss.navbars__Item__features} href="">
              Features
            </a>
          </li>
          <li className={scss.navbars__Item}>
            <a className={scss.navbars__Item__pricing} href="">
              Pricing
            </a>
          </li>
          <li className={scss.navbars__Item}>
            <a className={scss.navbars__Item__resources} href="">
              Resources <VectorBottom />
            </a>
          </li>
          <li className={scss.navbars__Item}>
            <a className={scss.navbars__Item__blog} href="">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className={scss.buttons}>
        <button className={scss.buttons__header}>Login</button>
        <button className={scss.buttons__header__green}>
          Start free trial
        </button>
      </div>
    </div>
  );
}

export default Header;
