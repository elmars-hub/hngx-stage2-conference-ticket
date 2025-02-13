/* eslint-disable react/prop-types */
import Ticket from '/Subtract.svg';
import BarCode from '/BarCode.svg';

function Ready({ formData }) {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center gap-y-4">
        <p className="font-Alatsi text-center text-2xl text-[32px] font-bold leading-[33.6px] text-white">
          Your Ticket is Booked!
        </p>
        <p className="font-roboto text-finalText text-center text-2xl leading-[33.6px]">
          Check your email for a copy or you can{' '}
          <span className="font-bold">download </span>
        </p>
      </div>

      <div className="ticket relative flex h-auto w-full items-center justify-center py-7">
        <img
          src={Ticket}
          alt="Ticket background"
          width={300}
          height={600}
          className="relative"
        />

        <div className="bg-ticketStroke absolute left-1/2 top-[42%] z-10 h-[446px] w-[260px] -translate-x-1/2 -translate-y-1/2 transform rounded-[16px] border border-borderButtom bg-opacity-10 p-[14px] backdrop-blur-[2px]">
          <div className="">
            <h3 className="font-RoadRage text-center text-[34px] font-normal leading-[34px] text-white">
              Techember Fest &quot;25
            </h3>
            <div className="font-roboto flex flex-col items-center justify-center gap-y-1 p-1 text-center text-[10px] text-white">
              <p>📍 14 Festac Road, Amuwo, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto mt-6 flex aspect-square w-[140px] items-center justify-center overflow-hidden rounded-[12px] border-[4px] border-border border-opacity-50">
            <img
              src={formData.imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* Form Data */}
          <div className="bg-formBg border-formBorder mt-3 flex w-[224px] flex-col rounded-[8px] border p-1">
            <div className="flex w-full gap-x-2 border-b border-selectBg">
              <div className="flex w-[100px] flex-col gap-y-1 border-r border-selectBg p-1">
                <label className="font-roboto text-[10px] leading-[15px] text-white/30">
                  Enter your name
                </label>
                <p className="font-roboto truncate text-[12px] font-bold leading-[18px] text-white">
                  {formData.name}
                </p>
              </div>
              <div className="flex w-[100px] flex-col gap-y-1 p-1">
                <label className="font-roboto text-[10px] leading-[15px] text-white/30">
                  Enter your email *
                </label>
                <p className="font-roboto text-finalText truncate text-[12px] font-bold leading-[18px]">
                  {formData.email}
                </p>
              </div>
            </div>
            <div className="flex gap-x-2 border-b border-selectBg">
              <div className="flex w-[100px] flex-col gap-y-1 border-r border-selectBg p-1">
                <label className="font-roboto text-[10px] leading-[15px] text-white/30">
                  Ticket Type:
                </label>
                <p className="font-roboto text-finalText text-[12px] font-bold leading-[18px]">
                  {formData.ticketType}
                </p>
              </div>
              <div className="flex w-[100px] flex-col gap-y-1 p-1">
                <label className="font-roboto text-[10px] leading-[15px] text-white/30">
                  Ticket for :
                </label>
                <p className="font-roboto text-finalText text-[12px] font-bold leading-[18px]">
                  {formData.numberOfTickets}
                </p>
              </div>
            </div>
            <div className="flex h-[62px] flex-col gap-y-1 p-2">
              <label className="font-roboto text-[10px] leading-[15px] text-white/30">
                Special request?
              </label>
              <textarea
                disabled
                value={formData.specialRequest}
                className="font-roboto text-finalText resize-none overflow-y-auto bg-transparent text-[10px] font-bold leading-[15px]"
              />
            </div>
          </div>

          <div className="relative mt-12 flex items-center justify-center">
            <img src={BarCode} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ready;

{
  /* <div className="relative mt-6 w-full max-w-md rounded-lg border border-teal-400 bg-gray-800 p-6 shadow-lg">
        {/* Ticket Header */
}
// <h3 className="text-center text-xl font-bold">
//   Techember Fest &apos;25
// </h3>
// <p className="mt-1 text-center text-sm text-gray-400">
//   📍 04 Rumens Road, Ikoyi, Lagos
// </p>
// <p className="text-center text-sm text-gray-400">
//   📅 March 15, 2025 | 7:00 PM
// </p>

// {/* Profile Image */}
// <div className="mt-4 flex justify-center">
//   <img
//     src={formData.imageUrl || 'https://via.placeholder.com/100'}
//     alt="User Avatar"
//     className="h-24 w-24 rounded-lg border-2 border-teal-400 object-cover"
//   />
// </div>

// {/* User Details */}
// <div className="mt-4 space-y-2 text-sm">
//   <div className="flex justify-between border-b border-gray-700 pb-1">
//     <span className="text-gray-400">Name:</span>
//     <span className="font-semibold">{formData.name}</span>
//   </div>
//   <div className="flex justify-between border-b border-gray-700 pb-1">
//     <span className="text-gray-400">Email:</span>
//     <span className="font-semibold">{formData.email}</span>
//   </div>
//   <div className="flex justify-between border-b border-gray-700 pb-1">
//     <span className="text-gray-400">Ticket Type:</span>
//     <span className="font-semibold">{formData.ticketType}</span>
//   </div>
//   <div className="flex justify-between border-b border-gray-700 pb-1">
//     <span className="text-gray-400">Number of Tickets:</span>
//     <span className="font-semibold">{formData.numberOfTickets}</span>
//   </div>
// </div>

//   {/* Barcode Section */}
//   <div className="mt-6 flex flex-col items-center">
//     <div className="flex h-12 w-full max-w-xs items-center justify-center rounded-lg bg-white">
//       <p className="text-sm font-semibold text-gray-900">
//         {Math.floor(Math.random() * 1000000000000)
//           .toString()
//           .padStart(12, '0')}
//       </p>
//     </div>
//     <p className="mt-2 text-xs text-gray-400">
//       Scan this barcode at the venue
//     </p>
//   </div>
// </div> */}
