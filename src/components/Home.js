import React from 'react'

class Home extends React.Component {

    componentDidMount() {
        if (!this.props.user) this.props.history.push('/login')
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Home 