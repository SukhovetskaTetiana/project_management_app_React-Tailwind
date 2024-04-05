import Input from "./Input";

export default function NewProject() {
  return (
    <section className="my-20 pr-5 w-[32rem] flex flex-col gap-8">
      <menu className="flex justify-end gap-5">
        <li>
          <button className="px-4 py-2 text-lg md:text-lx text-brown-950 rounded-md font-medium  hover:bg-brown-300 focus:outline-none focus:ring focus:ring-brown-500 focus:bg-brown-300">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 text-lg md:text-lx text-brown-100 bg-brown-950 rounded-md font-medium hover:text-brown-900 hover:bg-brown-300 focus:ring focus:ring-brown-500">
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col">
        <Input label="title" />
        <Input label="description" textarea />
        <Input label="due date" type="data" />
      </div>
    </section>
  );
}
