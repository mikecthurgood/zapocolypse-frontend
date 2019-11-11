import React from "react";
import captions from "../helpers/chartCaptions";
import RadarChart from "react-svg-radar-chart";
import { Grid } from 'semantic-ui-react'
import "./data.css";

class Home extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) this.props.history.push("/login");
  }

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1 className='to-white'>Your Key Skills</h1>
            <RadarChart
                captions={captions}
                data={data}
                size={450}
                options={options}
              />
          </Grid.Column>
          <Grid.Column>
            <Grid.Row className='home-data'>
              <h1>Recent Activities</h1>
            </Grid.Row>
            <Grid.Row className='home-data'>
              <h1>Weakest Skills</h1>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      // <div class="row">
      //   <div class="dash-board-item left">
      //     <h1>Recent Activities</h1>
      //   </div>
      //   <div class="dash-board-item middle">
      //     <div className='chart'>
            // <RadarChart
            //   captions={captions}
            //   data={data}
            //   size={450}
            //   options={options}
            // />
      //     </div>
      //   </div>
      //   <div class="dash-board-item right">
      //     <h1>Weakest Skills</h1>
      //   </div>
      // </div>
    );
  }
}

const data = [
  {
    data: {
      survival: 0.7,
      combat: 0.8,
      fitness: 0.9,
      crafting: 0.67,
      engineering: 0.8,
      driving: 0.6,
      medical: 0.1
    },
    meta: { color: "green" }
  },
  {
    data: {
      survival: 0.6,
      combat: 0.85,
      fitness: 0.5,
      crafting: 0.6,
      engineering: 0.7,
      driving: 0.3,
      medical: 0.3
    },
    meta: { color: "red" }
  }
];

const options = {
  scales: 5
};

export default Home;
