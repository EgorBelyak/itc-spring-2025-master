import { BarChart } from '@mui/x-charts/BarChart';

export const Graph = ({ population }) => {
  if (!population || !Array.isArray(population.data)) {
    return null;
  }

  
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
};