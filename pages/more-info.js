import Head from "next/head";

export default function MoreInfo() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Air Pollution Survival Guide - More Information</title>
      </Head>
      
      <main className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">For More Information</h1>
        <p className="mb-4">
          Here are some reputable websites where you can learn more about air pollution, 
          health impacts, and current regulations:
        </p>
        
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a href="https://www.epa.gov/criteria-air-pollutants" className="text-blue-600 hover:underline">
              U.S. Environmental Protection Agency (EPA) - Criteria Air Pollutants
            </a>
          </li>
          <li>
            <a href="https://www.who.int/health-topics/air-pollution" className="text-blue-600 hover:underline">
              World Health Organization (WHO) - Air Pollution
            </a>
          </li>
          <li>
            <a href="https://climate.nasa.gov/" className="text-blue-600 hover:underline">
              NASA Climate
            </a>
          </li>
          <li>
            <a href="https://www.noaa.gov/air-quality" className="text-blue-600 hover:underline">
              NOAA Air Quality
            </a>
          </li>
          <li>
            <a href="https://www.nps.gov/subjects/air/index.htm" className="text-blue-600 hover:underline">
              National Park Service - Air Resources
            </a>
          </li>
        </ul>
        
        <p className="mt-8">
          Thank you for visiting our Air Pollution Survival Guide! We hope this helps you 
          understand the importance of maintaining clean air for both human health and 
          the well-being of our planet.
        </p>
        
        <div className="mt-8">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Back to Home
          </a>
        </div>
      </main>
    </div>
  );
}
