import { GoogleGenerativeAI } from "@google/generative-ai";



const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1, // Controls randomness; valid values are usually 0.1 to 1.0
  topP: 0.95,     // Cumulative probability threshold
  topK: 40,       // Updated to the maximum supported value within range (1–40)
  maxOutputTokens: 8192, // Maximum number of tokens in the response
  responseMimeType: "application/json", // Response format
};


  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for a Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place image URL, Geo Coordinates, ticket Pricing, rating. Time travel each of the locations 3 days with each day plan with the best time to visit in JSON format. "},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\"hotels\": [{\"hotelName\": \"The D Las Vegas\", \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\", \"price\": \"$50 - $100 per night\", \"hotelImageUrl\": \"https://www.thedorleans.com/images/default-source/hotel-images/hotel-exterior-day.jpg?sfvrsn=8c5540f_2\", \"geoCoordinates\": {\"latitude\": 36.1699, \"longitude\": -115.1421}, \"rating\": \"4 stars\", \"description\": \"A budget-friendly hotel located in the heart of Fremont Street. It features a casino, several dining options, and a rooftop pool.\"}, {\"hotelName\": \"Golden Nugget Las Vegas\", \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\", \"price\": \"$75 - $150 per night\", \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/images/hero-images/gn-lv-exterior-hero-desktop.jpg\", \"geoCoordinates\": {\"latitude\": 36.1698, \"longitude\": -115.1415}, \"rating\": \"4.5 stars\", \"description\": \"A historic hotel with a modern twist, featuring a casino, several restaurants, a pool complex, and a shark tank.\"}, {\"hotelName\": \"Circus Circus Hotel & Casino\", \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\", \"price\": \"$40 - $80 per night\", \"hotelImageUrl\": \"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/7c/1f/62.jpg\", \"geoCoordinates\": {\"latitude\": 36.1116, \"longitude\": -115.1722}, \"rating\": \"3.5 stars\", \"description\": \"A family-friendly hotel with a circus theme, offering a variety of entertainment, dining options, and a midway.\"}, {\"hotelName\": \"The Strat Hotel, Casino & SkyPod\", \"hotelAddress\": \"2000 S Las Vegas Blvd, Las Vegas, NV 89104\", \"price\": \"$60 - $120 per night\", \"hotelImageUrl\": \"https://www.thestrat.com/media/images/hero-images/strat-exterior-hero.jpg\", \"geoCoordinates\": {\"latitude\": 36.1204, \"longitude\": -115.1653}, \"rating\": \"4 stars\", \"description\": \"A hotel located on the Strip, offering a casino, dining options, a pool, and an observation tower with panoramic views.\"}, {\"hotelName\": \"Main Street Station Casino, Brewery & Hotel\", \"hotelAddress\": \"200 N 3rd St, Las Vegas, NV 89101\", \"price\": \"$55 - $110 per night\", \"hotelImageUrl\": \"https://www.mainstreetstationcasino.com/media/images/hero-images/hero-exterior-day.jpg\", \"geoCoordinates\": {\"latitude\": 36.1706, \"longitude\": -115.1388}, \"rating\": \"4 stars\", \"description\": \"A historic hotel located downtown, featuring a casino, brewery, several dining options, and a pool.\"}], \"itinerary\": [{\"day\": \"Day 1\", \"plan\": [{\"placeName\": \"Fremont Street Experience\", \"placeDetails\": \"A pedestrian mall featuring a canopy of lights and free entertainment. Enjoy live music, street performers, and the Viva Vision light show.\", \"placeImageUrl\": \"https://www.visitlasvegas.com/media/5127/freemont-street-experience-viva-vision.jpg\", \"geoCoordinates\": {\"latitude\": 36.1699, \"longitude\": -115.1421}, \"ticketPricing\": \"Free\", \"timeTravel\": \"Evening (7:00 PM - 10:00 PM)\"}, {\"placeName\": \"Neon Museum\", \"placeDetails\": \"A museum showcasing historic neon signs from Las Vegas's past. Take a guided tour or stroll through the 'Neon Boneyard'.\", \"placeImageUrl\": \"https://www.neonmuseum.org/wp-content/uploads/2017/08/Neon-Museum-Sign-Photo-1.jpg\", \"geoCoordinates\": {\"latitude\": 36.1756, \"longitude\": -115.1368}, \"ticketPricing\": \"$20 per person\", \"timeTravel\": \"Afternoon (2:00 PM - 4:00 PM)\"}, {\"placeName\": \"Heart Bar at the Plaza\", \"placeDetails\": \"Enjoy live music and a casual atmosphere at this iconic downtown bar. It's a great spot to people-watch and soak up the local vibe.\", \"placeImageUrl\": \"https://www.plazahotelcasino.com/wp-content/uploads/2019/01/Heart-Bar-at-the-Plaza-Las-Vegas-1-1.jpg\", \"geoCoordinates\": {\"latitude\": 36.1692, \"longitude\": -115.1404}, \"ticketPricing\": \"No entry fee\", \"timeTravel\": \"Late night (10:00 PM - 12:00 AM)\"}], \"bestTimeVisit\": \"Evening\"}, {\"day\": \"Day 2\", \"plan\": [{\"placeName\": \"Hoover Dam\", \"placeDetails\": \"A massive dam and engineering marvel located just outside Las Vegas. Take a tour to learn about its history and significance.\", \"placeImageUrl\": \"https://www.nps.gov/hoov/planyourvisit/images/hooverdam-1_30.jpg\", \"geoCoordinates\": {\"latitude\": 36.0017, \"longitude\": -114.9714}, \"ticketPricing\": \"$30 per person\", \"timeTravel\": \"Morning (9:00 AM - 12:00 PM)\"}, {\"placeName\": \"Red Rock Canyon National Conservation Area\", \"placeDetails\": \"A scenic area offering hiking trails, rock formations, and stunning views. Take a drive through the scenic loop or hike to one of the many overlooks.\", \"placeImageUrl\": \"https://www.blm.gov/sites/default/files/styles/720x480/public/2019-09/red-rock-canyon-national-conservation-area.jpg?itok=jV-1e7L0\", \"geoCoordinates\": {\"latitude\": 36.1794, \"longitude\": -115.3046}, \"ticketPricing\": \"$15 per vehicle\", \"timeTravel\": \"Afternoon (1:00 PM - 4:00 PM)\"}, {\"placeName\": \"In-N-Out Burger\", \"placeDetails\": \"A popular fast-food chain known for its fresh ingredients and classic burgers. Enjoy a casual dinner with your partner.\", \"placeImageUrl\": \"https://www.in-n-out.com/images/media/hamburger-and-fries.jpg\", \"geoCoordinates\": {\"latitude\": 36.1701, \"longitude\": -115.1435}, \"ticketPricing\": \"No entry fee\", \"timeTravel\": \"Evening (6:00 PM - 8:00 PM)\"}], \"bestTimeVisit\": \"Morning\"}, {\"day\": \"Day 3\", \"plan\": [{\"placeName\": \"Bellagio Conservatory & Botanical Garden\", \"placeDetails\": \"A stunning botanical garden featuring seasonal displays of flowers, plants, and sculptures. It's a beautiful and free attraction on the Strip.\", \"placeImageUrl\": \"https://www.bellagio.com/content/dam/mgmresorts/bellagio/images/gallery/conservatory-botanical-garden/conservatory-botanical-garden-hero.jpg\", \"geoCoordinates\": {\"latitude\": 36.1115, \"longitude\": -115.1744}, \"ticketPricing\": \"Free\", \"timeTravel\": \"Morning (10:00 AM - 12:00 PM)\"}, {\"placeName\": \"The LINQ Promenade\", \"placeDetails\": \"An outdoor shopping and entertainment district with a variety of restaurants, shops, and attractions. Ride the High Roller observation wheel for panoramic views.\", \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/hero-images/linq-promenade-day-hero.jpg\", \"geoCoordinates\": {\"latitude\": 36.1130, \"longitude\": -115.1702}, \"ticketPricing\": \"$30 per person\", \"timeTravel\": \"Afternoon (1:00 PM - 4:00 PM)\"}, {\"placeName\": \"The Cosmopolitan of Las Vegas\", \"placeDetails\": \"A luxurious hotel with a stylish atmosphere. Enjoy a happy hour drink at Chandelier Bar for a sophisticated evening.\", \"placeImageUrl\": \"https://www.cosmopolitanlasvegas.com/content/dam/mgmresorts/cosmopolitan/images/gallery/cosmopolitan-exterior-hero.jpg\", \"geoCoordinates\": {\"latitude\": 36.1102, \"longitude\": -115.1733}, \"ticketPricing\": \"No entry fee\", \"timeTravel\": \"Evening (7:00 PM - 9:00 PM)\"}], \"bestTimeVisit\": \"Morning\"}]}\n\n```"},
        ],
      },
    ],
  });
