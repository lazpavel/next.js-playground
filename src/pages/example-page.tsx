export async function getStaticProps() {
  // Fetch data from an API or any other source
  const buildTime = new Date().toISOString();
  return {
    props: {
      buildTime,
    },
    revalidate: 60, // Regenerate page every 60 seconds (or any other desired interval)
  };
}

export default function ExamplePage({ buildTime }: { buildTime: string }) {
  return (
    <div>
      {/* Render your page using the fetched data */}
    </div>
  );
}
