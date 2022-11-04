async function getData() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  return data.slip.advice;
}

export default async function Page() {
  const advice = await getData();
  return (
    <>
      <h1>SSG</h1>
      <div>{advice}</div>
    </>
  )
}