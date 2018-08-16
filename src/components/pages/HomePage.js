import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/HomePage';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
const HomePage = props => (
  <Grid stackable centered style={Styles.grid}>
    <Grid.Row verticalAlign="middle" style={Styles.headingRow}>
      <Segment vertical style={Styles.headerSegment}>
        <Header style={Styles.header}>Quicker Easier Services</Header>
        <ButtonDiv style={Styles.div}>
          <Button
            style={Styles.requestButton}
            size="large"
            onClick={() => props.history.push('/pipeline')}
          >
            Make a Request
          </Button>
        </ButtonDiv>
      </Segment>
    </Grid.Row>
  </Grid>
);

HomePage.propTypes = {
  history: PropTypes.func,
};

HomePage.defaultProps = {
  history: PropTypes.func,
};
export default HomePage;
