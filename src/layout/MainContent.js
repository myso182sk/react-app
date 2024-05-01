import React from 'react';

// import Components
import PageBuilder from './PageBuilder';
import NotFound from './NotFound';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.pathname = props.pathname;
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
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/pages`, params);
            const jsonData = await response.json();
            this.setState({ data: jsonData.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {

        const { data } = this.state;

        if ( !data ) {
            return;
        }

        var postedPathname = '';
        var requestedPageID = 0;

        if ( this.pathname !== undefined ) {
            postedPathname = this.pathname;
        } else {
            postedPathname = '/home';
        }

        Object.keys(data).forEach(function(i) {
            var slug = '/' + data[i].attributes.slug;
            if ( slug == postedPathname ) {
                requestedPageID = data[i].id;
            }
        });
        
        return (
            <div>
               { requestedPageID == 0 ? <NotFound /> : <PageBuilder pageID={requestedPageID} /> }
            </div>
        );
    }
}

export default MainContent;