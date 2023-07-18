import React from 'react';
import Table from './FailuresTable'; // Replace with the correct path to your Table component
import {data} from './data'; // Replace with the correct path to your data variable

const ParentComponent: React.FC = () => {
    return (
        <div>
            <h1>My Nested Table</h1>
            <Table data={data} />
        </div>
    );
};

export default ParentComponent;
