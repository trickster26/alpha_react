import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import { LeftSidebar } from 'components/Sidebar/LeftSidebar';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import DataTable from 'react-data-table-component';

const Test = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
    document.body.classList.toggle('show-sidebar', !sidebarOpen);
  };

  // Toggle accordion submenu
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const chartOptions = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Sample Highchart',
    },
    series: [
      {
        name: 'Data',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
    credits: {
      enabled: false, // This will remove the watermark/branding
    },
  };

  const pieChartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart Example',
    },
    colors: ['#feb161', '#33d29d', '#3a85e8', '#fe9760'],
    series: [
      {
        name: 'Data',
        data: [
          { name: 'Category 1', y: 10 },
          { name: 'Category 2', y: 25 },
          { name: 'Category 3', y: 40 },
          { name: 'Category 4', y: 25 },
        ],
      },
    ],
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.percentage:.1f}%',
        },
      },
    },
    credits: {
      enabled: false, // This will remove the watermark/branding
    },
  };

  const barChartOptions = {
    chart: {
      type: 'bar', // Set the chart type to 'bar'
    },
    title: {
      text: 'Revenue, Costing, and Profit by Date', // Title of the chart
    },
    xAxis: {
      categories: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'], // Dates for the X-axis
      title: {
        text: 'Date', // X-axis label
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Amount (USD)', // Y-axis label
      },
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      layout: 'horizontal',
    },
    plotOptions: {
      bar: {
        grouping: true, // Ensures bars are grouped
        dataLabels: {
          enabled: true, // Enable data labels for each bar
        },
      },
    },
    series: [
      {
        name: 'Revenue', // Name for the first bar group
        data: [1200, 1400, 1600, 1300, 1500], // Data for revenue
        color: '#4caf50', // Color for the Revenue bars
      },
      {
        name: 'Costing', // Name for the second bar group
        data: [500, 600, 450, 700, 650], // Data for costing
        color: '#ff5722', // Color for the Costing bars
      },
      {
        name: 'Profit', // Name for the third bar group
        data: [700, 800, 1150, 600, 850], // Data for profit
        color: '#3f51b5', // Color for the Profit bars
      },
    ],
    credits: {
      enabled: false, // Disable Highcharts watermark/branding
    },
  };

  // Activity log data
  const activityLogs = [
    { sno: 1, activity: 'Login', time: '2024-12-23 08:00 AM' },
    { sno: 2, activity: 'Data Update', time: '2024-12-23 09:15 AM' },
    { sno: 3, activity: 'Report Generation', time: '2024-12-23 10:30 AM' },
    { sno: 4, activity: 'Logout', time: '2024-12-23 11:00 AM' },
  ];

  // Define columns for the DataTable
  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
    },
    {
      name: 'Activity',
      selector: (row) => row.activity,
      sortable: true,
    },
    {
      name: 'Time',
      selector: (row) => row.time,
      sortable: true,
    },
  ];

  return (
    <>
      <LeftSidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activeAccordion={activeAccordion}
        toggleAccordion={toggleAccordion}
      />
      <main className={`${sidebarOpen ? 'show-sidebar' : ''} mx-3 mt-5`}>
        <div className="content px-0 py-5">
          {/* First Row with 2 columns */}
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {/* First Column with Count Boxes */}
            <div className="col">
              <div className='card shadow-sm border-0 p-3 h-100'>
                <div className="row row-cols-1 row-cols-md-2 mb-4 g-4">
                <div className="col">
                  <div className="card shadow-sm d-flex justify-content-between align-items-center dashboard-info-1">
                    <div className="card-body d-flex justify-content-between w-100 align-items-end">
                      <div>
                        <h5 className="card-title">Box 1</h5>
                        <p className="card-text">Count 1: 120</p>
                        <p className="card-text">Count 1: 120</p>
                        <p className="card-text">Count 1: 120</p>
                        <p className="card-text">Count 1: 120</p>
                      </div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/610/610106.png"
                        alt="icon"
                        className="flaticon-icon"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm d-flex justify-content-between align-items-center dashboard-info-2">
                    <div className="card-body d-flex justify-content-between w-100 align-items-end">
                      <div>
                        <h5 className="card-title">Box 2</h5>
                        <p className="card-text">Count 2: 220</p>
                        <p className="card-text">Count 2: 220</p>
                        <p className="card-text">Count 2: 220</p>
                        <p className="card-text">Count 2: 220</p>
                      </div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3126/3126589.png"
                        alt="icon"
                        className="flaticon-icon"
                        style={{ width: '40px', height: '40px' }}
                      />
                    </div>
                  </div>
                </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                    <div className="card shadow-sm d-flex justify-content-between align-items-center dashboard-info-3">
                        <div className="card-body d-flex justify-content-between w-100 align-items-end">
                        <div>
                            <h5 className="card-title">Box 3</h5>
                            <p className="card-text">Count 3: 320</p>
                            <p className="card-text">Count 3: 320</p>
                            <p className="card-text">Count 3: 320</p>
                            <p className="card-text">Count 3: 320</p>
                        </div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/18572/18572170.png"
                            alt="icon"
                            className="flaticon-icon"
                            style={{ width: '40px', height: '40px' }}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm d-flex justify-content-between align-items-center dashboard-info-4">
                        <div className="card-body d-flex justify-content-between w-100 align-items-end">
                        <div>
                            <h5 className="card-title">Box 4</h5>
                            <p className="card-text">Count 4: 420</p>
                            <p className="card-text">Count 4: 420</p>
                            <p className="card-text">Count 4: 420</p>
                            <p className="card-text">Count 4: 420</p>
                        </div>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
                            alt="icon"
                            className="flaticon-icon"
                            style={{ width: '40px', height: '40px' }}
                        />
                        </div>
                    </div>
                    </div>
                </div>
              </div>
            </div>

            {/* Second Column with Activity Logs (DataTable) */}
            <div className="col">
              <div className="card shadow-sm border-0 p-2 h-100">
                <div className="card-body">
                  <h5 className="card-title">Activity Log</h5>
                  <DataTable
                    columns={columns}
                    data={activityLogs}
                    pagination
                    responsive
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second Row with 2 Highcharts boxes */}
          <div className="row row-cols-1 row-cols-md-2 g-4 mt-2">
            <div className="col">
              <div className="card shadow-sm card-mod border-0 p-2">
                <div className="card-body">
                  <h5 className="card-title">Highchart 1</h5>
                  <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm border-0 p-2">
                <div className="card-body">
                  <h5 className="card-title">Bar Graph</h5>
                  <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
                </div>
              </div>
            </div>
          </div>

          {/* Third Row with a vertical bar graph showing multiple data (revenue, cost, profit) */}
          <div className="row row-cols-1 g-4 mt-2">
            <div className="col">
              <div className="card shadow-sm border-0 p-2">
                <div className="card-body">
                  <h5 className="card-title">Revenue, Costing, and Profit</h5>
                  <HighchartsReact highcharts={Highcharts} options={barChartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Test;
