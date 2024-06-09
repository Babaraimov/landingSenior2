import React from "react";
import scss from "./PrivacyPoilcy.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function PrivacyPoilcy() {
  let anchors = document.querySelectorAll('header a[href*="#"]');

  //   let animAction = document.querySelectorAll("__action");

  //   if (animAction.length > 0) {
  //     window.addEventListener("scroll", animOnAction);
  //     function animOnAction() {
  //       for (let i = 0; i < animAction.length; i++) {
  //         const animItem = animAction[i];
  //         const animItenHeight = animItem.offsetHeight;
  //         const animItemOffset = offset(animItem).top;
  //         const animStart = 4;

  //         let animItemPoint = window.innerHeight - animItenHeight / animStart;
  //         if (animItenHeight > window.innerHeight) {
  //           animItemPoint = window.innerHeight - window.innerHeight / animStart;
  //         }
  //         if (
  //           window.scrollY > animItemOffset - animItemPoint &&
  //           window.scrollY < animItemOffset + animItenHeight
  //         ) {
  //           animItem.classList.add("__active");
  //         } else {
  //           animItem.classList.remove("__active");
  //         }
  //       }
  //     }
  //     function offset(el) {
  //       const rect = el.getBoundingClientRect(),
  //         scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  //       scrollTop = window.scrollY || document.documentElement.scrollTop;
  //       return {
  //         top: rect.top + scrollTop,
  //         left: rect.left + scrollLeft,
  //       };
  //     }
  //     setTimeout(() => {
  //       animOnAction();
  //     }, 300);
  //   }

  for (let anchor of anchors) {
    if (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = anchor.getAttribute("href");
        document.querySelector("" + anchorId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className={scss.main__PrivacyPoilcy}>
          <div className={scss.main__texts}>
            <h1 className={scss.main__texts__salesline}>
              Salesline - Privacy Policy
            </h1>
            <h6 className={scss.main__texts__last}>
              Last Updated May 05, 2022
            </h6>
          </div>
          <div className={scss.main__informations}>
            <div className={scss.main__informations__margin}></div>
            <div className={scss.main__informations__fixed}>
              <header>
                <ul className={scss.main__informations__fixed__ul}>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#Introductions"
                    >
                      Introductions
                    </a>
                  </li>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#OurValues"
                    >
                      Our Valuesa
                    </a>
                  </li>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#WhyWe"
                    >
                      Why we process your information
                    </a>
                  </li>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#YourRights"
                    >
                      Your rights over your information
                    </a>
                  </li>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#WhereWe"
                    >
                      Where we send your information
                    </a>
                  </li>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#HowWe"
                    >
                      How we protect your information
                    </a>
                  </li>
                  <li>
                    <a
                      className={scss.main__informations__fixed__ul__navText}
                      href="#HowYou"
                    >
                      How you can reach us
                    </a>
                  </li>
                </ul>
              </header>
            </div>
            <div className={scss.main__informations__texts}>
              <div className={scss.main__informations__texts__introductions}>
                <h2
                  className={
                    scss.main__informations__texts__introductions__info
                  }
                  id="Introductions"
                >
                  Introductions
                </h2>
                <p
                  className={
                    scss.main__informations__texts__introductions__info__miniInfo
                  }
                >
                  In our mission to make commerce better for everyone at
                  Salesline, we collect and use information about you. This
                  Privacy Policy will help you better understand how we collect,
                  use, and share your personal information. If we change our
                  privacy practices, we may update this privacy policy. If any
                  changes are significant, we will let you know (for example,
                  through the Salesline admin or by email).
                </p>
              </div>
              <div className={scss.main__informations__texts__ourValues}>
                <h2
                  id="OurValues"
                  className={scss.main__informations__texts__ourValues__info}
                >
                  Our Values
                </h2>
                <p
                  className={
                    scss.main__informations__texts__ourValues__info__miniInfo
                  }
                >
                  Trust is the foundation of the Salesline and includes trusting
                  us to do the right thing with your information. Three main
                  values guide us as we develop our products and services. These
                  values should help you better understand how we think about
                  your information and privacy. <br />
                  <span
                    className={
                      scss.main__informations__texts__ourValues__info__miniInfo__span
                    }
                  >
                    Your information belongs to you
                  </span>{" "}
                  <br />
                  We carefully analyze what types of information we need to
                  provide our services, and we try to limit the information we
                  collect to only what we really need. Where possible, we delete
                  or anonymize this information when we no longer need it. When
                  building and improving our products, our engineers work
                  closely with our privacy and security teams to build with
                  privacy in mind. In all of this work our guiding principle is
                  that your information belongs to you, and we aim to only use
                  your information to your benefit. <br />
                  <span
                    className={
                      scss.main__informations__texts__ourValues__info__miniInfo__span
                    }
                  >
                    We protect your information from others
                  </span>{" "}
                  <br />
                  If a third party requests your personal information, we will
                  refuse to share it unless you give us permission or we are
                  legally required. When we are legally required to share your
                  personal information, we will tell you in advance, unless we
                  are legally forbidden. <br />
                  <span
                    className={
                      scss.main__informations__texts__ourValues__info__miniInfo__span
                    }
                  >
                    We help merchants and partners meet their privacy
                    obligations
                  </span>
                  <br />
                  Many of the merchants and partners using Salesline do not have
                  the benefit of a dedicated privacy team, and it is important
                  to us to help them meet their privacy obligations. To do this,
                  we try to build our products and services so they can easily
                  be used in a privacy-friendly way. We also provide detailed
                  FAQs, documentation and whitepapers covering the most
                  important privacy topics, and respond to privacy-related
                  questions we receive.
                </p>
              </div>
              <div className={scss.main__informations__texts__why}>
                <h2
                  id="WhyWe"
                  className={scss.main__informations__texts__why__info}
                >
                  Why we process your informations
                </h2>
                <p
                  className={
                    scss.main__informations__texts__why__info__miniInfo
                  }
                >
                  We generally process your information when we need to do so to
                  fulfill a contractual obligation (for example, to process your
                  subscription payments to use the Salesline platform), or where
                  we or someone we work with needs to use your personal
                  information for a reason related to their business (for
                  example, to provide you with a service). We only process
                  personal information for these “legitimate interests” after
                  considering the potential risks to your privacy—for example,
                  by providing clear transparency into our privacy practices,
                  offering you control over your personal information where
                  appropriate, limiting the information we keep, limiting what
                  we do with your information, who we send your information to,
                  how long we keep your information, or the technical measures
                  we use to protect your information.
                </p>
              </div>
              <div className={scss.main__informations__texts__you}>
                <h2
                  id="YourRights"
                  className={scss.main__informations__textsyou__info}
                >
                  You right over your informations
                </h2>
                <p
                  className={scss.main__informations__textsyou__info__miniInfo}
                >
                  We believe you should be able to access and control your
                  personal information no matter where you live. Depending on
                  how you use Salesline, you may have the right to request
                  access to, correct, amend, delete, port to another service
                  provider, restrict, or object to certain uses of your personal
                  information (for example, direct marketing). We will not
                  charge you more or provide you with a different level of
                  service if you exercise any of these rights. If you buy
                  something from a Salesline-powered store and wish to exercise
                  these rights over information about your purchase, you need to
                  directly contact the merchant you interacted with. We are only
                  a processor on their behalf, and cannot decide how to process
                  their information. We will of course help our merchants to
                  fulfill these requests by giving them the tools to do so and
                  by answering their questions.
                </p>
              </div>
              <div className={scss.main__informations__texts__where}>
                <h2
                  id="WhereWe"
                  className={scss.main__informations__texts__where__info}
                >
                  Where we send your information
                </h2>
                <p
                  className={
                    scss.main__informations__texts__where__info__miniInfo
                  }
                >
                  We are a Canadian company, but we work with and process data
                  about individuals across the world. To operate our business,
                  we may send your personal information outside of your state,
                  province, or country, including to the United States. This
                  data may be subject to the laws of the countries where we send
                  it. When we send your information across borders, we take
                  steps to protect your information, and we try to only send
                  your information to countries that have strong data protection
                  laws.
                </p>
              </div>
              <div className={scss.main__informations__texts__how}>
                <h2
                  className={scss.main__informations__texts__how__info}
                  id="HowWe"
                >
                  How we protect your information
                </h2>
                <p
                  className={
                    scss.main__informations__texts__how__info__miniInfo
                  }
                >
                  Our teams work tirelessly to protect your information, and to
                  ensure the security and integrity of our platform. We also
                  have independent auditors assess the security of our data
                  storage and systems that process financial information.
                  However, we all know that no method of transmission over the
                  Internet, and method of electronic storage, can be 100%
                  secure. This means we cannot guarantee the absolute security
                  of your personal information. You can find more information
                  about our security measures at
                  https://www.salesline.com/security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPoilcy;
