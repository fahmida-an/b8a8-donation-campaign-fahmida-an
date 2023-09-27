import { useLoaderData } from "react-router-dom";
// import { PieChart } from 'react-minimal-pie-chart';
import { Chart } from "react-google-charts";

const Statistics = () => {
  const cards = useLoaderData();
  //  console.log(cards);
  const cL = cards.length;
  console.log(cL);

  const donatedThings = JSON.parse(localStorage.getItem("donations"));
  //  console.log(donatedThings.length);
  const dT = donatedThings.length;
  console.log(dT);

  const data = [
    ["Donation", "Per Day"],
    ["Total Donation", cL],
    ["Your Donation", dT],
  ];

  const options = {
    pieStartAngle: 180,
    slices: {
      0: { color: "#FF444A" },
      1: { color: "#00C49F" },
    },
    legend: "none",
  };

  return (
    //         <div className="items-center w-48 h-48 m-10 justify-center">
    //           <PieChart
    //   data={[
    //     { title: 'One', value: cL, color: '#E38627' },
    //     { title: 'Two', value: dT, color: '#C13C37' },
    //   ]}
    // />;
    //         </div>

    <div className="m-10 mx-auto">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
      {
        <div className="flex p-2 gap-2 lg:gap-6 justify-center  ">
          <div className="flex gap-1 lg:gap-3 items-center">
            <span>Total Donation</span>
            <p className="w-20 h-4 rounded-sm bg-[#FF444A]"></p>
          </div>

          <div className="flex gap-1 lg:gap-3 items-center">
            <span>Your Donation</span>
            <p className="w-20 h-4 rounded-sm bg-[#00C49F]"></p>
          </div>
        </div>
      }
    </div>
  );
};

export default Statistics;
