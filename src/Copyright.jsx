import React from 'react'

export default function Copyright() {
    return (
        <footer className="center">
        <div className="copyright">
          <br />
          This work is licensed under a{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
            Creative Commons Attribution 3.0 Unported License
          </a>
          <a rel="license" href="http://creativecommons.org/licenses/by/3.0/">
            <img
              alt="Creative Commons License"
              className="cimage"
              src="https://i.creativecommons.org/l/by/3.0/80x15.png"
            />
          </a>
        </div>
      </footer>
    );
}