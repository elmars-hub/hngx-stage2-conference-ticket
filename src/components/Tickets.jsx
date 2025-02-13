import { NavLink } from 'react-router-dom';

function Tickets() {
  return (
    <div className="px-4 sm:px-6">
      <div className="border-border mx-auto mt-4 h-auto min-h-[400px] max-w-[600px] rounded-[40px] border-2 px-4 py-6">
        <h1 className="text-text text-2xl font-bold">Available Tickets</h1>
        <div className="mb-6 flex h-[3px] w-full rounded-full">
          <div className="bg-borderButtom h-full w-[40%]"></div>
          <div className="bg-borderBg h-full w-[60%]"></div>
        </div>

        <div className="text-center">
          <p className="text-2xl text-stone-300">❌ No Tickets Found</p>
          <p className="mb-4 mt-2 text-stone-400">
            You haven&apos;t purchased any tickets yet. Check out our available
            events!
          </p>
          <NavLink
            to="/"
            className="bg-borderButtom rounded-xl px-6 py-2 font-semibold text-white transition-all hover:bg-opacity-90"
          >
            Browse Events
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
