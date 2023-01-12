import React from 'react'
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({arr=[],currency,day) => {
const prices =[1,2,3];
const date=["12/3/23" ,"23/3/55" , "23/4/44"];
const data ={};
  return (
   <Line options={{
    responsive:true,
   }}
   
   data={{
    labels:date,
    datasets:[{
        label:`Price in ${currency}`,
        data:prices,borderColor:"rgb(255,99,132)",
        backgroundColor:"rgb(255,99,132)",
    }]
   }}/>
  );
};

export default Chart