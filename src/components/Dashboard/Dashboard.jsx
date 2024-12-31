import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredReadList } from '../../utility/addToDb';

const Dashboard = () => {
    const [markAsReadData, setMarkAsReadData] = useState([]);

    const markAsReadId = getStoredReadList();
    console.log("Mark as Read IDs:", markAsReadId);

    useEffect(() => {
        fetch('/booksData.json')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched Books Data:", data);

                // Filter books based on markAsReadId
                const filteredData = data
                    .filter(book => markAsReadId.includes(String(book.bookId)))
                    .map(book => ({
                        bookName: book.bookName, // Key for the X-axis
                        bookPage: book.totalPages || 0, // Key for the Bar values
                    }));
                setMarkAsReadData(filteredData);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    console.log("Filtered Data:", markAsReadData);

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <div style={{ width: '100%', height: '600px' }}>
                {/* ResponsiveContainer automatically adjusts to the parent container */}
                <ResponsiveContainer>
                    <BarChart
                        data={markAsReadData} // Pass the filtered data
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" /> {/* Correct dataKey for X-axis */}
                        <YAxis />
                        <Bar dataKey="bookPage" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {markAsReadData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
