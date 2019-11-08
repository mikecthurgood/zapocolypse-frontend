import React from 'react'

class Home extends React.Component {

    componentDidMount() {
        if (!localStorage.getItem('token')) this.props.history.push('/login')
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Home 