async function getData() {
  const res = await fetch('https://api.adviceslip.com/advice', { cache: 'no-store' });
  const data = await res.json();
  return data.slip.advice;
}

export default async function Page() {
  const advice = await getData();
  return (
    <>
      <h1>SSR</h1>
      <div>{advice}</div>
    </>
  )
}