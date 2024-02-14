import React from 'react'
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <section>
        <div className="main">
          <div className="container">
            <header>
              <div className="d-flex align-items-center justify-content-between">
                <div className="logo">
                  <h1>GP<span>.</span></h1>
                </div>
                <ul className="menu d-flex mt-4  pb-2">
                  <li>
                    <a href="#" className="one text-decoration-none p-3">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none p-3 text-white">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none p-3 text-white">Services</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none p-3 text-white">Portfolio</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none p-3 text-white">Team</a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none p-3 text-white">Drop Down<i class="ri-arrow-down-s-line"></i></a>
                  </li>
                  <li>
                    <a href="#" className="text-decoration-none p-3 text-white">Contact</a>
                  </li>
                </ul>
                <div className="nav-bar">
                  <Button variant="outline-warning">Get Started</Button>{' '}
                </div>
              </div>
            </header>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header