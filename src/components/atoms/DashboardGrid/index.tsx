import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider, Typography } from '@material-ui/core';
import DashboardChart from 'components/containers/charts/DashboardChart';

interface IndicatorInterface {
  id: string;
  title: string;
  data: number;
}

interface ChartInterface {
  id: string;
  data: { options: object };
}

type Props = {
  topElements: Array<IndicatorInterface>,
  bottomElements: Array<ChartInterface>
};

type State = {
};

class DashboardGrid extends React.Component<Props, State> {
  buildBottomElements() {
    return this.props.bottomElements.map(
      options =>
        <Grid item key={options.id}>
          <Paper style={{ marginRight: 10, marginLeft: 10 }}>
            <DashboardChart options={options.data.options} />
          </Paper>
        </Grid>
    )
  }

  buildTopElements() {
    const lg = 3;
    const md = 4;
    const sm = 4;
    const xl = 3;
    const xs = 12;

    return this.props.topElements.map(
      indicator =>
        <Grid key={indicator.id} lg={lg} md={md} sm={sm} xl={xl} xs={xs} item>
          <Paper style={{ padding: 10, margin: 10 }}>
            <Typography>
              {indicator.title}
            </Typography>
            <Divider />
            <Typography>
              {indicator.data}
            </Typography>
          </Paper>
        </Grid>
    );
  }

  render() {
    return (
      <Fragment>
        <Paper style={{ backgroundColor: "#112233", height: "150vh" }}>
          <Typography variant="h3" style={{ padding: 10, color: "white" }}>
            Indicadores
          </Typography>
          <Grid>
            <Grid container>
              {this.buildTopElements()}
            </Grid>
            <Typography variant="h3" style={{ padding: 10, color: "white" }}>
              Gráficos
            </Typography>
            {this.buildBottomElements()}
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

export default DashboardGrid;
