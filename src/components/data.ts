import {TopLevel} from "@/components/dataTypes";

export const data: TopLevel[] = [
    {
        id: 'T1',
        name: 'Top Level 1',
        midLevels: [
            {
                id: 'M1',
                name: 'Mid Level 1',
                subLevels: [
                    {
                        id: 'S1',
                        name: 'Sub Level 1',
                    },
                    {
                        id: 'S2',
                        name: 'Sub Level 2',
                    },
                ],
            },
            {
                id: 'M2',
                name: 'Mid Level 2',
                subLevels: [
                    {
                        id: 'S3',
                        name: 'Sub Level 3',
                    },
                    {
                        id: 'S4',
                        name: 'Sub Level 4',
                    },
                ],
            },
        ],
    },
    {
        id: 'T2',
        name: 'Top Level 2',
        midLevels: [
            {
                id: 'M3',
                name: 'Mid Level 3',
                subLevels: [
                    {
                        id: 'S5',
                        name: 'Sub Level 5',
                    },
                    {
                        id: 'S6',
                        name: 'Sub Level 6',
                    },
                ],
            },
            {
                id: 'M4',
                name: 'Mid Level 4',
                subLevels: [
                    {
                        id: 'S7',
                        name: 'Sub Level 7',
                    },
                    {
                        id: 'S8',
                        name: 'Sub Level 8',
                    },
                ],
            },
        ],
    },
];