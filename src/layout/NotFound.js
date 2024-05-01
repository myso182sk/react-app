import React from 'react';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const params = { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/global`, params);
            const jsonData = await response.json();
            this.setState({ data: jsonData.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {

        // TODO CUSTOM 404 Content
        const { data } = this.state;

        if ( !data.attributes ) {
            return;
        }

        return (
            <div>
                <h1> 404 - not found </h1>
            </div>
        );
    }
}

export default NotFound;