"use client";

function BtnBorderSpin({ id, title, href, target }) {
  function handleClick(e) {
    e.preventDefault();
    window.open(href, target);
  }

  return (
    <div>
      <div className="flex w-full max-w-lg">
        <div className="relative z-10 flex cursor-pointer overflow-hidden rounded-full border border-none p-[1.5px] md:mx-0 mx-auto">
          <div className="animate-rotate absolute h-full w-full rounded-full bg-[conic-gradient(#cbd5e1_20deg,transparent_120deg)]"></div>

          <button
            id={id}
            title={title}
            onClick={handleClick}
            className="relative z-20 flex w-full rounded-full bg-gray-950"
          >
            <span
              className="
                        relative z-50 rounded-full border border-gray-800 bg-none px-6 py-3 
                        text-center  text-white shadow-2xl transition duration-200 hover:bg-slate-800
                        md:text-xl text-sm
                    "
            >
              {title}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BtnBorderSpin;
