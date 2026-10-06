// Rounded, approximate figures. Edit freely.

export const species = [
  { id: "emperor", name: "Emperor", sci: "Aptenodytes forsteri", height: "100–130 cm", weight: "22–45 kg", life: "15–20 yrs", diet: "Fish, squid, krill", status: "Near Threatened", pop: "≈ 600,000", habitat: "Antarctic sea ice", note: "The largest penguin. Males incubate a single egg on their feet through the Antarctic winter." },
  { id: "king", name: "King", sci: "Aptenodytes patagonicus", height: "85–95 cm", weight: "11–16 kg", life: "15–20 yrs", diet: "Lanternfish, squid", status: "Least Concern", pop: "≈ 3,200,000", habitat: "Sub-Antarctic islands", note: "Second largest. Chicks stay in brown fluff for about a year, longer than any other penguin." },
  { id: "adelie", name: "Adélie", sci: "Pygoscelis adeliae", height: "46–71 cm", weight: "3.6–6 kg", life: "11–20 yrs", diet: "Krill, fish", status: "Least Concern", pop: "≈ 7,500,000", habitat: "Antarctic coast", note: "Builds nests from small stones and steals them from neighbours." },
  { id: "chinstrap", name: "Chinstrap", sci: "Pygoscelis antarcticus", height: "68–76 cm", weight: "3.2–5.3 kg", life: "15–20 yrs", diet: "Krill", status: "Least Concern", pop: "≈ 8,000,000", habitat: "Antarctic Peninsula, islands", note: "Named for the thin black line under its chin. Breeds in huge, noisy colonies." },
  { id: "gentoo", name: "Gentoo", sci: "Pygoscelis papua", height: "75–90 cm", weight: "5–8.5 kg", life: "15–20 yrs", diet: "Krill, fish, squid", status: "Least Concern", pop: "≈ 774,000", habitat: "Sub-Antarctic & Peninsula", note: "The fastest swimmer of all penguins, reaching about 35 km/h." },
  { id: "macaroni", name: "Macaroni", sci: "Eudyptes chrysolophus", height: "70 cm", weight: "3.3–6.4 kg", life: "≈ 15 yrs", diet: "Krill, squid", status: "Vulnerable", pop: "≈ 6,300,000", habitat: "Sub-Antarctic islands", note: "Golden crest feathers swept back from the eyes. Very large breeding colonies." },
  { id: "rockhopper", name: "Rockhopper", sci: "Eudyptes chrysocome", height: "45–58 cm", weight: "2–3.5 kg", life: "≈ 10 yrs", diet: "Krill, small fish", status: "Vulnerable", pop: "≈ 2,500,000", habitat: "Sub-Antarctic rocky shores", note: "Hops from rock to rock instead of sliding on its belly." },
  { id: "magellanic", name: "Magellanic", sci: "Spheniscus magellanicus", height: "61–76 cm", weight: "3–6 kg", life: "≈ 25 yrs", diet: "Sardines, squid", status: "Least Concern", pop: "≈ 2,200,000", habitat: "Patagonian coasts", note: "Digs burrows in soil. Has two black bands across its chest." },
  { id: "humboldt", name: "Humboldt", sci: "Spheniscus humboldti", height: "56–70 cm", weight: "3.5–6.5 kg", life: "15–20 yrs", diet: "Anchovy, sardines", status: "Vulnerable", pop: "≈ 24,000", habitat: "Chile & Peru coast", note: "Lives on warm desert coasts, fed by the cold Humboldt Current." },
  { id: "african", name: "African", sci: "Spheniscus demersus", height: "60–70 cm", weight: "2.2–3.5 kg", life: "10–27 yrs", diet: "Sardines, anchovies", status: "Endangered", pop: "≈ 20,000", habitat: "South Africa & Namibia", note: "Nicknamed the 'jackass penguin' for its donkey-like bray. Populations have fallen sharply." },
  { id: "galapagos", name: "Galápagos", sci: "Spheniscus mendiculus", height: "49 cm", weight: "1.7–2.6 kg", life: "15–20 yrs", diet: "Small schooling fish", status: "Endangered", pop: "≈ 1,900", habitat: "Galápagos Islands", note: "The only penguin that lives and breeds north of the equator." },
  { id: "little", name: "Little Blue", sci: "Eudyptula minor", height: "33 cm", weight: "1–1.5 kg", life: "6–7 yrs", diet: "Small fish, squid", status: "Least Concern", pop: "≈ 1,000,000", habitat: "Australia & New Zealand", note: "The smallest penguin. Colonies return to shore together at dusk." },
  { id: "yelloweyed", name: "Yellow-eyed", sci: "Megadyptes antipodes", height: "65 cm", weight: "5–8 kg", life: "≈ 20 yrs", diet: "Fish, squid", status: "Endangered", pop: "≈ 3,400", habitat: "New Zealand forest coasts", note: "One of the rarest penguins. Nests out of sight of other pairs." },
];

// Places on the globe. count = approximate number of individual penguins.
export const colonies = [
  { id: "antarctic-coast", name: "Antarctic coast", country: "Antarctica", lat: -75, lon: 0, count: 5000000, species: ["Emperor", "Adélie"], text: "Ice-bound coasts around the continent host emperor and Adélie penguins." },
  { id: "peninsula", name: "Antarctic Peninsula", country: "Antarctica", lat: -64.5, lon: -62, count: 6000000, species: ["Chinstrap", "Gentoo", "Adélie"], text: "The warmest part of Antarctica and home to huge chinstrap colonies." },
  { id: "south-georgia", name: "South Georgia", country: "UK territory", lat: -54.3, lon: -36.7, count: 3500000, species: ["King", "Macaroni", "Gentoo"], text: "Salisbury Plain alone holds hundreds of thousands of king penguins." },
  { id: "falklands", name: "Falkland Islands", country: "UK territory", lat: -51.7, lon: -59, count: 1100000, species: ["Gentoo", "Rockhopper", "Magellanic", "King"], text: "A major stronghold for gentoo and rockhopper penguins." },
  { id: "patagonia", name: "Patagonia", country: "Argentina / Chile", lat: -44.0, lon: -65.2, count: 1500000, species: ["Magellanic"], text: "Punta Tombo is one of the largest Magellanic penguin colonies in the world." },
  { id: "humboldt-coast", name: "Chile & Peru coast", country: "Chile / Peru", lat: -29, lon: -71.5, count: 24000, species: ["Humboldt"], text: "Humboldt penguins nest on desert islands along the cold current." },
  { id: "galapagos", name: "Galápagos Islands", country: "Ecuador", lat: -0.4, lon: -91.4, count: 1900, species: ["Galápagos"], text: "The northernmost penguins, living right on the equator." },
  { id: "south-africa", name: "South Africa & Namibia", country: "Southern Africa", lat: -34.2, lon: 18.4, count: 20000, species: ["African"], text: "Boulders Beach near Cape Town is a famous tourist colony." },
  { id: "crozet", name: "Crozet & Kerguelen", country: "French Southern Lands", lat: -46.4, lon: 51.7, count: 4500000, species: ["King", "Macaroni", "Rockhopper"], text: "Remote Indian Ocean islands with some of the biggest king penguin colonies." },
  { id: "heard-macquarie", name: "Macquarie & Heard Islands", country: "Australia", lat: -54.5, lon: 158.9, count: 3000000, species: ["Royal", "King", "Macaroni"], text: "Macquarie Island is the only breeding place of the royal penguin." },
  { id: "australia", name: "Southern Australia", country: "Australia", lat: -38.5, lon: 145.2, count: 1000000, species: ["Little Blue"], text: "Phillip Island's evening 'penguin parade' draws visitors from all over the world." },
  { id: "new-zealand", name: "New Zealand", country: "New Zealand", lat: -46.0, lon: 170.5, count: 100000, species: ["Yellow-eyed", "Little Blue", "Fiordland"], text: "Home to more penguin species than any other country." },
  { id: "ross-sea", name: "Ross Sea", country: "Antarctica", lat: -77.5, lon: 168, count: 2500000, species: ["Adélie", "Emperor"], text: "Cape Adare hosts one of the biggest Adélie colonies on Earth." },
];

export const facts = [
  { title: "They can't fly, but they 'fly' underwater", text: "Stiff, flat flippers work like wings in water. Some species dive deeper than 500 metres." },
  { title: "Their feathers are waterproof armour", text: "Dense, oiled feathers trap a layer of warm air against the skin, and a thick fat layer adds insulation." },
  { title: "Dads do the babysitting", text: "Male emperors fast for about two months in freezing Antarctic winds while keeping the egg warm." },
  { title: "Pebbles are proposals", text: "Male Adélie and gentoo penguins offer smooth stones to a partner to build the nest." },
  { title: "They drink salt water", text: "A gland above the eyes filters salt out of the blood, and it leaves as a drip or sneeze from the beak." },
  { title: "Their ancestors were giants", text: "Fossils from about 37 million years ago show penguins well over a metre tall." },
];

export const details = [
  { title: "Body", text: "Streamlined, torpedo-shaped bodies, paddle-like flippers and webbed feet make penguins strong swimmers. Their dark back and white belly camouflage them from predators above and below." },
  { title: "Diet", text: "Penguins eat krill, small fish and squid. A big colony can eat tonnes of food every day, so they depend on healthy oceans." },
  { title: "Family life", text: "Most species breed in colonies and share the work of incubating eggs and feeding chicks. Many pairs reunite with the same partner each season." },
  { title: "Staying warm", text: "Thick blubber, waterproof feathers and huddling keep them warm. In hot places, penguins cool off with bare patches of skin and by panting." },
  { title: "Predators", text: "At sea: leopard seals, orcas and sea lions. On land: skuas, gulls and, for island chicks, introduced cats, rats and foxes." },
  { title: "Threats", text: "Warming oceans, melting sea ice, overfishing, oil spills and habitat loss affect many species. About half of all penguin species are Vulnerable or worse." },
];
