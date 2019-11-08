import React from 'react';
import captions from '../helpers/chartCaptions';
import RadarChart from 'react-svg-radar-chart';
import './data.css';

class Home extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')
    }

    render() {
        return (
            <div className='chart'>
                <RadarChart
                    captions={captions}
                    data={data}
                    size={450}
                />
            </div>
        )
    }
}

const data = [
    {
      data: {
        survival: 0.7,
        combat: .8,
        fitness: 0.9,
        intelligence: 0.67,
        engineering: 0.8,
        medical: 0.1
      },
      meta: { color: 'green' }
    },
    {
      data: {
        survival: 0.6,
        combat: .85,
        fitness: 0.5,
        intelligence: 0.6,
        engineering: 0.7,
        medical: 0.3
      },
      meta: { color: 'red' }
    }
  ];



export default Home 