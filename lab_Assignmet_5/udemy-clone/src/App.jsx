import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Header";
import GirlInBackgr from "./GirlInBackgr";
import FeaturedSkillsSection from "./FeaturedSkillsSection";
import Ad from "./Ad";
import CoursesList from "./CoursesList";
import Sponsors from "./Sponsors";


export default function App() {
    return (
        <>
            <Header />
            <GirlInBackgr/>
            <FeaturedSkillsSection/>
            <Ad/>
            <CoursesList/>
            <Sponsors/>
            {/* Page Content */}
          
        </>
    );
}

