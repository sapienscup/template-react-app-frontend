import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import PropTypes from "prop-types";

export interface SimpleCardProps {
  title?: string,
  description?: string,
  url?: string
}

const styles = {
  card: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

export const SimpleCard = ({ title = '', description = '', url = '', ...props }) => {
  return (
    <Card className="">
      <CardContent>
        <Typography variant="h2" component="h3">
          {title}
        </Typography>
        <Typography className="" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  );
};

SimpleCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};

SimpleCard.defaultProps = {
  title: "No title yet...",
  description: 'No description yet...',
  url: "No url yet...",
};

export default withStyles(styles)(SimpleCard);
