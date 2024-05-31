export default function Home() {
  const displayTime = new Date().toISOString();
  return (
    <div suppressHydrationWarning>
      Redirected - Displayed at: {displayTime}
    </div>
  );
}
