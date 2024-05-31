export default function Home() {
  const displayTime = new Date().toISOString();
  return (
    <div suppressHydrationWarning>
      Displayed at: {displayTime}
    </div>
  );
}
