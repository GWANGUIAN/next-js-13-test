async function getData() {
  const res = await fetch('https://api.adviceslip.com/advice', { next: { revalidate: 10 } });
  const data = await res.json();
  return data.slip.advice;
}

export default async function Page() {
  const advice = await getData();
  return (
    <>
      <h1>ISR</h1>
      <div>{advice}</div>
    </>
  )
}