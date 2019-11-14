import React from "react";
import captions from "../helpers/chartCaptions";
import API from "../helpers/API";
import RadarChart from "react-svg-radar-chart";
import { Card } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./data.css";
import { isEmpty } from '../helpers/utils'

class Home extends React.Component {
  state = {
    data: {},
    strongestSkills: []
  };

  componentDidMount() {
    if (!localStorage.getItem("token")) this.props.history.push("/login");
    API.getRadalChartData()
      .then(data => {
        if (data.error) throw Error(data.error);
        // Object.keys(data.skillClassZaps).forEach((k) => data.skillClassZaps[k] = data.skillClassZaps[k].toFixed(3))

        this.setState({
          data: data.skillClassZaps,
          strongestSkills: data.strongestSkills
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
    if (!skillClassZ || isEmpty(skillClassZ)) {
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

  chooseColor = name => {
    switch (name) {
      case "Car Mechanics":
        return "car-mech";
      case "Large Vehicle mechanics":
        return "large-v-mech";
      case "Motorbike Mechanics":
        return "moto-mech";
      case "Electrical":
        return "electrical";
      case "Carpentry":
        return "carpentry";
      case "Archery":
        return "archery";
      case "Shooting":
        return "shooting";
      case "Crossbow":
        return "crossbow";
      case "Small Weapons":
        return "small-weap";
      case "Weapons Crafting":
        return "weap-craft";
      case "Hunting":
        return "hunting";
      case "Fishing":
        return "fishing";
      case "Foraging":
        return "foraging";
      case "Camp making":
        return "camp-make";
      case "Fitness":
        return "fitness";
      case "Unarmed Combat":
        return "unarmed-combat";
      case "First aid":
        return "first-aid";
      case "Psychology":
        return "psychology";
      case "Drugs and remedies":
        return "drug-remedies";
      case "Diagnosis":
        return "diagnosis";
      case "Clothing":
        return "clothing";
      case "Tech":
        return "tech"
      case "Construction":
        return "construction";
      case "Fire Making":
        return "fire-make";
      case "Car Handling":
        return "car-handle";
      case "Large Vehicle Handling":
        return "large-handle";
      case "Motorcycle Handling":
        return "moto-handle";
      case "Offroad (Cars)":
        return "car-offroad";
      case "Offroad (Bikes)":
        return "moto-offroad";
      default:
        return "dark";
    }
  };

  render() {
    const { strongestSkills } = this.state;
    return (
      <div>
        <div className='home-page'>
          <div className='home-page-header'>
          </div>
          <h1>Slayer Stats</h1>
          <br />
          <div className='home-page-data'>
            <div className='radal-and-skills'>
              <Card className='homepage-radal'>
                <RadarChart
                  captions={captions}
                  data={this.getData(this.state.data)}
                  // size={450}
                  options={{ scales: 6 }}
                />
              </Card>

              <Card className="home-data">
                <h1>Strongest Skills</h1>
                <div>
                  {strongestSkills &&
                    strongestSkills.map(skillArray => (
                      <>
                        <label>{skillArray[0]}</label>
                        <ProgressBar
                          animated

                          now={skillArray[1]}
                          max={1500}
                          className={this.chooseColor(skillArray[0])}
                        />
                        <br />
                      </>
                    ))}
                </div>
              </Card>
            </div>
            <div>

              <Card className='homepage-recent'>
                <h1>Recent Activities</h1>
                <ul>
                  {this.props.userActivities.map(item => (
                    <li>
                      {item.activity.name} - {this.timeConverter(item.created_at)}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
            <div>
              <Card className='homepage-recent'>
                <h1>Upcoming Activities</h1>
                <ul>

                  <li>Some shit</li>
                  <li>Some more shit</li>
                  <li>Even more shit</li>
                  <li>Some crazy ass shit</li>
                  <li>Some more amazing shit</li>

                </ul>
              </Card>
            </div>



          </div>
        </div>
      </div>
    );
  }
}


export default Home;
