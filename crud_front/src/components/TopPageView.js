import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  growAddButton: {
    marginRight: 10,  // drawer.flexShrink: 0 を使う
  },
  growDeleteButton: {
    marginRight: 30,  // drawer.flexShrink: 0 を使う
  },
});

class TopPageView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  };

  render() {

    const { classes } = this.props;

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