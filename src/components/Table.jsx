import { useMemo } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
} from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    {
        rank: 1,
        name: "IIT Madras",
        fees: 209550,
        placement: 2168000,
        review: '8.6/10',
        ranking: '3rd/131 in India'
    },
    {
        rank: 2,
        name: "IIT Bombay",
        fees: 215000,
        placement: 2200000,
        review: '8.8/10',
        ranking: '1st/131 in India'
    },
    {
        rank: 3,
        name: "IIT Delhi",
        fees: 210000,
        placement: 2100000,
        review: '8.5/10',
        ranking: '2nd/131 in India'
    },
    {
        rank: 4,
        name: "IIT Kharagpur",
        fees: 205000,
        placement: 2000000,
        review: '8.4/10',
        ranking: '4th/131 in India'
    },
    {
        rank: 5,
        name: "IIT Kanpur",
        fees: 208000,
        placement: 1980000,
        review: '8.3/10',
        ranking: '5th/131 in India'
    },
    {
        rank: 6,
        name: "IIT Roorkee",
        fees: 204000,
        placement: 1900000,
        review: '8.2/10',
        ranking: '6th/131 in India'
    },
    {
        rank: 7,
        name: "IIT Guwahati",
        fees: 202000,
        placement: 1950000,
        review: '8.1/10',
        ranking: '7th/131 in India'
    },
    {
        rank: 8,
        name: "IIT Hyderabad",
        fees: 206000,
        placement: 2050000,
        review: '8.7/10',
        ranking: '8th/131 in India'
    },
    {
        rank: 9,
        name: "IIT Indore",
        fees: 203000,
        placement: 1900000,
        review: '8.0/10',
        ranking: '9th/131 in India'
    },
    {
        rank: 10,
        name: "IIT Varanasi",
        fees: 207000,
        placement: 1850000,
        review: '8.2/10',
        ranking: '10th/131 in India'
    },
    {
        rank: 11,
        name: "IIT Bhubaneswar",
        fees: 201000,
        placement: 1950000,
        review: '8.3/10',
        ranking: '11th/131 in India'
    },
    {
        rank: 12,
        name: "IIT Gandhinagar",
        fees: 202500,
        placement: 1850000,
        review: '8.4/10',
        ranking: '12th/131 in India'
    },
    {
        rank: 13,
        name: "IIT Ropar",
        fees: 204500,
        placement: 1800000,
        review: '8.5/10',
        ranking: '13th/131 in India'
    },
    {
        rank: 14,
        name: "IIT Jodhpur",
        fees: 206500,
        placement: 1750000,
        review: '8.6/10',
        ranking: '14th/131 in India'
    },
    {
        rank: 15,
        name: "IIT Patna",
        fees: 208500,
        placement: 1700000,
        review: '8.7/10',
        ranking: '15th/131 in India'
    }

];

const Example = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'rank',
                header: 'CD Rank',
                size: 150,
            },
            {
                accessorKey: 'name',
                header: 'Colleges',
                size: 150,
            },
            {
                accessorKey: 'fees',
                header: 'Course Fees',
                size: 200,
            },
            {
                accessorKey: 'placement',
                header: 'Placement',
                size: 150,
            },
            {
                accessorKey: 'review',
                header: 'User Reviews',
                size: 150,
            },
            {
                accessorKey: 'ranking',
                header: 'Ranking',
                size: 150,
            }
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });

    return <MaterialReactTable table={table} />;
};

export default Example;
