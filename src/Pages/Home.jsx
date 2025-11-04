import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData()
    console.log(apps);
    return (
        <div>
            <h1>MY Home</h1>
        </div>
    );
};

export default Home;