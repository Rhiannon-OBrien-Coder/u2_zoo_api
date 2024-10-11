const db = require('../db')
const Habitat = require('../models/habitat')
const Animal = require('../models/animal.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const africa = await Habitat.find({ name: 'Africa' })
    const aus = await Habitat.find({ name: 'Australia' })
    const tropics = await Habitat.find({ name: 'Tropics' })

  const animals = [
    {
      name: "Giraffe",
      scientific_name: "Giraffa",
      description: "Giraffes are the world's tallest land animals, with a number of unique features that set them apart from other mammals.",
      region: "Giraffes use both semi-arid savannah and savannah woodlands in Africa.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQSPB3ACk-BNkeSp2uKAyyNcZHdsYC_z4vA&s",
      hasFur: true,
      habitat: africa._id
    },
    {
      name: "Elephant",
      scientific_name: "Elephantidae",
      description: "Elephants are the largest land mammals on earth and have distinctly massive bodies, large ears, and long trunks.",
      region: "Elephants live in a variety of habitats across Africa and Asia, including forests, grasslands, savannas, deserts, swamps, and highlands.",
      image: "https://www.humanesociety.org/sites/default/files/2024-03/elephants_401765.jpg",
      hasFur: false,
      habitat: africa._id
    },
    {
      name: "Mongoose",
      scientific_name: "Herpestidae",
      description: "Mongooses are small to medium-sized mammals with short legs, long bodies, and furry tails. This is also a library used in software engineering to aid with databases.",
      region: "Mongooses can live in a variety of habitats across Asia and Africa, including grasslands, woodlands, rocky areas, and semi-arid regions.",
      image: "https://i.natgeofe.com/n/11be97ea-d29b-496a-893b-bb9af02388b0/4385663.jpg",
      hasFur: true,
      habitat: africa._id
    },
    {
      name: "Penguin",
      scientific_name: "Spheniscidae",
      description: "Penguins are seabirds with many unique characteristics, including a large head, short neck, and elongated body. Their tails are short, stiff, and wedge-shaped. Their legs and webbed feet are set far back on the body, which gives penguins their upright posture on land. When snow conditions are right, they will slide on their bellies.",
      region: "Penguins live in the Southern Hemisphere, primarily in the cooler waters and on the coasts of the continent.",
      image: "https://www.americanhumane.org/app/uploads/2022/01/Emperor-penguin2.png",
      hasFur: false,
      habitat: aus._id
    },
    {
      name: "Kookaburra",
      scientific_name: "Dacelo",
      description: "Kookaburras are terrestrial tree kingfishers of the genus Dacelo native to Australia and New Guinea, which grow to between 28 and 47 cm in length and weigh around 300 g. The name is a loanword from Wiradjuri guuguubarra, onomatopoeic of its call.",
      region: "Kookaburras are native to eastern Australia, but have been introduced to other parts of Australia and New Zealand",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Dacelo_novaeguineae_waterworks.jpg",
      hasFur: false,
      habitat: aus._id
    },
    {
      name: "Red Panda",
      scientific_name: "Ailurus fulgens",
      description: "The red panda is slightly larger than a domestic cat with a bear-like body and thick russet fur. The belly and limbs are black, and there are white markings on the side of the head and above its small eyes. Red pandas are very skillful and acrobatic animals that predominantly stay in trees.",
      region: "Red pandas live in the temperate forests of the Himalayas and other high mountains in Asia.",
      image: "https://www.oregonzoo.org/sites/default/files/2023-08/7-28-2021rA-114.jpg",
      hasFur: true,
      habitat: aus._id
    },
    {
      name: "Gibbon",
      scientific_name: "Hylobatidae",
      description: "Gibbons are tree-dwelling primates with long arms, no tails, and dense hair that can be cream to black in color. They are known for their acrobatic abilities, and are often found in the tropical rainforests of Southeast Asia.",
      region: "Gibbons are found in rainforests.",
      image: "https://cdn.britannica.com/39/146339-050-D9B45178/gibbons-Indonesia-Gunung-Leuser-National-Park.jpg",
      hasFur: true,
      habitat: tropics._id
    },
    {
      name: "Porcupine",
      scientific_name: "Erethizon dorsatum",
      description: "Porcupines are medium-sized mammals with short legs, stout bodies, and sharp quills.",
      region: "Native to the coniferous and mixed-forest habitats of Canada, the northeastern and western regions of the United States and northern Mexico. Besides forests, porcupines can also be found in grasslands, desert shrub communities and even tundra.",
      image: "https://cdn.britannica.com/16/93516-050-3FB4ABE4/Cape-porcupine.jpg",
      hasFur: true,
      habitat: tropics._id
    },
    {
      name: "Otter",
      scientific_name: "Lutrinae",
      description: "Otters are mammals with thick fur, streamlined bodies, and webbed feet that are well adapted for an aquatic lifestyle.",
      region: "Otters are found in many regions around the world, including North America, South America, and the Pacific Ocean.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQSPB3ACk-BNkeSp2uKAyyNcZHdsYC_z4vA&s",
      hasFur: true,
      habitat: tropics._id
    },
  ]

  await Animal.insertMany(animals)
  console.log('Created animals with habitats!')
}

const run = async () => {
  await main()
  db.close()
}

run()