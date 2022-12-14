import React from 'react'
import { Radar } from 'react-chartjs-2'
import {
   Chart as ChartJS,
   RadialLinearScale,
   PointElement,
   LineElement,
   Filler,
   Tooltip,
   Legend,
   scales,
} from 'chart.js';

ChartJS.register(
   RadialLinearScale,
   PointElement,
   LineElement,
   Filler,
   Tooltip,
   Legend
);


type DipoleDiagramProps = {
   data: number[] | null
}

const DipoleDiagram: React.FC<DipoleDiagramProps> = ({ data }) => {
   const createLabels = () => {
      let labels = []
      for (let i = 0; i < 360; i += 10) {
         labels.push(`${i}`)
      }
      return labels
   }

   return (
      <Radar
         data={{
            labels: createLabels(),
            datasets: [{
               label: 'Нормализованная диаграмма направленности',
               data: data
            }]
         }}
         options={{
            elements: {
               line: {
                  tension: 0.5
               }
            },
            scales: {
               r: {
                  grid: {
                     circular: true
                  },
                  beginAtZero: true
               }
            }
         }}
      >
         { }
      </Radar>
   )
}

export default DipoleDiagram