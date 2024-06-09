import FooterIcon from "../../assets/Icons/FooterIcon";
import scss from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <div className="container">
        <div className={scss.footer}>
          <hr className={scss.footer__hr} />
          <h6 className={scss.footer__text}>
            <FooterIcon />
            Salesline 2022. Powered by Unpixel Design
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;
