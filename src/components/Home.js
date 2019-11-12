import React from "react";
import captions from "../helpers/chartCaptions";
import API from '../helpers/API';
import RadarChart from "react-svg-radar-chart";
import { Grid } from "semantic-ui-react";
import "./data.css";


class Home extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    if (!localStorage.getItem("token")) this.props.history.push("/login");
    API.getRadalChartData()
      .then(data => {
        if (data.error) throw Error(data.error);
        // Object.keys(data.skillClassZaps).forEach((k) => data.skillClassZaps[k] = data.skillClassZaps[k].toFixed(3))
        
        this.setState({
          data: data.skillClassZaps
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  timeConverter = UNIX_timestamp => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const date = new Date(UNIX_timestamp);
    const formatted_date =
      weekdays[date.getDay()] +
      ", " +
      months[date.getMonth()] +
      " " +
      date.getDate() +
      " " +
      date.getFullYear();
    return formatted_date;
  };

  getData = skillClassZ => {
    
    if (!skillClassZ || skillClassZ.isEmpty()) {
      const nilData = [
        {
          data: {
            Survival: 0.1,
            Combat: 0.12,
            Fitness: 0.09,
            Crafting: 0.11,
            Engineering: 0.1,
            Driving: 0.09,
            Medical: 0.1
          },
          meta: { color: "green" }
        }
      ];
      return nilData;
    }
    
    const data = [
      {
        data: skillClassZ,
        meta: { color: "green" }
      }
    ];
    return data;
  };

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1 className="to-white">Your Key Skills</h1>
            <RadarChart
              captions={captions}
              data={this.getData(this.state.data)}
              size={450}
              options={options}
            />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row className="home-data">
              <h1>Recent Activities</h1>
              <ul>
                {this.props.userActivities.map(item => (
                  <li>
                    {item.activity.name} - {this.timeConverter(item.created_at)}
                  </li>
                ))}
              </ul>
            </Grid.Row>
            <Grid.Row className="home-data">
              <h1>Weakest Skills</h1>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

// const data = [
//   {
//     data: {
//       survival: 0.7,
//       combat: 0.8,
//       fitness: 0.9,
//       crafting: 0.67,
//       engineering: 0.8,
//       driving: 0.6,
//       medical: 0.1
//     },
//     meta: { color: "green" }
//   },
//   {
//     data: {
//       survival: 0.6,
//       combat: 0.85,
//       fitness: 0.5,
//       crafting: 0.6,
//       engineering: 0.7,
//       driving: 0.3,
//       medical: 0.3
//     },
//     meta: { color: "red" }
//   }
// ];

const options = {
  scales: 6
};

export default Home;
