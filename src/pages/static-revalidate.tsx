export async function getStaticProps() {
  const buildTime = new Date().toISOString();
  return {
    props: {
      buildTime,
    },
  };
}

export default function StaticRevalidatePage({ buildTime }: { buildTime: string }) {
  const displayTime = new Date().toISOString();
  return (
    <div>
      <p>This is a static page revalidated every 10 seconds.</p>
      <p>Generated at: {buildTime}</p>
      <p suppressHydrationWarning>Displayed at: {displayTime}</p>
    </div>
  );
}