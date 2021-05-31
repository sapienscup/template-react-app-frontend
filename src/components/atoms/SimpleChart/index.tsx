import React, { Fragment } from 'react';
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

type Props = {
  options: object,
  chartComponents?: object
};

type State = {
  options: object
};

class SimpleChart extends React.Component<Props, State> {
  afterChartCreated = (chart: any) => {
    console.log("your chart is ready...");
  }

  componentDidMount() {
    this.setState({ options: this.props.options });
  }

  render() {
    const { chartComponents, options } = this.props;

    return (
      <Fragment>
        {chartComponents}
        <HighchartsReact constructorType={"chart"} highcharts={Highcharts} options={options} callback={this.afterChartCreated} />
      </Fragment>
    );
  }
}

export default SimpleChart;
