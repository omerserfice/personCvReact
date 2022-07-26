import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Container,NavbarBrand,Nav,NavLink } from 'react-bootstrap';
import './Header.css'
import logo from '../../Assets/img/logo.png'
const Header = () => {
      
  return(
   <>
      <header className='navbar fixed-top' id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light container">
            <div class="container-fluid">
            <a className="navbar-brand text-light" href="/">Ömer <span className='logo-span text-danger'>Serfice</span></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a aria-current="page" href="/about">Ben Kimim?</a>
                  </li>
                  <li class="nav-item">
                    <a href="/experience">Deneyim</a>
                  </li>
                  <li class="nav-item">
                    <a href="/education">Eğitim</a>
                  </li>
                  <li class="nav-item">
                    <a href="/ability">Yetenek</a>
                  </li>
                  <li class="nav-item">
                    <a href="/certificate">Sertifikalarım</a>
                  </li>
                  <li class="nav-item">
                    <a href="/project">Projeler</a>
                  </li>
                  <li class="nav-item">
                    <a href="/contact">İletişim</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </header>
   </>
  );
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1px 1px";
    document.getElementById("navbar").style.display = "block";
    document.getElementById("navbar").style.backgroundColor = "#30475E";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("navbar").style.display = "block";
    // document.getElementById("logo").style.fontSize = "35px";
    
  }
}

export default Header;
