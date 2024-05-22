export default function Home() {
  const displayTime = new Date().toISOString();
  return (
    <div>
      <p>Displayed at: {displayTime}</p>
    </div>
  );
}
