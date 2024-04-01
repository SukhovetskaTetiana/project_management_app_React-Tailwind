export default function Sidebar() {
  const aside =
    "bg-brown-950 text-white rounded-r-3xl px-12 py-20 md:px-14  lg:px-19 space-y-10 text-left md:shrink-0 w-1/2 md:w-2/5 lg:w-1.5/3";

  const h2 =
    "text-brown-200 text-xl md:text-2xl lg:text-4xl font-bold uppercase";

  const button =
    "px-4 py-2 text-lg md:text-xl lg:text-3xl text-brown-400 bg-brown-900 rounded-lg hover:text-brown-900 hover:bg-brown-400 focus:outline-none focus:ring focus:ring-brown-600";

  const ul = "text-brown-200 space-y-2 text-md md:text-2xl";

  return (
    <aside className={aside}>
      <h2 className={h2}>your projects</h2>
      <button className={button}>+ Add Project</button>
      <ul className={ul}>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
      </ul>
    </aside>
  );
}
