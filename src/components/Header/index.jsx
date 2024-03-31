import { MdCoronavirus } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex bg-zinc-900 text-white py-5 px-10 md:px-20 justify-between items-center">
      <div className="flex items-center gap-2">
        <MdCoronavirus className="text-red-500 text-xl" />
        <h1 className="font-semibold text-lg md:text-2xl">COVID Tracker</h1>
      </div>
      <form className="flex items-center border rounded">
        <input
          className="bg-transparent py-2 px-2 md:px-5 outline-none"
          type="text"
          placeholder="Ülke İsmine Göre Ara"
        />
        <button className="bg-green-500 text-xl p-2 w-full h-full rounded transition hover:bg-green-600">
          <IoSearch />
        </button>
      </form>

      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Vaccinated Today: </span>
          <span className="text-gray-400">(123,456)</span>
        </p>
        <TbVaccine className="text-green-500 text-xl" />
      </div>
    </header>
  );
};

export default Header;
