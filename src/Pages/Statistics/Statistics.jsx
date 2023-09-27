import { PieChart } from 'react-minimal-pie-chart';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
   const cards = useLoaderData();
 
   
    return (
        <div className='w-48 h-44'>
            <PieChart
  data={[
    { title: 'One', value: 12, color: '#E38627' },
    { title: 'Two', value: 4, color: '#C13C37' },

  ]}
/>;
        </div>
    );
};

export default Statistics;

