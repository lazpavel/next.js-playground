export async function getStaticPaths() {
  // Fetch the list of dynamic paths
  // This could be fetched from an API or from a database
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // Add more dynamic paths as needed
  ];

  return {
    paths,
    fallback: true, // Enable fallback to ISR
  };
}

export async function getStaticProps() {
  // Fetch data for the specific dynamic path
  // You can use params.id to fetch the specific data
  const buildTime = new Date().toISOString();

  return {
    props: {
      buildTime,
    },
    revalidate: 60, // Regenerate page every 60 seconds (or any other desired interval)
  };
}

export default function BlockPage({ buildTime }: { buildTime: string }) {
  const displayTime = new Date().toISOString();
  return (
    <div>
      <p>This is a dynamic page revalidated every 10 seconds.</p>
      <p>Generated at: {buildTime}</p>
      <p>Displayed at: {displayTime}</p>
    </div>
  );
}
