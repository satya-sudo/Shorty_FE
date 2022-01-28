import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [],
        options: {
          chart: {
            width: 300,
            type: 'pie',
          },
          labels: ['office', 'Entertainment', 'facebook', 'Instagram', 'twitter','others'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }


    componentDidMount() {
        console.log(this.props.series)
        this.setState({
            series:this.props.series
        })
        console.log(this.state)
    }

  

    render() {
      return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.props.series} type="pie" width={450} />
        </div>

      );
    }
  }


export default ApexChart;