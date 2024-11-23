import React from 'react'

const Header = () => {
  return (
    <>
  {/* Hello world */}
  <div className="wp-site-blocks">
    <header className="wp-block-template-part">
      <div
        className="wp-block-group has-background is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          backgroundColor: "#151f29",
          paddingTop: 30,
          paddingRight: 30,
          paddingBottom: 30,
          paddingLeft: 30
        }}
      >
        <div className="wp-block-group alignwide is-horizontal is-content-justification-space-between is-layout-flex wp-container-core-group-layout-4 wp-block-group-is-layout-flex">
          <div
            className="wp-block-group is-content-justification-left is-nowrap is-layout-flex wp-container-core-group-layout-2 wp-block-group-is-layout-flex"
            style={{
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0
            }}
          >
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-1 wp-block-group-is-layout-flow">
              <h1 className="wp-block-site-title">
                <a
                  href="https://web5lab.net"
                  target="_self"
                  rel="home"
                  aria-current="page"
                >
                  web5lab
                </a>
              </h1>
            </div>
          </div>
          <div className="wp-block-group alignwide is-nowrap is-layout-flex wp-container-core-group-layout-3 wp-block-group-is-layout-flex">
            <ul
              className="wp-block-social-links has-small-icon-size has-icon-color is-style-logos-only is-content-justification-center is-layout-flex wp-container-core-social-links-layout-1 wp-block-social-links-is-layout-flex"
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              <li
                style={{ color: "#ffffff" }}
                className="wp-social-link wp-social-link-github has-white-color wp-block-social-link"
              >
                <a
                  href="https://github.com/web5lab"
                  className="wp-block-social-link-anchor"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833 c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z" />
                  </svg>
                  <span className="wp-block-social-link-label screen-reader-text">
                    https://github.com/web5lab
                  </span>
                </a>
              </li>
              <li
                style={{ color: "#ffffff" }}
                className="wp-social-link wp-social-link-mail has-white-color wp-block-social-link"
              >
                <a
                  href="mailto:dev@web5lab.net"
                  className="wp-block-social-link-anchor"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M19,5H5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2zm.5,12c0,.3-.2.5-.5.5H5c-.3,0-.5-.2-.5-.5V9.8l7.5,5.6,7.5-5.6V17zm0-9.1L12,13.6,4.5,7.9V7c0-.3.2-.5.5-.5h14c.3,0,.5.2.5.5v.9z" />
                  </svg>
                  <span className="wp-block-social-link-label screen-reader-text">
                    dev@web5lab.net
                  </span>
                </a>
              </li>
              <li
                style={{ color: "#ffffff" }}
                className="wp-social-link wp-social-link-linkedin has-white-color wp-block-social-link"
              >
                <a
                  href="https://www.linkedin.com/company/web5lab"
                  className="wp-block-social-link-anchor"
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                  </svg>
                  <span className="wp-block-social-link-label screen-reader-text">
                    https://www.linkedin.com/company/
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <div
      className="wp-block-group alignfull is-layout-flow wp-container-core-group-layout-65 wp-block-group-is-layout-flow"
      style={{
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0
      }}
    >
      <div
        className="wp-block-cover"
        style={{
          paddingTop: "12vw",
          paddingRight: 30,
          paddingBottom: "12vw",
          paddingLeft: 30,
          minHeight: 631
        }}
      >
        <span
          aria-hidden="true"
          className="wp-block-cover__background has-background-dim-0 has-background-dim has-background-gradient"
          style={{
            background:
              "linear-gradient(90deg,rgb(34,31,60) 30%,rgba(155,81,224,0.09) 93%)"
          }}
        />
        <img
          width={1536}
          height={630}
          className="wp-block-cover__image-background wp-image-50"
          alt=""
          src="https://web5lab.net/wp-content/uploads/2023/01/Untitled-design.png"
          style={{ objectPosition: "66% 23%" }}
          data-object-fit="cover"
          data-object-position="66% 23%"
          srcSet="https://web5lab.net/wp-content/uploads/2023/01/Untitled-design.png 1536w, https://web5lab.net/wp-content/uploads/2023/01/Untitled-design-300x123.png 300w, https://web5lab.net/wp-content/uploads/2023/01/Untitled-design-1024x420.png 1024w, https://web5lab.net/wp-content/uploads/2023/01/Untitled-design-768x315.png 768w"
          sizes="(max-width: 1536px) 100vw, 1536px"
        />
        <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
          <div className="wp-block-group alignwide is-layout-constrained wp-block-group-is-layout-constrained">
            <div
              className="wp-block-group alignwide is-layout-flow wp-container-core-group-layout-9 wp-block-group-is-layout-flow"
              style={{
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <h3
                className="has-text-align-left has-primary-color has-text-color wp-block-heading"
                style={{ letterSpacing: 3, lineHeight: "1.5" }}
              >
                GLOBAL BLOCKCHAIN DEVELPOMENT COMPANY
              </h3>
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-6 wp-block-group-is-layout-flow"
                style={{ paddingTop: 20, paddingBottom: 20 }}
              >
                <h2
                  className="has-text-align-left has-white-color has-text-color has-extra-huge-font-size wp-block-heading"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "1.2"
                  }}
                >
                  Connecting
                </h2>
                <h2
                  className="has-text-align-left has-white-color has-text-color has-extra-huge-font-size wp-block-heading"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "1.2"
                  }}
                >
                  Web2 &amp; web3
                </h2>
              </div>
              <p className="has-body-text-color has-text-color">
                We Deliver Web2 &amp; Web3 Service All Over The World{" "}
              </p>
              <div
                className="wp-block-group is-layout-constrained wp-block-group-is-layout-constrained"
                style={{ paddingTop: 40 }}
              >
                <div className="wp-block-columns alignwide are-vertically-aligned-center is-not-stacked-on-mobile is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-container-core-column-layout-1 wp-block-column-is-layout-flow"
                    style={{
                      paddingTop: 0,
                      paddingRight: 0,
                      paddingBottom: 0,
                      paddingLeft: 0,
                      flexBasis: 150
                    }}
                  >
                    <div
                      className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-layout-1 wp-block-buttons-is-layout-flex"
                      style={{ marginTop: 0, marginBottom: 0 }}
                    >
                      <div className="wp-block-button is-style-fill">
                        <a
                          className="wp-block-button__link wp-element-button"
                          href="#"
                        >
                          Services
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                    <div className="wp-block-group is-content-justification-left is-nowrap is-layout-flex wp-container-core-group-layout-7 wp-block-group-is-layout-flex">
                      <div className="wp-block-buttons has-custom-font-size has-normal-font-size is-content-justification-center is-layout-flex wp-container-core-buttons-layout-2 wp-block-buttons-is-layout-flex">
                        <div className="wp-block-button">
                          <a
                            className="wp-block-button__link wp-element-button"
                            href="https://www.linkedin.com/company/web5lab"
                          >
                            Join Us.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p />
      <div
        className="wp-block-group has-background-secondary-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          borderStyle: "none",
          borderWidth: 0,
          paddingTop: 80,
          paddingRight: 30,
          paddingBottom: 80,
          paddingLeft: 30
        }}
      >
        <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-2 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-box-shadow has-tertiary-background-color has-background is-layout-constrained wp-container-core-group-layout-14 wp-block-group-is-layout-constrained"
              style={{
                borderStyle: "none",
                borderWidth: 0,
                borderRadius: 5,
                paddingTop: 50,
                paddingRight: 50,
                paddingBottom: 50,
                paddingLeft: 50
              }}
            >
              <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-layout-11 wp-block-group-is-layout-flex">
                <figure className="wp-block-image alignleft size-large is-resized has-custom-border">
                  <img
                    src="https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-1024x1024.png"
                    alt=""
                    className="wp-image-31"
                    style={{ borderRadius: 0 }}
                    width={91}
                    height={91}
                    srcSet="https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-1024x1024.png 1024w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-300x300.png 300w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-150x150.png 150w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-768x768.png 768w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1.png 1080w"
                    sizes="(max-width: 91px) 100vw, 91px"
                  />
                </figure>
              </div>
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-13 wp-block-group-is-layout-flow"
                style={{
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0
                }}
              >
                <h3
                  className="has-text-align-left wp-block-heading"
                  style={{
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 15,
                    marginLeft: 0
                  }}
                >
                  Reserch and Dev
                </h3>
                <p>
                  We Are Always Optimising Our Project And Dapps Day By Day and
                  also We Have 20+ Blockachain Specialist
                </p>
                <div
                  className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                  style={{ paddingTop: 15 }}
                >
                  <p
                    className="has-background-color has-text-color has-link-color"
                    style={{ textTransform: "uppercase" }}
                  >
                    <strong>
                      <a href="#">View More</a>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-box-shadow has-primary-background-color has-background is-layout-constrained wp-container-core-group-layout-17 wp-block-group-is-layout-constrained"
              style={{
                borderStyle: "none",
                borderWidth: 0,
                borderRadius: 5,
                paddingTop: 50,
                paddingRight: 50,
                paddingBottom: 50,
                paddingLeft: 50
              }}
            >
              <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-layout-15 wp-block-group-is-layout-flex">
                <figure className="wp-block-image alignleft size-large is-resized has-custom-border">
                  <img
                    src="https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-1024x1024.png"
                    alt=""
                    className="wp-image-31"
                    style={{ borderRadius: 0 }}
                    width={82}
                    height={82}
                    srcSet="https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-1024x1024.png 1024w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-300x300.png 300w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-150x150.png 150w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-768x768.png 768w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1.png 1080w"
                    sizes="(max-width: 82px) 100vw, 82px"
                  />
                </figure>
              </div>
              <h3 className="has-background-color has-text-color wp-block-heading">
                live Project
              </h3>
              <p className="has-background-color has-text-color">
                We Also Doing Live Project To Expolre Nft , Metaverse And Many
                More And We Are Also Running Shibx Web5dev And Cryptolab.store
              </p>
              <div
                className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                style={{ paddingTop: 15 }}
              >
                <p
                  className="has-background-color has-text-color has-link-color wp-elements-03a7e2240a269ba86c10f4aa39a6d84d"
                  style={{ textTransform: "uppercase" }}
                >
                  <strong>
                    <a href="#">View More</a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-box-shadow has-tertiary-background-color has-background is-layout-constrained wp-container-core-group-layout-21 wp-block-group-is-layout-constrained"
              style={{
                borderStyle: "none",
                borderWidth: 0,
                borderRadius: 5,
                paddingTop: 50,
                paddingRight: 50,
                paddingBottom: 50,
                paddingLeft: 50
              }}
            >
              <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-layout-18 wp-block-group-is-layout-flex">
                <figure className="wp-block-image alignleft size-large is-resized has-custom-border">
                  <img
                    src="https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-1024x1024.png"
                    alt=""
                    className="wp-image-31"
                    style={{ borderRadius: 0 }}
                    width={95}
                    height={95}
                    srcSet="https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-1024x1024.png 1024w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-300x300.png 300w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-150x150.png 150w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1-768x768.png 768w, https://web5lab.net/wp-content/uploads/2023/01/web5lab-1-1.png 1080w"
                    sizes="(max-width: 95px) 100vw, 95px"
                  />
                </figure>
              </div>
              <div
                className="wp-block-group is-layout-flow wp-container-core-group-layout-20 wp-block-group-is-layout-flow"
                style={{
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0
                }}
              >
                <h3
                  className="has-text-align-left wp-block-heading"
                  style={{
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 15,
                    marginLeft: 0
                  }}
                >
                  Truly Transparent Using Blockchain Technology
                </h3>
                <p>We Provide Truly Transparent System To Ensure Your Trust.</p>
                <div
                  className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                  style={{ paddingTop: 15 }}
                >
                  <p
                    className="has-background-color has-text-color has-link-color"
                    style={{ textTransform: "uppercase" }}
                  >
                    <strong>
                      <a href="#">View More</a>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wp-block-group has-background is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          backgroundColor: "#121a23",
          paddingTop: 100,
          paddingRight: 30,
          paddingBottom: 100,
          paddingLeft: 30
        }}
      >
        <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-4 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
              <figure className="wp-block-image size-full has-custom-border  no-margin">
                <img
                  src="https://web5lab.net/wp-content/themes/arc-fse/assets/images/hero-img.png"
                  alt=""
                  className="wp-image-71"
                  style={{ borderRadius: 0 }}
                />
              </figure>
            </div>
          </div>
          <div
            className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
            style={{
              paddingTop: 40,
              paddingRight: 40,
              paddingBottom: 40,
              paddingLeft: 40
            }}
          >
            <div className="wp-block-group alignwide is-layout-constrained wp-container-core-group-layout-26 wp-block-group-is-layout-constrained">
              <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-layout-24 wp-block-group-is-layout-flex">
                <p
                  className="has-primary-color has-text-color has-medium-font-size"
                  style={{ letterSpacing: 1 }}
                >
                  About Our Company
                </p>
              </div>
              <h2 className="has-huge-font-size wp-block-heading">
                Connecting <br />
                web2 and web3 together
              </h2>
              <p className="has-text-align-left">
                We Already worked with Global comapny{" "}
              </p>
              <div className="wp-block-columns is-layout-flex wp-container-core-columns-layout-3 wp-block-columns-is-layout-flex">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div className="wp-block-group is-layout-flow wp-container-core-group-layout-25 wp-block-group-is-layout-flow">
                    <h3 className="has-primary-color has-text-color has-huge-font-size wp-block-heading">
                      50 K
                    </h3>
                    <p>
                      Agency increased revenue
                      <br />
                      Through Fiver
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="wp-block-buttons is-content-justification-left is-layout-flex wp-container-core-buttons-layout-3 wp-block-buttons-is-layout-flex"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <div className="wp-block-button is-style-fill">
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="#"
                    style={{
                      paddingTop: 10,
                      paddingRight: 35,
                      paddingBottom: 10,
                      paddingLeft: 35
                    }}
                  >
                    Explore Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wp-block-group has-background-secondary-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          borderStyle: "none",
          borderWidth: 0,
          paddingTop: 100,
          paddingRight: 30,
          paddingBottom: 100,
          paddingLeft: 30
        }}
      >
        <div
          className="wp-block-group alignwide is-layout-flow wp-container-core-group-layout-31 wp-block-group-is-layout-flow"
          style={{ paddingBottom: 30 }}
        >
          <div
            className="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-layout-30 wp-block-group-is-layout-flex"
            style={{
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0
            }}
          >
            <div className="wp-block-group is-layout-constrained wp-container-core-group-layout-29 wp-block-group-is-layout-constrained">
              <div className="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-layout-28 wp-block-group-is-layout-flex">
                <p className="has-primary-color has-text-color">
                  Our Live Projects
                </p>
              </div>
              <h2
                className="has-text-align-center has-foreground-color has-text-color has-slider-title-font-size wp-block-heading"
                style={{ lineHeight: "1.3", textTransform: "capitalize" }}
              >
                projects Builts By Web5lab
              </h2>
            </div>
          </div>
        </div>
        <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-5 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-33 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={2940}
                  height={1602}
                  className="wp-block-cover__image-background wp-image-71"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM.png"
                  style={{ objectPosition: "47% 0%" }}
                  data-object-fit="cover"
                  data-object-position="47% 0%"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM.png 2940w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM-300x163.png 300w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM-1024x558.png 1024w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM-768x418.png 768w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM-1536x837.png 1536w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.46.48-PM-2048x1116.png 2048w"
                  sizes="(max-width: 2940px) 100vw, 2940px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-32 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      DexCrash
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      <a href="http://dexcrash.com" data-type="URL">
                        Decentlised And Transparent Crash Betting Platform
                      </a>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-35 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={2940}
                  height={1398}
                  className="wp-block-cover__image-background wp-image-102"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM.png"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM.png 2940w, https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM-300x143.png 300w, https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM-1024x487.png 1024w, https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM-768x365.png 768w, https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM-1536x730.png 1536w, https://web5lab.net/wp-content/uploads/2023/12/Screenshot-2023-12-11-at-4.03.57 PM-2048x974.png 2048w"
                  sizes="(max-width: 2940px) 100vw, 2940px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-34 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      Crypto Upi
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      Simplifying Crypto Payments
                      <br />
                      For EveryOne{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-37 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={2940}
                  height={1602}
                  className="wp-block-cover__image-background wp-image-74"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2.png"
                  style={{ objectPosition: "44% 0%" }}
                  data-object-fit="cover"
                  data-object-position="44% 0%"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2.png 2940w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2-300x163.png 300w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2-1024x558.png 1024w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2-768x418.png 768w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2-1536x837.png 1536w, https://web5lab.net/wp-content/uploads/2023/09/Screenshot-2023-09-24-at-9.47.33-PM-2-2048x1116.png 2048w"
                  sizes="(max-width: 2940px) 100vw, 2940px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-36 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      Crypto Mulltisender
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      <a
                        href="https://cryptomultisend.com/"
                        data-type="URL"
                        data-id="https://cryptomultisend.com/"
                      >
                        Crypto Multisender Tool For Crypto Project
                      </a>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-6 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-39 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover is-light has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-40 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={2500}
                  height={1336}
                  className="wp-block-cover__image-background wp-image-56"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1.png"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1.png 2500w, https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1-300x160.png 300w, https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1-1024x547.png 1024w, https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1-768x410.png 768w, https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1-1536x821.png 1536w, https://web5lab.net/wp-content/uploads/2023/02/Slice-1-1-2048x1094.png 2048w"
                  sizes="(max-width: 2500px) 100vw, 2500px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-38 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      Shibx Coin
                    </p>
                    <h3
                      className="has-text-align-left has-foreground-color has-text-color wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      decentralized utility based memes coin which will be
                      utilise in gambling
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-41 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{
                  paddingTop: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  minHeight: 302
                }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-40 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={1521}
                  height={730}
                  className="wp-block-cover__image-background wp-image-47"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/01/Screenshot-2023-01-29-075757.png"
                  style={{ objectPosition: "49% 13%" }}
                  data-object-fit="cover"
                  data-object-position="49% 13%"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/01/Screenshot-2023-01-29-075757.png 1521w, https://web5lab.net/wp-content/uploads/2023/01/Screenshot-2023-01-29-075757-300x144.png 300w, https://web5lab.net/wp-content/uploads/2023/01/Screenshot-2023-01-29-075757-1024x491.png 1024w, https://web5lab.net/wp-content/uploads/2023/01/Screenshot-2023-01-29-075757-768x369.png 768w"
                  sizes="(max-width: 1521px) 100vw, 1521px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-40 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      Xram Nft
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      Connecting Artist to Nft Worlds
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-42 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={1920}
                  height={1280}
                  className="wp-block-cover__image-background wp-image-59"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/02/code-g798ed054d_1920.jpg"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/02/code-g798ed054d_1920.jpg 1920w, https://web5lab.net/wp-content/uploads/2023/02/code-g798ed054d_1920-300x200.jpg 300w, https://web5lab.net/wp-content/uploads/2023/02/code-g798ed054d_1920-1024x683.jpg 1024w, https://web5lab.net/wp-content/uploads/2023/02/code-g798ed054d_1920-768x512.jpg 768w, https://web5lab.net/wp-content/uploads/2023/02/code-g798ed054d_1920-1536x1024.jpg 1536w"
                  sizes="(max-width: 1920px) 100vw, 1920px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <p className="has-text-align-left has-primary-color has-text-color">
                    Infinity Chain
                  </p>
                  <h3
                    className="has-text-align-left wp-block-heading"
                    style={{
                      marginTop: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 0
                    }}
                  >
                    a beta evm blockchain built for ai and data transparency
                    which will be used as transparent custom database solution
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-7 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-44 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={1920}
                  height={1280}
                  className="wp-block-cover__image-background wp-image-61"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/02/icon-4401251_1920.jpg"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/02/icon-4401251_1920.jpg 1920w, https://web5lab.net/wp-content/uploads/2023/02/icon-4401251_1920-300x200.jpg 300w, https://web5lab.net/wp-content/uploads/2023/02/icon-4401251_1920-1024x683.jpg 1024w, https://web5lab.net/wp-content/uploads/2023/02/icon-4401251_1920-768x512.jpg 768w, https://web5lab.net/wp-content/uploads/2023/02/icon-4401251_1920-1536x1024.jpg 1536w"
                  sizes="(max-width: 1920px) 100vw, 1920px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-43 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      Airdot
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      An Community Based Airdrop Platform
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-46 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={1280}
                  height={853}
                  className="wp-block-cover__image-background wp-image-58"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/02/code-gb4d2c1f5b_1280.jpg"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/02/code-gb4d2c1f5b_1280.jpg 1280w, https://web5lab.net/wp-content/uploads/2023/02/code-gb4d2c1f5b_1280-300x200.jpg 300w, https://web5lab.net/wp-content/uploads/2023/02/code-gb4d2c1f5b_1280-1024x682.jpg 1024w, https://web5lab.net/wp-content/uploads/2023/02/code-gb4d2c1f5b_1280-768x512.jpg 768w"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-45 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      Aicryptocreator
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      An Ai Based Erc20 token tool for Web3 community
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-48 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 0,
                paddingTop: 0,
                paddingRight: 0,
                // console.log(object)
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div
                className="wp-block-cover has-custom-content-position is-position-bottom-left grayscale image-zoom-hover"
                style={{ minHeight: 302 }}
              >
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-dim-80 has-background-dim wp-block-cover__gradient-background has-background-gradient"
                  style={{
                    background:
                      "linear-gradient(180deg,rgba(8,8,8,0.2) 8%,rgb(1,1,1) 100%)"
                  }}
                />
                <img
                  width={640}
                  height={640}
                  className="wp-block-cover__image-background wp-image-57"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/02/IMG_20220920_044235_277.jpg"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/02/IMG_20220920_044235_277.jpg 640w, https://web5lab.net/wp-content/uploads/2023/02/IMG_20220920_044235_277-300x300.jpg 300w, https://web5lab.net/wp-content/uploads/2023/02/IMG_20220920_044235_277-150x150.jpg 150w"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div
                    className="wp-block-group is-layout-flow wp-container-core-group-layout-47 wp-block-group-is-layout-flow"
                    style={{
                      borderRadius: 0,
                      paddingTop: 20,
                      paddingRight: 20,
                      paddingBottom: 20,
                      paddingLeft: 20
                    }}
                  >
                    <p className="has-text-align-left has-primary-color has-text-color">
                      nxtsale
                    </p>
                    <h3
                      className="has-text-align-left wp-block-heading"
                      style={{
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0
                      }}
                    >
                      An Evm based ico platform for crypto projects
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wp-block-group has-background-background-color has-background is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          borderStyle: "none",
          borderWidth: 0,
          paddingTop: 100,
          paddingRight: 30,
          paddingBottom: 100,
          paddingLeft: 30
        }}
      >
        <div
          className="wp-block-group alignwide is-layout-flow wp-container-core-group-layout-53 wp-block-group-is-layout-flow"
          style={{ paddingBottom: 30 }}
        >
          <div
            className="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-layout-52 wp-block-group-is-layout-flex"
            style={{
              paddingTop: 0,
              paddingRight: 0,
              paddingBottom: 0,
              paddingLeft: 0
            }}
          >
            <div className="wp-block-group is-layout-constrained wp-container-core-group-layout-51 wp-block-group-is-layout-constrained">
              <div className="wp-block-group is-content-justification-center is-nowrap is-layout-flex wp-container-core-group-layout-50 wp-block-group-is-layout-flex">
                <p className="has-primary-color has-text-color">Team Members</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-8 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-55 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 59,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div className="wp-block-cover is-light has-custom-content-position is-position-bottom-center grayscale image-zoom-hover">
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-background-color has-background-dim"
                />
                <img
                  width={1024}
                  height={1024}
                  className="wp-block-cover__image-background wp-image-86"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_eaf09711-09e0-4c77-94ef-7039d45ff603.png"
                  style={{ objectPosition: "50% 0%" }}
                  data-object-fit="cover"
                  data-object-position="50% 0%"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_eaf09711-09e0-4c77-94ef-7039d45ff603.png 1024w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_eaf09711-09e0-4c77-94ef-7039d45ff603-300x300.png 300w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_eaf09711-09e0-4c77-94ef-7039d45ff603-150x150.png 150w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_eaf09711-09e0-4c77-94ef-7039d45ff603-768x768.png 768w"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div className="wp-block-group is-layout-constrained wp-block-group-is-layout-constrained">
                    <p className="has-text-align-center has-primary-color has-text-color has-large-font-size">
                      FOUNDER AND BLOCKCHAIN DEV
                    </p>
                    <p className="has-text-align-center has-foreground-color has-text-color">
                      <a href="http://www.linkedin.com/in/helloshiva">shiva</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-57 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 59,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div className="wp-block-cover is-light has-custom-content-position is-position-bottom-center grayscale image-zoom-hover">
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-background-color has-background-dim"
                />
                <img
                  width={1024}
                  height={1024}
                  className="wp-block-cover__image-background wp-image-83"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_38fc6e2b-72ee-4fc7-93a1-4da2f7367c68.png"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_38fc6e2b-72ee-4fc7-93a1-4da2f7367c68.png 1024w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_38fc6e2b-72ee-4fc7-93a1-4da2f7367c68-300x300.png 300w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_38fc6e2b-72ee-4fc7-93a1-4da2f7367c68-150x150.png 150w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_38fc6e2b-72ee-4fc7-93a1-4da2f7367c68-768x768.png 768w"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div className="wp-block-group is-layout-constrained wp-block-group-is-layout-constrained">
                    <p className="has-text-align-center has-primary-color has-text-color has-large-font-size">
                      MARKETING HEAD
                    </p>
                    <p className="has-text-align-center has-foreground-color has-text-color">
                      JOE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
            <div
              className="wp-block-group alignwide has-shadow-dark has-white-background-color has-background is-layout-constrained wp-container-core-group-layout-59 wp-block-group-is-layout-constrained"
              style={{
                borderRadius: 59,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0
              }}
            >
              <div className="wp-block-cover is-light has-custom-content-position is-position-bottom-center grayscale image-zoom-hover">
                <span
                  aria-hidden="true"
                  className="wp-block-cover__background has-background-background-color has-background-dim"
                />
                <img
                  width={1024}
                  height={1024}
                  className="wp-block-cover__image-background wp-image-84"
                  alt=""
                  src="https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_8f6b7e76-0d91-4d68-bfd7-f7cdbc6ad74c.png"
                  data-object-fit="cover"
                  srcSet="https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_8f6b7e76-0d91-4d68-bfd7-f7cdbc6ad74c.png 1024w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_8f6b7e76-0d91-4d68-bfd7-f7cdbc6ad74c-300x300.png 300w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_8f6b7e76-0d91-4d68-bfd7-f7cdbc6ad74c-150x150.png 150w, https://web5lab.net/wp-content/uploads/2023/09/damisha22_cute_little_dragon_cartoon_disney_style_color_8f6b7e76-0d91-4d68-bfd7-f7cdbc6ad74c-768x768.png 768w"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
                <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
                  <div className="wp-block-group is-layout-constrained wp-block-group-is-layout-constrained">
                    <p className="has-text-align-center has-primary-color has-text-color has-large-font-size">
                      RESRACH AND DEVELOPMENT{" "}
                    </p>
                    <p className="has-text-align-center has-foreground-color has-text-color">
                      Yashi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="wp-block-group has-foreground-background-color has-background is-layout-constrained wp-container-core-group-layout-64 wp-block-group-is-layout-constrained"
        style={{
          paddingTop: 0,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 0
        }}
      >
        <div className="wp-block-cover alignfull">
          <span
            aria-hidden="true"
            className="wp-block-cover__background has-background-background-color has-background-dim-90 has-background-dim"
          />
          <img
            className="wp-block-cover__image-background wp-image-103"
            alt=""
            src="https://web5lab.net/wp-content/themes/arc-fse/assets/images/promotinal-bg.jpg"
            style={{ objectPosition: "54% 17%" }}
            data-object-fit="cover"
            data-object-position="54% 17%"
          />
          <div className="wp-block-cover__inner-container is-layout-flow wp-block-cover-is-layout-flow">
            <div className="wp-block-group alignwide is-layout-constrained wp-block-group-is-layout-constrained">
              <div
                className="wp-block-group alignwide has-background-color has-text-color is-layout-flow wp-container-core-group-layout-62 wp-block-group-is-layout-flow"
                style={{ paddingTop: 150, paddingBottom: 150 }}
              >
                <p className="has-text-align-center has-primary-color has-text-color has-content-heading-font-size">
                  Be Provide Best Solution According To Your Requirements
                </p>
                <h2
                  className="alignwide has-text-align-center has-foreground-color has-text-color has-extra-huge-font-size wp-block-heading"
                  style={{ fontStyle: "normal", fontWeight: 700 }}
                >
                  The Best Solutions
                </h2>
                <div
                  className="wp-block-group is-layout-flow wp-block-group-is-layout-flow"
                  style={{ paddingTop: 30 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="wp-block-template-part">
      <div
        className="wp-block-group alignfull has-text-color has-background has-link-color wp-elements-123aaabfc6f71c4b468addb38089029d is-layout-constrained wp-container-core-group-layout-72 wp-block-group-is-layout-constrained"
        style={{
          color: "#929ba8",
          backgroundColor: "#0d141a",
          paddingTop: "4rem",
          paddingRight: 30,
          paddingBottom: "2rem",
          paddingLeft: 30
        }}
      >
        <div
          className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-layout-9 wp-block-columns-is-layout-flex"
          style={{ paddingBottom: "3rem" }}
        >
          <div
            className="wp-block-column is-layout-flow wp-container-core-column-layout-21 wp-block-column-is-layout-flow"
            style={{
              paddingTop: 20,
              paddingRight: 20,
              paddingBottom: 20,
              paddingLeft: 0,
              flexBasis: "22%"
            }}
          >
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-66 wp-block-group-is-layout-flow">
              <h3
                className="has-white-color has-text-color wp-block-heading"
                style={{
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 500
                }}
              >
                About Us
              </h3>
            </div>
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-67 wp-block-group-is-layout-flow">
              <p className="has-small-font-size">
                We have team of 20+ Blockachain Team That is Always Available To
                Deliver Something Good{" "}
              </p>
            </div>
          </div>
          <div
            className="wp-block-column is-layout-flow wp-container-core-column-layout-22 wp-block-column-is-layout-flow"
            style={{ paddingTop: 20 }}
          >
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-68 wp-block-group-is-layout-flow">
              <h3
                className="has-white-color has-text-color wp-block-heading"
                style={{
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 500
                }}
              >
                Pages
              </h3>
            </div>
            <ul>
              <li>
                <a
                  style={{
                    fontFamily: "var(--wp--preset--font-family--poppins)",
                    fontSize: "var(--wp--preset--font-size--medium)",
                    fontWeight:
                      "var(--wp--custom--typography--font-weight--normal)"
                  }}
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>Contact </li>
              <li>Services</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div
            className="wp-block-column is-layout-flow wp-container-core-column-layout-23 wp-block-column-is-layout-flow"
            style={{ paddingTop: 20 }}
          >
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-69 wp-block-group-is-layout-flow">
              <h3
                className="has-white-color has-text-color wp-block-heading"
                style={{
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 500
                }}
              >
                Services
              </h3>
            </div>
            <ul>
              <li>Marketing</li>
              <li>Blockchain Development</li>
              <li>Blockchain Consultant</li>
              <li>Dapp Development</li>
              <li>BlockChain Automation</li>
            </ul>
          </div>
          <div
            className="wp-block-column is-layout-flow wp-container-core-column-layout-24 wp-block-column-is-layout-flow"
            style={{ paddingTop: 20 }}
          >
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-70 wp-block-group-is-layout-flow">
              <h3
                className="has-white-color has-text-color wp-block-heading"
                style={{
                  fontSize: "1.5rem",
                  fontStyle: "normal",
                  fontWeight: 500
                }}
              >
                Contact Us
              </h3>
            </div>
            <div className="wp-block-group is-layout-flow wp-container-core-group-layout-71 wp-block-group-is-layout-flow">
              <p>dev@web5lab.net</p>
              <p>shiva@web5lab.net</p>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div
        className="wp-block-group alignfull has-background-color has-text-color has-background has-link-color wp-elements-7fd018ceb69b53e3049e73b070f77c39 is-layout-constrained wp-block-group-is-layout-constrained"
        style={{
          backgroundColor: "#0d141a",
          paddingTop: 25,
          paddingRight: 30,
          paddingBottom: 25,
          paddingLeft: 30
        }}
      >
        <div className="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-container-core-group-layout-73 wp-block-group-is-layout-flex">
          <p className="has-text-align-center has-white-color has-text-color has-link-color wp-elements-a53bcd2507e7a6962f49dd276457a904">
            <a
              rel="nofollow noopener"
              href="https://wordpress.org"
              target="_blank"
            >
              {" "}
              Copyright©2022
            </a>{" "}
            web5lab
            <a
              rel="nofollow noopener"
              href="https://wordpress.org"
              target="_blank"
            >
              {" "}
            </a>
          </p>
          <ul className="wp-block-social-links has-small-icon-size has-icon-color is-style-logos-only is-content-justification-left is-layout-flex wp-container-core-social-links-layout-2 wp-block-social-links-is-layout-flex">
            <li
              style={{ color: "#fafafa" }}
              className="wp-social-link wp-social-link-twitter has-foreground-color wp-block-social-link"
            >
              <a
                rel=" noopener nofollow"
                target="_blank"
                href="https://#web5lab"
                className="wp-block-social-link-anchor"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z" />
                </svg>
                <span className="wp-block-social-link-label screen-reader-text">
                  Twitter
                </span>
              </a>
            </li>
            <li
              style={{ color: "#fafafa" }}
              className="wp-social-link wp-social-link-linkedin has-foreground-color wp-block-social-link"
            >
              <a
                rel=" noopener nofollow"
                target="_blank"
                href="https://#web5dev"
                className="wp-block-social-link-anchor"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
                </svg>
                <span className="wp-block-social-link-label screen-reader-text">
                  LinkedIn
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</>

  )
}

export default Header
