export async function getStaticProps() {
  const buildTime = new Date().toISOString();
  return {
    props: {
      buildTime,
    },
    revalidate: 10,
  };
}

export default function DynamicBuildPage({ buildTime }: { buildTime: string }) {
  const displayTime = new Date().toISOString();
  return (
    <div>
      <p>This is a dynamic page revalidated every 10 seconds but also generated at build time.</p>
      <p>Generated at: {buildTime}</p>
      <p>Displayed at: {displayTime}</p>
    </div>
  );
}