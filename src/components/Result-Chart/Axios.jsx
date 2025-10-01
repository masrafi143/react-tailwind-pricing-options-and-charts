import React, { use } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const Axios = ({resultPromise}) => {
    const resultDataResponse = use(resultPromise);
    const resultData = resultDataResponse.data;
    console.log(resultData);
    const resultDataChart = resultData.map(student => {
        const studentResult = {
            id: student.student_id,
            name: student.name,
            physics: student.marks.physics,
            chemistry: student.marks.chemistry,
            math: student.marks.math
        }
        const avg = (studentResult.physics + studentResult.chemistry + studentResult.math)/3;
        studentResult.avg = avg;
        return studentResult;
    })
    return (
        <div className='w-11/12 md:w-8/12 mx-auto h-80 my-10'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <BarChart data={resultDataChart}>
                    <XAxis dataKey={"name"}></XAxis>
                    <YAxis></YAxis>
                    <Bar dataKey={"physics"} fill='red'></Bar>
                    <Bar dataKey={"chemistry"} fill='green'></Bar>
                    <Bar dataKey={"avg"} fill='purple'></Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Axios;