import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';

//Import Components
import Navbar from './Navbar/Navbar';
import Section from './HeroSection/Section';
import Features from './Features/features';
import Footer from './Footer/footer';
import FAQs from './Faqs/FAQs';

const LandingView = () => {
    const [imglight, setimglight] = useState(true);
    const [navClass, setnavClass] = useState('');

    // Use ComponentDidMount
    useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true);
    }, []);

    function scrollNavigation() {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 80) {
            setimglight(false);
            setnavClass('nav-sticky');
        } else {
            setimglight(true);
            setnavClass('');
        }
    }

    return (
        <React.Fragment>
            <MetaTags>
                <title>
                    ICO Landing | Skote - React Admin & Dashboard Template
                </title>
            </MetaTags>

            {/* import navbar */}
            <Navbar navClass={navClass} imglight={imglight} />

            {/* Hero section */}
            <Section />

            {/* features */}
            <Features />

            {/* faqs */}
            <FAQs />

            {/* footer */}
            <Footer />
        </React.Fragment>
    );
};

export default LandingView;
