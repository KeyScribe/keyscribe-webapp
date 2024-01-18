import React from 'react';
import PropTypes from 'prop-types';
import { WelcomeWrapper } from './Welcome.styled';


const Welcome = () => (
 <WelcomeWrapper data-testid="Welcome">
    {/* <HeaderText>Welcome, [Name]</HeaderText> */}
 </WelcomeWrapper>
);

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
