import PropTypes from 'prop-types';

import { Container } from './Container.module';

export const Section = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};
