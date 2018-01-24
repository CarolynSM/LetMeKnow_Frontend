import React from "react";
import { Doughnut } from "react-chartjs-2";

function countYes(invites) {
  var output = [];
  invites.forEach(invite => {
    if (invite.response == "attending") {
      output.push(invite);
    }
  });
  return output.length;
}

function countNo(invites) {
  var output = [];
  invites.forEach(invite => {
    if (invite.response == "not attending") {
      output.push(invite);
    }
  });
  return output.length;
}

function countWaiting(invites) {
  var output = [];
  invites.forEach(invite => {
    if (invite.hasResponded == "false") {
      output.push(invite);
    }
  });
  return output.length;
}

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const chartData = {
      labels: ["Yes", "No", "Not Responded"],
      datasets: [
        {
          data: [
            countYes(this.props.data),
            countNo(this.props.data),
            countWaiting(this.props.data)
          ],
          backgroundColor: ["#8bc800", "#e90041", "#ffd71a"],
          borderColor: ["#cccccc", "#cccccc", "#cccccc"],
          borderWidth: 1
        }
      ]
    };
    return (
      <div id="response-chart">
        <Doughnut data={chartData} />
      </div>
    );
  }
}
