export default function Home({ date }: {date: string}) {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Welcome to the homepage!</p>

      <p>This is a basic Next.js app with the following features: { date }</p>
      

    </div>
  )
}

// function sleep(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export async function getStaticProps() {
  // await sleep(10000);
  return {
    props: {
      date: new Date().toISOString()
    },
    revalidate: 2 // in seconds
  }
}