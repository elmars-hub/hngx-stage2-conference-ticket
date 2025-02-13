import { useState, useEffect } from 'react';
import TicketSelection from '../components/TicketSelection';
import PersonalInfo from '../components/PersonalInfo';
import Ready from '../components/Ready';
import storage from '../utils/storage';

function Home() {
  const defaultFormData = {
    ticketType: '',
    numberOfTickets: 1,
    imageUrl: '',
    name: '',
    email: '',
    specialRequest: '',
  };

  const [page, setPage] = useState(storage.get('ticketPage') || 0);
  const [formData, setFormData] = useState(
    storage.get('ticketFormData') || defaultFormData,
  );
  const [showValidation, setShowValidation] = useState(false);

  useEffect(() => {
    storage.save('ticketPage', page);
    storage.save('ticketFormData', formData);
  }, [page, formData]);

  const FormTitles = ['Ticket Selection', 'Attendee Details', 'Ready'];

  const handleNextPage = () => {
    if (page === 1) {
      setShowValidation(true);
      if (
        !formData.name ||
        !formData.email ||
        !formData.imageUrl ||
        !formData.specialRequest
      ) {
        return;
      }
    }
    setPage((currPage) => currPage + 1);
  };

  const handlePrevPage = () => {
    setShowValidation(false);
    setPage((currPage) => currPage - 1);
  };

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const resetForm = () => {
    setPage(0);
    setFormData(defaultFormData);
    setShowValidation(false);
    storage.remove('ticketPage');
    storage.remove('ticketFormData');
  };

  function PageDisplay() {
    if (page === 0) {
      return (
        <TicketSelection formData={formData} updateFormData={updateFormData} />
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          formData={formData}
          updateFormData={updateFormData}
          showValidation={showValidation}
        />
      );
    } else {
      return <Ready formData={formData} />;
    }
  }

  return (
    <div className="px-2 pb-10 sm:px-4 md:px-6">
      <div className="mx-auto mt-3 flex h-auto min-h-[600px] max-w-[700px] flex-col rounded-[20px] border-2 border-borderBg bg-subBackground px-4 py-4 sm:mt-5 sm:min-h-[700px] sm:rounded-[30px] sm:px-6 sm:py-6 md:min-h-[800px] md:rounded-[40px] md:px-[48px] md:py-[48px]">
        <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center sm:gap-0">
          <h1 className="text-[24px] font-bold text-text sm:text-[28px] md:text-[32px]">
            {FormTitles[page]}
          </h1>

          <span className="font-roboto font-semibold text-white">
            Step {page + 1} / 3
          </span>
        </div>

        <div className="mb-4 flex h-[4px] w-full rounded-full sm:mb-6">
          <div
            className="h-full bg-borderButtom transition-all duration-300"
            style={{ width: `${((page + 1) / FormTitles.length) * 100}%` }}
          ></div>
          <div
            className="h-full bg-borderBg transition-all duration-300"
            style={{ width: `${(1 - (page + 1) / FormTitles.length) * 100}%` }}
          ></div>
        </div>

        <div
          className={`min-h-[500px] max-w-[604px] rounded-[16px] border-2 px-3 sm:min-h-[600px] sm:rounded-[24px] sm:px-4 md:min-h-[682px] md:rounded-[32px] md:px-[24px] ${page === FormTitles.length - 1 ? 'border-none' : 'border-fextBg'}`}
        >
          {PageDisplay()}

          <div className="mt-4 flex flex-col-reverse gap-4 pb-4 sm:mt-6 sm:flex-row sm:gap-4 sm:pb-6 md:mt-8">
            {page === 0 && (
              <>
                <button
                  onClick={resetForm}
                  className="w-full rounded-lg border border-fextBg bg-subBackground py-3 text-sm font-semibold text-borderButtom transition sm:py-3 sm:text-base"
                >
                  Cancel
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={!formData.ticketType}
                  className="w-full rounded-lg bg-borderButtom py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-gray-500 sm:py-3 sm:text-base"
                >
                  Next
                </button>
              </>
            )}

            {page === 1 && (
              <>
                <button
                  onClick={handlePrevPage}
                  className="w-full rounded-lg border border-fextBg bg-subBackground py-3 text-sm font-semibold text-borderButtom transition sm:py-3 sm:text-base"
                >
                  Back
                </button>
                <button
                  onClick={handleNextPage}
                  className="w-full rounded-lg bg-borderButtom py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-gray-500 sm:py-3 sm:text-base"
                >
                  Get My Free Ticket
                </button>
              </>
            )}

            {page === FormTitles.length - 1 && (
              <>
                <button
                  onClick={resetForm}
                  className="w-full rounded-lg border border-fextBg bg-subBackground py-3 text-sm font-semibold text-borderButtom transition sm:py-3 sm:text-base"
                >
                  Book Another Ticket
                </button>
                <button className="w-full rounded-lg bg-borderButtom py-3 text-sm font-semibold text-white transition sm:py-3 sm:text-base">
                  Download Ticket
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
