export async function fetchData(query) {
    try {
        const params = { 
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(`${process.env.REACT_APP_BACKEND}` + query, params);
        const jsonData = await response.json();
        this.setState({ data: jsonData.data });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};