import React from "react";
import captions from "../helpers/chartCaptions";
import API from '../helpers/API';
import RadarChart from "react-svg-radar-chart";
import NewActivityForm from './NewActivityForm'
import "./data.css";
import {isEmpty} from '../helpers/utils'

class Profile extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        if (!localStorage.getItem("token")) this.props.history.push("/login");
        API.getRadalChartData()
            .then(data => {
                if (data.error) throw Error(data.error);

                this.setState({
                    data: data.skillClassZaps
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

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

    render() {
        console.log(this.props.userSkills)
        return (
            <div className='profile-page'>
                <div className='profile-page-top'>
                    <div className='profile-radal'>
                        <h1>Your Skills Profile</h1>
                        <RadarChart
                            captions={captions}
                            data={this.getData(this.state.data)}
                            size={450}
                            options={options}
                        />
                    </div>
                    <div className='new-activity-form'>
                        <br />
                        <NewActivityForm setUser={this.props.setUser}/>
                    </div>
                </div>
                <div className='profile-skills-container'>
                    <div className='profile-skills'>
                        {this.props.userSkills && this.props.userSkills.map(skill =>
                            <div className='profile-skill' key={skill.id}>
                                <h4>{skill.name}</h4>
                                <img className='profile-skills-image' src={require(`../Assets/${skill.image_url}`)} alt={skill.name} />
                            </div>)}
                    </div>
                </div>
            </div>
        );
    }
}

const options = {
    scales: 6
};

export default Profile;
