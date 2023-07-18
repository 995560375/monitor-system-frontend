import React, { useState } from "react";

interface SubLevel {
    id: string;
    name: string;
}

interface MidLevel {
    id: string;
    name: string;
    subLevels: SubLevel[];
}

interface TopLevel {
    id: string;
    name: string;
    midLevels: MidLevel[];
}



interface SubLevelProps {
    data: SubLevel;
}

const SubLevel: React.FC<SubLevelProps> = ({ data }) => (
    <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
    </tr>
);

interface MidLevelProps {
    data: MidLevel;
}

const MidLevel: React.FC<MidLevelProps> = ({ data }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr onClick={() => setOpen(!open)}>
                <td>{data.id}</td>
                <td>{data.name}</td>
            </tr>
            {open && data.subLevels.map((subLevel) => (
                <SubLevel key={subLevel.id} data={subLevel} />
            ))}
        </>
    );
};

interface TopLevelProps {
    data: TopLevel;
}

const TopLevel: React.FC<TopLevelProps> = ({ data }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr onClick={() => setOpen(!open)}>
                <td>{data.id}</td>
                <td>{data.name}</td>
            </tr>
            {open && data.midLevels.map((midLevel) => (
                <MidLevel key={midLevel.id} data={midLevel} />
            ))}
        </>
    );
};

interface TableProps {
    data: TopLevel[];
}

const Table: React.FC<TableProps> = ({ data }) => (
    <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {Array.isArray(data) && data.map((topLevel) => (
            <TopLevel key={topLevel.id} data={topLevel} />
        ))}
        </tbody>
    </table>
);

export default Table;
