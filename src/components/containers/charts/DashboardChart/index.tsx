import React, { Fragment } from 'react';
import SimpleChart from 'components/atoms/SimpleChart';

type Props = {
  options: object
};

type State = {
  options: object
};

export class DashboardChart extends React.Component<Props, State> {
  state: State = {
    options: {
      title: {
        text: 'no chart'
      },
      series: [
        {
          data: []
        },
      ]
    }
  };

  componentDidMount() {
    this.setState({ options: this.props.options })
  }

  toolbar() {
    <div>
      <button>
        asdf
      </button>
    </div>
  }

  render() {
    return (
      <Fragment>
        <SimpleChart
          options={this.state.options}
          chartComponents={this.toolbar}>
        </SimpleChart>
      </Fragment>
    );
  }
}

export default DashboardChart;
