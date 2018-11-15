import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/feedback">Feedback</NavigationItem>
    </ul>
);

export default navigationItems;