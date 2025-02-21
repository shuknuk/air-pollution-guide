import Head from "next/head";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
        <div className="min-h-screen bg-gray-50 text-gray-800">
        <Head>
            <title>Air Pollution Survival Guide</title>
            <meta name="description" content="Learn about various air pollutants and how to reduce them." />
        </Head>
        
        <main className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Air Pollution Survival Guide</h1>
            <p className="mb-4">
            <strong>Air pollution</strong> refers to the presence of harmful substances in the atmosphere—these can be gases, 
            particulates, or biological molecules. Air pollution can cause diseases, allergies, and even death in humans; it can also 
            harm other living organisms such as animals and food crops, and may damage the natural environment (for example, 
            ozone depletion and climate change).
            </p>
            <h2 className="text-2xl font-semibold mb-2">Primary vs. Secondary Pollutants</h2>
            <p className="mb-4">
            <strong>Primary pollutants</strong> are emitted directly into the air from sources such as cars, industrial facilities, 
            volcanoes, or wildfires. Examples include carbon monoxide (CO) and sulfur dioxide (SO₂). 
            <strong>Secondary pollutants</strong> form in the atmosphere as a result of chemical reactions between primary pollutants 
            and other atmospheric components; for example, tropospheric ozone (O₃) is formed when nitrogen oxides (NOₓ) and volatile 
            organic compounds (VOCs) react in sunlight.
            </p>
            <p className="mb-4">
            In this guide, you will find detailed information about some of the most common and/or concerning air pollutants, 
            where they come from, how they impact our health and the environment, and what we can do to reduce them.
            </p>
            
            <a
            href="/pollutants"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
            Go to Pollutants List
            </a>
        </main>
        </div>
    </Layout>
  );
}
