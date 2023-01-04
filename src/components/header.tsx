import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/search-bar';
import ProfileMenu from './profile-menu';
import { Container } from 'reactstrap';

// import images
import logo from '../assets/images/logo.svg';
import logoLightPng from '../assets/images/logo-light.png';
import logoLightSvg from '../assets/images/logo-light.svg';
import logoDark from '../assets/images/logo-dark.png';

function Header() {
    return (
        <React.Fragment>
            <header id="page-topbar">
                <Container className="app-container">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <Link to="/" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src={logo} alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img
                                            src={logoDark}
                                            alt=""
                                            height="17"
                                        />
                                    </span>
                                </Link>

                                <Link to="/" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img
                                            src={logoLightSvg}
                                            alt=""
                                            height="22"
                                        />
                                    </span>
                                    <span className="logo-lg">
                                        <img
                                            src={logoLightPng}
                                            alt=""
                                            height="19"
                                        />
                                    </span>
                                </Link>
                            </div>
                            <form className="app-search d-none d-lg-block">
                                <SearchBar />
                            </form>
                        </div>

                        <div className="d-flex">
                            <ProfileMenu />
                        </div>
                    </div>
                </Container>
            </header>
        </React.Fragment>
    );
}

export default Header;
