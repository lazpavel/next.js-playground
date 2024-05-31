export default function StaticBuildPage() {
  const buildTime = new Date().toISOString();
  return (
    <div>
      <p>This is a static page generated at build time. Updated</p>
      <p>Generated at: {buildTime}</p>
      <p suppressHydrationWarning>Displayed at: {new Date().toISOString()}</p>
    </div>
  );
}
