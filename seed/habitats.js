const db = require('../db')
const Habitat = require('../models/habitat')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const habitats = [{
    name: "Africa",
    description: "Africa is the second largest continent on Earth, covering about one-fifth of the planet's landmass. It's rich in natural resources, including water, oil, natural gas, minerals, forests, and wildlife.",
  },
  {
    name: "Australia",
    description: "Australia is the world's sixth largest country by land area and the only country that governs an entire continent. It's made up of the Australian continent, Tasmania, and many smaller islands.",
  },
  {
    name: "Tropics",
    description: "The tropics are the region of Earth that is closest to the equator and is characterized by hot, humid weather.",
  }]

    await Habitat.insertMany(habitats)
    console.log("Created some habitats!")
}
const run = async () => {
    await main()
    db.close()
}

run()