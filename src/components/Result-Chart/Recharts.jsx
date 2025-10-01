import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const resultData = [
  {
    "student_id": 1,
    "name": "Alice",
    "physics": 72,
    "chemistry": 30,
    "math": 64
  },
  {
    "student_id": 2,
    "name": "Bob",
    "physics": 88,
    "chemistry": 67,
    "math": 91
  },
  {
    "student_id": 3,
    "name": "Charlie",
    "physics": 53,
    "chemistry": 74,
    "math": 82
  },
  {
    "student_id": 4,
    "name": "David",
    "physics": 95,
    "chemistry": 59,
    "math": 77
  },
  {
    "student_id": 5,
    "name": "Eva",
    "physics": 20,
    "chemistry": 84,
    "math": 92
  },
  {
    "student_id": 6,
    "name": "Frank",
    "physics": 65,
    "chemistry": 41,
    "math": 70
  },
  {
    "student_id": 7,
    "name": "Grace",
    "physics": 84,
    "chemistry": 99,
    "math": 89
  },
  {
    "student_id": 8,
    "name": "Hank",
    "physics": 80,
    "chemistry": 46,
    "math": 25
  },
  {
    "student_id": 9,
    "name": "Ivy",
    "physics": 48,
    "chemistry": 61,
    "math": 73
  },
  {
    "student_id": 10,
    "name": "Jack",
    "physics": 76,
    "chemistry": 88,
    "math": 97
  }
]

const Recharts = () => {
    return (
        <div className='w-11/12 md:w-8/12 mx-auto h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={resultData}>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey={"physics"}></Line>
                    <Line dataKey={"chemistry"} stroke='red'></Line>
                    <Line dataKey={"math"} stroke='green'></Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;