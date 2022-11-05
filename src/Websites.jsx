import React from "react";

function Websites() {
  return (
    <div>
      <nav>
        <p>
          <a
            href="https://tourist-attractions-9c3ff.web.app/"
            target="jsx-no-target-blank"
          >
            Unpopular Tourist Countries
          </a>
          <p>The first react site I made and deployed for testing</p>
          <a href="https://foss-for-us.web.app/" target="jsx-no-target-blank">
            Foss for us
          </a>
          <p>
            A website that tries to help people instead for just being a test
          </p>
          <a href="https://github.com/Igo-Cigo" target="jsx-no-target-blank">
            GitHub
          </a>
          <p>Visit my GitHub to see my non website projects</p>
          <hr />
          <div className="col-sm-12 text-center">
            <img
              src="/images/uta.png"
              alt="unpopular attractions"
              className="center-block w-25 mx-3 border border-2"
            />
            <img
              src="/images/ffu.png"
              alt="foss-for-us"
              className="center-block w-25 mx-3 border border-2"
            />
          </div>
        </p>
      </nav>
    </div>
  );
}

export default Websites;
