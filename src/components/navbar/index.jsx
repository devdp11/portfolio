import React from "react";

import NavbarLayout from "./layout";

const NavbarIndex = ({ aboutRef, projectsRef, skillsRef, contactsRef }) => {
    return (
        <NavbarLayout aboutRef={aboutRef} projectsRef={projectsRef} skillsRef={skillsRef} contactsRef={contactsRef} />
    );
};

export default NavbarIndex;
