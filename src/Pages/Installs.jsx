import React, { useEffect, useState } from 'react';

const Installs = () => {
    const [installList, setInstallList] = useState([])
    useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('installation'))
    if(savedList) setInstallList(savedList)
    },[])

    return (
        <div>
            <h1>Installation: {installList.length}</h1>
        </div>
    );
};

export default Installs;