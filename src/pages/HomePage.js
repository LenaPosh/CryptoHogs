import React from 'react';
import NavMenu from "../components/NavMenu";
import PageContent from "../components/PageContent";
import NextPageContent from "../components/NextPageContent";
import Footer from "../components/Footer";


const HomePage = () => {

    return (
        <>
            <NavMenu/>
            <PageContent/>
            <NextPageContent/>
            <Footer/>

        </>

    );
};

export default HomePage;