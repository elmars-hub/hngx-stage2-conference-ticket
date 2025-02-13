function About() {
  return (
    <div className="px-4 sm:px-6">
      <div className="border-border mx-auto mt-4 h-auto min-h-[400px] max-w-[600px] rounded-[40px] border-2 px-4 py-6">
        <h1 className="text-text text-2xl font-bold">About Us</h1>
        <div className="mb-6 flex h-[3px] w-full rounded-full">
          <div className="bg-borderButtom h-full w-[40%]"></div>
          <div className="bg-borderBg h-full w-[60%]"></div>
        </div>

        <div className="space-y-4">
          <p className="text-stone-300">
            Welcome to our Conference Ticket Management System! We are dedicated
            to making your conference experience seamless and enjoyable.
          </p>

          <p className="text-stone-300">
            Our platform provides an easy way to:
          </p>

          <ul className="list-disc pl-6 text-stone-300">
            <li>Browse upcoming conference events</li>
            <li>Purchase and manage your tickets</li>
            <li>Track your conference schedule</li>
            <li>Access event details and updates</li>
          </ul>

          <p className="mt-4 text-stone-300">
            Whether you are a tech enthusiast, industry professional, or
            knowledge seeker, we are here to connect you with the conferences
            that matter most to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
