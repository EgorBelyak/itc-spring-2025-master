// Graph.jsx
import { BarChart } from '@mui/x-charts/BarChart';

export const Graph = ({ population }) => {
  if (!population) return null;

  if (!Array.isArray(population.data) || population.data.length === 0) {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#fff3e0',
        color: '#e65100',
        margin: '20px 0',
        borderRadius: '5px'
      }}>
        No population data available for {population.country}
      </div>
    );
  }

  try {
    // Sort data by year in ascending order
    const sortedData = [...population.data].sort((a, b) => a.year - b.year);

    return (
      <BarChart
        height={600}
        series={[
          {
            data: sortedData.map(item => item.value),
            label: 'Population',
          },
        ]}
        xAxis={[
          {
            scaleType: 'band',
            data: sortedData.map(item => item.year.toString()),
            label: 'Year',
          },
        ]}
        yAxis={[
          {
            label: 'Population',
          },
        ]}
        title={`Population of ${population.country} over the years`}
      />
    );
  } catch (error) {
    return (
      <div style={{
        padding: '20px',
        backgroundColor: '#ffebee',
        color: '#d32f2f',
        margin: '20px 0',
        borderRadius: '5px'
      }}>
        Error displaying graph: {error.message}
      </div>
    );
  }
};