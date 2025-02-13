/* eslint-disable react/prop-types */
function TicketSelection({ formData, updateFormData }) {
  const tickets = [
    { type: 'Free', label: 'REGULAR ACCESS', price: 'Free' },
    { type: 'VIP', label: 'VIP ACCESS', price: '$150' },
    { type: 'VVIP', label: 'VVIP ACCESS', price: '$150' },
  ];

  return (
    <>
      <div className="road-gradient mx-auto mt-8 flex min-h-[200px] max-w-[556px] flex-col items-center justify-center rounded-[24px] border-2 border-fextBg text-stone-200">
        <h1 className="font-RoadRage text-[48px] sm:text-[62px]">
          Techember Fest &quot;25
        </h1>
        <p className="font-roboto text-finalText mx-auto w-[239px] text-center text-sm leading-[21px] lg:max-w-[340px] lg:text-[16px]">
          Join us for an unforgettable experience at Techember Tech, Secure your
          spot now!
        </p>

        <div className="mt-4 flex flex-col items-center gap-y-1 pb-2 lg:flex-row lg:items-center lg:justify-center lg:gap-x-1">
          <span className="font-roboto text-finalText text-[16px] leading-[24px] lg:text-lg">
            📍 14 Festac Road, Amuwo, Lagos
          </span>
          <span className="hidden lg:block">||</span>
          <p className="font-roboto text-finalText text-base leading-[24px]">
            March 15, 2025 | 7:00 PM
          </p>
        </div>
      </div>

      <div className="mt-8 flex h-[4px] w-full rounded-full">
        <div className="h-full w-[100%] bg-borderBg"></div>
      </div>

      <h2 className="font-roboto mb-2 mt-8 text-base text-white">
        Select Ticket Type:
      </h2>
      <div className="max-w-[556px] rounded-3xl border-2 border-fextBg bg-ticketBg px-4 py-4">
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tickets.map((ticket) => (
            <button
              key={ticket.type}
              onClick={() => updateFormData({ ticketType: ticket.type })}
              className={`relative rounded-xl border border-border px-2 py-2 transition-colors ${
                formData.ticketType === ticket.type
                  ? 'border-border bg-selectBg'
                  : 'border-border hover:bg-selectBg'
              } `}
            >
              <div className="font-roboto text-finalText mb-2 text-left text-2xl font-bold">
                {ticket.price}
              </div>
              <div className="font-roboto text-finalText mb-2 text-left text-sm font-medium">
                {ticket.label}
              </div>
              <div className="font-roboto text-finalText text-left text-sm">
                20/52
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <label className="font-roboto text-finalText mb-2 block text-xl">
          Number of Tickets
        </label>
        <select
          value={formData.numberOfTickets}
          onChange={(e) =>
            updateFormData({ numberOfTickets: Number(e.target.value) })
          }
          className="font-roboto text-finalText w-full rounded-lg border-2 border-fextBg bg-subBackground p-4 focus:outline-none"
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default TicketSelection;
