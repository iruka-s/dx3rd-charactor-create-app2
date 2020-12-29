import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({});

class TopPageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {};

  render() {
    return (
      <div>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(TopPageView));