import Head from "next/head";
import Image from "next/image";

// Example images stored in /public/images (optional: you can use placeholders like via Unsplash, etc.)
import ozoneImage from "../public/images/ozone.jpg";
import noxImage from "../public/images/nox.jpg";
import so2Image from "../public/images/so2.jpg";
import leadImage from "../public/images/lead.jpg";
import coImage from "../public/images/co.jpg";
import co2Image from "../public/images/co2.jpg";
import vocImage from "../public/images/voc.jpg";
import methaneImage from "../public/images/methane.jpg";
import nmhcImage from "../public/images/nmhc.jpg";
import pmImage from "../public/images/pm.jpg";
import panImage from "../public/images/pan.jpg";
import cfcImage from "../public/images/cfc.jpg";
import mercuryImage from "../public/images/mercury.jpg";

const pollutantsData = [
  {
    name: "Ozone (Tropospheric)",
    symbol: "O₃",
    primarySecondary: "Secondary (2°)",
    isCriteria: "Yes",
    sources: "Formed by NOx and VOCs reacting in sunlight; worsened by heat (urban areas).",
    problems: "Lung irritation, asthma attacks, damages crops (e.g., soybeans).",
    solutions: "Reduce NOx/VOC emissions with cleaner fuels, urban tree planting.",
    image: ozoneImage,
  },
  {
    name: "Nitrogen Oxides (NOx)",
    symbol: "NO, NO₂",
    primarySecondary: "Primary (1°)",
    isCriteria: "Yes",
    sources: "Vehicle exhaust, power plants, industrial burning of fossil fuels.",
    problems: "Acid rain, smog, chronic bronchitis.",
    solutions: "Catalytic converters, stricter factory emission limits.",
    image: noxImage,
  },
  {
    name: "Sulfur Dioxide",
    symbol: "SO₂",
    primarySecondary: "Primary (1°)",
    isCriteria: "Yes",
    sources: "Coal-fired power plants, oil refining, volcanic eruptions.",
    problems: "Acid rain, damages forests/lakes, aggravates asthma.",
    solutions: "Flue gas desulfurization (scrubbers), switch to wind/solar energy.",
    image: so2Image,
  },
  {
    name: "Lead",
    symbol: "Pb",
    primarySecondary: "Secondary (2°) [though historically also primary]",
    isCriteria: "Yes",
    sources: "Historically from gasoline, now paint, batteries, smelting.",
    problems: "Brain damage in kids, kidney issues, wildlife poisoning.",
    solutions: "Leaded gas ban, safe disposal of batteries/paint.",
    image: leadImage,
  },
  {
    name: "Carbon Monoxide",
    symbol: "CO",
    primarySecondary: "Primary (1°)",
    isCriteria: "Yes",
    sources: "Incomplete combustion (cars, wildfires, heaters).",
    problems: "Binds to hemoglobin, causing dizziness, heart strain.",
    solutions: "Improved engine efficiency, CO detectors in homes.",
    image: coImage,
  },
  {
    name: "Carbon Dioxide",
    symbol: "CO₂",
    primarySecondary: "Primary (1°)",
    isCriteria: "No",
    sources: "Fossil fuel burning (coal, oil, gas), deforestation, cement production.",
    problems: "Global warming, ocean acidification, extreme weather.",
    solutions: "Carbon taxes, reforestation, electric vehicles.",
    image: co2Image,
  },
  {
    name: "VOCs (Volatile Organic Compounds)",
    symbol: "Various (e.g., C₆H₆)",
    primarySecondary: "Primary (1°)",
    isCriteria: "No",
    sources: "Paints, gasoline vapors, chemical manufacturing.",
    problems: "Smog, carcinogenic (e.g., benzene causes leukemia).",
    solutions: "Use water-based paints, vapor recovery at gas stations.",
    image: vocImage,
  },
  {
    name: "Methane",
    symbol: "CH₄",
    primarySecondary: "Primary (1°)",
    isCriteria: "No",
    sources: "Livestock digestion, rice paddies, landfills, natural gas leaks.",
    problems: "25x more potent than CO₂ as greenhouse gas, contributes to haze.",
    solutions: "Methane digesters on farms, leak detection in pipelines.",
    image: methaneImage,
  },
  {
    name: "Non-methane hydrocarbons (NMHC)",
    symbol: "Various",
    primarySecondary: "Primary (1°)",
    isCriteria: "No",
    sources: "Gasoline combustion, oil refining, solvent use.",
    problems: "Precursor to ozone/smog, some are toxic (e.g. toluene).",
    solutions: "Low-emission fuels, industrial ventilation systems.",
    image: nmhcImage,
  },
  {
    name: "Particulate Matter (PM)",
    symbol: "PM",
    primarySecondary: "Both (1°/2°)",
    isCriteria: "Yes",
    sources:
      "Construction dust, diesel exhaust, wildfires; secondary formation from SO₂/NOx.",
    problems: "Lung cancer, heart disease, reduced visibility.",
    solutions: "Electrostatic precipitators, ban on open burning.",
    image: pmImage,
  },
  {
    name: "PANs (Peroxyacyl nitrates)",
    symbol: "C₂H₃NO₅",
    primarySecondary: "Secondary (2°)",
    isCriteria: "No",
    sources: "Photochemical reactions of VOCs + NOx in polluted air.",
    problems: "Eye irritation, crop yield loss (e.g. tomatoes), toxic to plants.",
    solutions: "Control VOC/NOx sources, air quality monitoring.",
    image: panImage,
  },
  {
    name: "Chlorofluorocarbons (CFCs)",
    symbol: "CF₂Cl₂ (common example)",
    primarySecondary: "Primary (1°)",
    isCriteria: "No",
    sources: "Old refrigerators, AC units, aerosol cans (pre-1990s).",
    problems: "Destroys stratospheric ozone, powerful greenhouse gas (1000x CO₂).",
    solutions: "Phase out old refrigerants, proper disposal of AC units/aerosols.",
    image: cfcImage,
  },
  {
    name: "Mercury",
    symbol: "Hg",
    primarySecondary: "Primary (1°)",
    isCriteria: "No",
    sources: "Coal combustion, gold mining, waste incineration.",
    problems: "Brain/nerve damage (e.g. Minamata disease), fish contamination.",
    solutions: "Mercury-specific filters, phase out coal plants.",
    image: mercuryImage,
  },
];

export default function Pollutants() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Air Pollution Survival Guide - Pollutants</title>
      </Head>
      
      <main className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">List of Common Air Pollutants</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {pollutantsData.map((pollutant, index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50 shadow hover:shadow-md transition">
              {/* Image */}
              <div className="relative w-full h-48 mb-4">
                <Image 
                  src={pollutant.image} 
                  alt={pollutant.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  placeholder="blur" // if using Next.js blur placeholder
                />
              </div>
              
              {/* Text Info */}
              <h2 className="text-xl font-semibold mb-2">{pollutant.name}</h2>
              <p><strong>Chemical Symbol/Formula:</strong> {pollutant.symbol}</p>
              <p><strong>Primary/Secondary:</strong> {pollutant.primarySecondary}</p>
              <p><strong>Criteria Pollutant:</strong> {pollutant.isCriteria}</p>
              <p className="mt-2">
                <strong>Sources/Causes:</strong> {pollutant.sources}
              </p>
              <p className="mt-2">
                <strong>Problems/Concerns:</strong> {pollutant.problems}
              </p>
              <p className="mt-2">
                <strong>Solutions:</strong> {pollutant.solutions}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <a
            href="/more-info"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            For More Information
          </a>
        </div>
      </main>
    </div>
  );
}
