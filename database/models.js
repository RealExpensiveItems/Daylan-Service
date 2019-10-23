var relateds = require('./index.js')

// relateds.create({
//   id: 4,
//   name: "test1",
//   description: "test",
//   image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Men's.jpeg",
//   rating: 10,
//   price: 10
// }, (err, result) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('success')
//   }
// })

relateds.create({
  id: 1,
  name: "Arc'teryx",
  description: "Aerios FL Mid GTX Hiking Boots - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Aerios+FL+Mid+GTX+Hiking+Boots+-+Men's.jpeg",
  rating: 4,
  price: 100,
  reviewers: 120,
  category: "shoes"
}, {
  id: 2,
  name: "Arc'teryx",
  description: "Alpha SV Jacket - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Alpha+SV+Jacket+-+Women's.jpeg",
  rating: 4,
  price: 125,
  reviewers: 100,
  category: "jacket"
}, {
  id: 3,
  name: "Arc'teryx",
  description: "Arc'Word T-Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Arc'Word+T-Shirt+-+Men's.jpeg",
  rating: 5,
  price: 35,
  reviewers: 12,
  category: "shirt"
}, {
  id: 4,
  name: "Arc'teryx",
  description: "Atom AR Insulated Hoodie - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Atom+AR+Insulated+Hoodie+-+Women's.jpeg",
  rating: 4,
  price: 70,
  reviewers: 10,
  category: "shirt"
}, {
  id: 5,
  name: "Arc'teryx",
  description: "Bernal Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Bernal+Shirt+-+Men's.jpeg",
  rating: 3.5,
  price: 65,
  reviewers: 12,
  category: "shirt"
}, {
  id: 6,
  name: "Arc'teryx",
  description: "Beta AR Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Beta+AR+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 150,
  reviewers: 50,
  category: "jacket"
}, {
  id: 7,
  name: "Arc'teryx",
  description: "Beta AR Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Beta+AR+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 200,
  reviewers: 65,
  category: "jacket"
}, {
  id: 8,
  name: "Arc'teryx",
  description: "Beta LT Jacket - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Beta+LT+Jacket+-+Women's.jpeg",
  rating: 5,
  price: 200,
  reviewers: 10,
  category: "jacket"
}, {
  id: 9,
  name: "Arc'teryx",
  description: "Captive Polo Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Captive+Polo+Shirt+-+Men's.jpeg",
  rating: 4,
  price: 50,
  reviewers: 90,
  category: "shirt"
}, {
  id: 10,
  name: "Arc'teryx",
  description: "Cerium LT Down Hoodie - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Cerium+LT+Down+Hoodie.jpeg",
  rating: 5,
  price: 300,
  reviewers: 40,
  category: "shirt"
}, {
  id: 11,
  name: "Arc'teryx",
  description: "Cormac Zip-Neck Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Cerium+LT+Down+Hoodie.jpeg",
  rating: 4,
  price: 100,
  reviewers: 32,
  category: "shirt"
}, {
  id: 12,
  name: "Arc'teryx",
  description: "Downward T-Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Downward+T-Shirt+-+Men's.jpeg",
  rating: 4,
  price: 40,
  reviewers: 30,
  category: "shirt"
}, {
  id: 13,
  name: "Arc'teryx",
  description: "Elaho Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Elaho+Shirt+-+Men's.jpeg",
  rating: 3,
  price: 30,
  reviewers: 43,
  category: "shirt"
}, {
  id: 14,
  name: "Arc'teryx",
  description: "Skyline Long-Sleeve Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Skyline+Long-Sleeve+Shirt+-+Men's.jpeg",
  rating: 3,
  price: 40,
  reviewers: 54,
  category: "shirt"
}, {
  id: 15,
  name: "Arc'teryx",
  description: "Skyline Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc'teryx+Skyline+Shirt+-+Men's.jpeg",
  rating: 4,
  price: 40,
  reviewers: 19,
  category: "shirt"
}, {
  id: 16,
  name: "Arc'teryx",
  description: "Hiking Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Arc1.jpeg",
  rating: 5,
  price: 50,
  reviewers: 5,
  category: "shirt"
}, {
  id: 17,
  name: "Columbia",
  description: "Alpine Action Insulated Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Columbia+Alpine+Action+INsulated+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 250,
  reviewers: 10,
  category: "jacket"
}, {
  id: 18,
  name: "Cotopaxi",
  description: "Allpa 35L Travel Pack",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Cotopaxi+Allpa+35L+Travel+Pack.jpeg",
  rating: 4,
  price: 150,
  reviewers: 90,
  category: "bag"
}, {
  id: 19,
  name: "Darn Tough",
  description: "COOLMAX Hiker Micro Crew Cushion Socks - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+COOLMAX+Hiker+Micro+Crew+Cushion+Socks+-+Men's.jpeg",
  rating: 4,
  price: 25,
  reviewers: 87,
  category: "shoes"
}, {
  id: 20,
  name: "Darn Tough",
  description: "COOLMAX Micro Crew Cushion Socks - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+COOLMAX+Micro+Crew+Cushion+Socks+-+Women's.jpeg",
  rating: 4,
  price: 25,
  reviewers: 30,
  category: "shoes"
}, {
  id: 21,
  name: "Darn Tough",
  description: "Hiker Boot Sock Cushion Socks - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+Hiker+Boot+Sock+Cushion+Socks+-+Men's.jpeg",
  rating: 5,
  price: 30,
  reviewers: 23,
  category: "shoes"
}, {
  id: 22,
  name: "Darn Tough",
  description: "Hiker Quarter Cushion Socks - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+Hiker+Quarter+Cushion+Socks+-+Men's.jpeg",
  rating: 4,
  price: 20,
  reviewers: 25,
  category: "shoes"
}, {
  id: 23,
  name: "Darn Tough",
  description: "Hiker Quarter Cushion Socks - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+Hiker+Quarter+Cushion+Socks+-+Men's.jpeg",
  rating: 4,
  price: 20,
  reviewers: 65,
  category: "shoes"
}, {
  id: 24,
  name: "Darn Tough",
  description: "Light Hiker Micro Crew Socks - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+Light+Hiker+Micro+Crew+Socks+-+Women's.jpeg",
  rating: 3.5,
  price: 25,
  reviewers: 78,
  category: "shoes"
}, {
  id: 24,
  name: "Darn Tough",
  description: "Micro Crew Cushion Hiking Socks - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+Micro+Crew+Cushion+Hiking+Socks+-+Men's.jpeg",
  rating: 3.5,
  price: 25,
  reviewers: 45,
  category: "shoes"
}, {
  id: 25,
  name: "Darn Tough",
  description: "Treeline Micro Crew Socks - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Darn+Tough+Treeline+Micro+Crew+Socks+-+Women's.jpeg",
  rating: 5,
  price: 25,
  reviewers: 65,
  category: "shoes"
}, {
  id: 26,
  name: "ExOfficio",
  description: "Give-N-Go Boxers - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/ExOfficio+Give-N-Go+Boxers+-+Men's.jpeg",
  rating: 5,
  price: 30,
  reviewers: 120,
  category: "underwear"
}, {
  id: 27,
  name: "ExOfficio",
  description: "Give-N-Go Boxers - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/ExOfficio+Give-N-Go+Sport+Mesh+Boxer+Briefs+-+Men's+6%22+Inseam.jpeg",
  rating: 5,
  price: 30,
  reviewers: 145,
  category: "underwear"
}, {
  id: 28,
  name: "Injinji",
  description: "Liner Crew Socks",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Injinji+Liner+Crew+Socks.jpeg",
  rating: 4,
  price: 30,
  reviewers: 12,
  category: "shoes"
}, {
  id: 29,
  name: "KEEN",
  description: "Targhee III Mid WP Hiking Boots - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/KEEN+Targhee+III+Mid+WP+Hiking+Boots+-+Women's.jpeg",
  rating: 5,
  price: 120,
  reviewers: 7,
  category: "shoes"
}, {
  id: 30,
  name: "KUHL",
  description: "Radikl Pants - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/KUHL+Radikl+Pants+-+Men's.jpeg",
  rating: 5,
  price: 135,
  reviewers: 10,
  category: "pants"

}, {
  id: 30,
  name: "KUHL",
  description: "Rydr Pants - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/KUHL+Rydr+Pants+-+Men's.jpeg",
  rating: 4,
  price: 135,
  reviewers: 15,
  category: "pants"
}, {
  id: 31,
  name: "KUHL",
  description: "Shiftr Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/KUHL+Shiftr+Shirt+-+Men's.jpeg",
  rating: 4,
  price: 35,
  reviewers: 20,
  category: "shirt"
}, {
  id: 32,
  name: "KUHL",
  description: "Shiftr Shirt - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/KUHL+Shiftr+Shirt+-+Men's.jpeg",
  rating: 4,
  price: 35,
  reviewers: 10,
  category: "shirt"
}, {
  id: 33,
  name: "KUHL",
  description: "Burr Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Kuhl+Burr+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 130,
  reviewers: 30,
  category: "jacket"
}, {
  id: 34,
  name: "KUHL",
  description: "Interceptr Fleece Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Kuhl+Interceptr+Fleece+Jacket+-+Men's.jpeg",
  rating: 5,
  price: 100,
  reviewers: 43,
  category: "jacket"
}, {
  id: 35,
  name: "KUHL",
  description: "Klash Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Kuhl+Klash+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 100,
  reviewers: 65,
  category: "jacket"
}, {
  id: 36,
  name: "KUHL",
  description: "Kollusion Fleece Lined Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Kuhl+Kollusion+Fleece+Lined+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 120,
  reviewers: 34,
  category: "jacket"
}, {
  id: 37,
  name: "Lowa",
  description: "Renegade GTX Mid Hiking Boots - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Lowa+Renegade+GTX+Mid+Hiking+Boots+-+Women's.jpeg",
  rating: 3,
  price: 110,
  reviewers: 32,
  category: "shoes"
}, {
  id: 38,
  name: "Merrell",
  description: "Moab 2 Mid WP Hiking Boots - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Merrell+Moab+2+Mid+WP+Hiking+Boots+-+Women's.jpeg",
  rating: 4,
  price: 150,
  reviewers: 16,
  category: "shoes"
}, {
  id: 39,
  name: "Merrell",
  description: "Moab 2 Ventilator Low Hiking Shoes - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Merrell+Moab+2+Ventilator+Low+Hiking+Shoes+-+Women's.jpeg",
  rating: 3.5,
  price: 150,
  reviewers: 65,
  category: "shoes"
}, {
  id: 40,
  name: "Merrell",
  description: "Moab 2 WP Low Hiking Shoes - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Merrell+Moab+2+WP+Low+Hiking+Shoes+-+Women's.jpeg",
  rating: 4,
  price: 150,
  reviewers: 12,
  category: "shoes"
}, {
  id: 41,
  name: "Patagonia",
  description: "Micro Puff Insulated Hoodie - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Micro+Puff+Insulated+Hoodie+-+Women's.jpeg",
  rating: 4,
  price: 80,
  reviewers: 20,
  category: "shirt"
}, {
  id: 42,
  name: "Oboz",
  description: "Bridger Mid BDry Hiking Boots - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Oboz+Bridger+Mid+BDry+Hiking+Boots+-+Women's.jpeg",
  rating: 4,
  price: 80,
  reviewers: 0,
  category: "shoes"
}, {
  id: 43,
  name: "Osprey",
  description: "Fairview 55 Travel Pack - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Osprey+Fairview+55+Travel+Pack+-+Women's.jpeg",
  rating: 5,
  price: 100,
  reviewers: 1,
  category: "bag"
}, {
  id: 44,
  name: "Osprey",
  description: "Farpoint 40 Travel Pack - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Osprey+Farpoint+40+Travel+Pack+-+Men's.jpeg",
  rating: 5,
  price: 100,
  reviewers: 10,
  category: "bag"
}, {
  id: 45,
  name: "Osprey",
  description: "Farpoint 55 Travel Pack - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Osprey+Farpoint+55+Travel+Pack+-+Men's.jpeg",
  rating: 4.5,
  price: 100,
  reviewers: 12,
  category: "bag"
}, {
  id: 46,
  name: "Osprey",
  description: "Ultralight Dry Sack",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Osprey+Ultralight+Dry+Sack.jpeg",
  rating: 4.5,
  price: 70,
  reviewers: 34,
  category: "bag"
}, {
  id: 47,
  name: "Patagonia",
  description: "Better Sweater Fleece Vest - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Better+Sweater+Fleece+Vest+-+Women's.jpeg",
  rating: 3.5,
  price: 80,
  reviewers: 20,
  category: "shirt"
}, {
  id: 48,
  name: "Patagonia",
  description: "Better Sweater Quarter-Zip Fleece - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Better+Sweater+Quarter-Zip+Fleece+-+Women's.jpeg",
  rating: 3.5,
  price: 79,
  reviewers: 10,
  category: "shirt"
}, {
  id: 49,
  name: "Patagonia",
  description: "Bivy Hooded Down Vest - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Bivy+Hooded+Down+Vest+-+Women's.jpeg",
  rating: 4.5,
  price: 85,
  reviewers: 30,
  category: "shirt"
}, {
  id: 50,
  name: "Patagonia",
  description: "Classic Synchilla Fleece Vest - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Classic+Synchilla+Fleece+Vest+-+Women's.jpeg",
  rating: 0,
  price: 95,
  reviewers: 0,
  category: "shirt"
}, {
  id: 51,
  name: "Patagonia",
  description: "Cotton Quilt Snap-T Pullover - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Cotton+Quilt+Snap-T+Pullover+-+Women's.jpeg",
  rating: 5,
  price: 95,
  reviewers: 1,
  category: "jacket"
}, {
  id: 52,
  name: "Patagonia",
  description: "Down Sweater Hoodie - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Down+Sweater+Hoodie+-+Women's.jpeg",
  rating: 5,
  price: 105,
  reviewers: 5,
  category: "jacket"
}, {
  id: 52,
  name: "Patagonia",
  description: "Down Sweater Hoodie - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Down+Sweater+Hoodie+-+Women's.jpeg",
  rating: 5,
  price: 105,
  reviewers: 5,
  category: "jacket"
}, {
  id: 53,
  name: "Patagonia",
  description: "Essential Boxer Briefs - Men's 6 Inseam",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Essential+Boxer+Briefs+-+Men's+6%22+Inseam.jpeg",
  rating: 4.5,
  price: 30,
  reviewers: 20,
  category: "underwear"
}, {
  id: 54,
  name: "Patagonia",
  description: "Los Gatos Quarter-Zip Fleece Pullover - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Los+Gatos+Quarter-Zip+Fleece+Pullover+-+Women's.jpeg",
  rating: 2.5,
  price: 50,
  reviewers: 10,
  category: "jacket"
}, {
  id: 55,
  name: "Patagonia",
  description: "Lost Gatos Fleece Vest - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Lost+Gatos+Fleece+Vest+-+Women's.jpeg",
  rating: 3.5,
  price: 60,
  reviewers: 10,
  category: "shirt"
}, {
  id: 56,
  name: "Patagonia",
  description: "Nano Puff Insulated Hoodie - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Nano+Puff+Insulated+Hoodie+-+Women's.jpeg",
  rating: 4.5,
  price: 100,
  reviewers: 100,
  category: "shirt"
}, {
  id: 57,
  name: "Patagonia",
  description: "Performance Better Sweater Hoodie - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Performance+Better+Sweater+Hoodie+-+Men's.jpeg",
  rating: 4.5,
  price: 150,
  reviewers: 140,
  category: "shirt"
}, {
  id: 58,
  name: "Patagonia",
  description: "Pile-Lined Trucker Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Pile-Lined+Trucker+Jacket+-+Men's.jpeg",
  rating: 3.5,
  price: 120,
  reviewers: 10,
  category: "jacket"
}, {
  id: 59,
  name: "Patagonia",
  description: "R2 Fleece Vest - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+R2+Fleece+Vest+-+Women's.jpeg",
  rating: 4,
  price: 110,
  reviewers: 1,
  category: "shirt"
}, {
  id: 60,
  name: "Patagonia",
  description: "Radalie Insulated Jacket - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Patagonia+Radalie+Insulated+Jacket+-+Women's.jpeg",
  rating: 4.5,
  price: 100,
  reviewers: 30,
  category: "jacket"
}, {
  id: 61,
  name: "REI Co-op",
  description: "650 Down Jacket 2.0 - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+650+Down+Jacket+2.0+-+Women's.jpeg",
  rating: 3,
  price: 100,
  reviewers: 5,
  category: "jacket"
}, {
  id: 62,
  name: "REI Co-op",
  description: "Boxers - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Boxers+-+Men's.jpeg",
  rating: 0,
  price: 25,
  reviewers: 0,
  category: "underwear"
}, {
  id: 63,
  name: "REI Co-op",
  description: "Craglands Fleece Hoodie - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Craglands+Fleece+Hoodie+-+Women's.jpeg",
  rating: 4,
  price: 50,
  reviewers: 1,
  category: "shirt"
}, {
  id: 64,
  name: "REI Co-op",
  description: "Ditty Sack - Set of 3",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Ditty+Sack+-+Set+of+3.jpeg",
  rating: 3,
  price: 50,
  reviewers: 2,
  category: "bag"
}, {
  id: 65,
  name: "REI Co-op",
  description: "LightWeight Compression Stuff Sack",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+LightWeight+Compression+Stuff+Sack.jpeg",
  rating: 3,
  price: 40,
  reviewers: 3,
  category: "bag"
}, {
  id: 66,
  name: "REI Co-op",
  description: "Lightweight Base Layer Bottoms - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Lightweight+Base+Layer+Bottoms+-+Men's.jpeg",
  rating: 4.5,
  price: 70,
  reviewers: 10,
  category: "pants"
}, {
  id: 67,
  name: "REI Co-op",
  description: "Lightweight Roll Top Dry Sack",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Lightweight+Roll+Top+Dry+Sack.jpeg",
  rating: 3.5,
  price: 60,
  reviewers: 5,
  category: "bag"
}, {
  id: 68,
  name: "REI Co-op",
  description: "Ursack Major Bear Bag",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Ursack+Major+Bear+Bag.jpeg",
  rating: 4,
  price: 50,
  reviewers: 7,
  category: "bag"
}, {
  id: 69,
  name: "REI Co-op",
  description: "Merino Midweight Base Layer Bottoms - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Merino+Midweight+Base+Layer+Bottoms+-+Men's.jpeg",
  rating: 4,
  price: 50,
  reviewers: 4,
  category: "pants"
}, {
  id: 70,
  name: "REI Co-op",
  description: "Midweight Base Layer Bottoms - Men's Tall Sizes",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Midweight+Base+Layer+Bottoms+-+Men's+Tall+Sizes.jpeg",
  rating: 3.5,
  price: 50,
  reviewers: 4,
  category: "pants"
}, {
  id: 71,
  name: "REI Co-op",
  description: "Nalgene Narrow-Mouth Water Bottle - 32 fl. oz.",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Nalgene+Narrow-Mouth+Water+Bottle+-+32+fl.+oz..jpeg",
  rating: 3.5,
  price: 20,
  reviewers: 10,
  category: "bottle"
}, {
  id: 72,
  name: "REI Co-op",
  description: "Nalgene Wide-Mouth Water Bottle - 48 fl.oz.",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Nalgene+Wide-Mouth+Water+Bottle+-+48+fl.oz..jpeg",
  rating: 2.5,
  price: 20,
  reviewers: 2,
  category: "bottle"
}, {
  id: 73,
  name: "REI Co-op",
  description: "Ruckpack 65 Travel Pack - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Ruckpack+65+Travel+Pack+-+Women's.jpeg",
  rating: 4,
  price: 100,
  reviewers: 20,
  category: "bag"
}, {
  id: 74,
  name: "REI Co-op",
  description: "Silk Long Underwear Bottoms - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Silk+Long+Underwear+Bottoms+-+Men's.jpeg",
  rating: 3,
  price: 50,
  reviewers: 20,
  category: "pants"
}, {
  id: 75,
  name: "REI Co-op",
  description: "Stormhenge 850 Down Jacket - Men's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Stormhenge+850+Down+Jacket+-+Men's.jpeg",
  rating: 4,
  price: 150,
  reviewers: 25,
  category: "jacket"
}, {
  id: 76,
  name: "REI Co-op",
  description: "Wallace Lake Flannel Shirt - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/REI+Co-op+Wallace+Lake+Flannel+Shirt+-+Women's.jpeg",
  rating: 3,
  price: 50,
  reviewers: 25,
  category: "shirt"
}, {
  id: 77,
  name: "Salomon",
  description: "OUTline Low GTX Hiking Shoes - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Salomon+OUTline+Low+GTX+Hiking+Shoes+-+Women's.jpeg",
  rating: 3.5,
  price: 150,
  reviewers: 5,
  category: "shoes"
}, {
  id: 78,
  name: "Salomon",
  description: "X Ultra 3 Low Aero Hiking Shoes - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Salomon+X+Ultra+3+Low+Aero+Hiking+Shoes+-+Women's.jpeg",
  rating: 4.5,
  price: 150,
  reviewers: 9,
  category: "shoes"
}, {
  id: 79,
  name: "Salomon",
  description: "X Ultra 3 Low GTX Hiking Shoes - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Salomon+X+Ultra+3+Low+GTX+Hiking+Shoes+-+Women's.jpeg",
  rating: 4.5,
  price: 150,
  reviewers: 5,
  category: "shoes"
}, {
  id: 80,
  name: "Salomon",
  description: "X Ultra 3 Mid GTX Hiking Boots - Women's",
  image: "https://peoplealsoviewed.s3-us-west-1.amazonaws.com/REI/Database1/Salomon+X+Ultra+3+Mid+GTX+Hiking+Boots+-+Women's.jpeg",
  rating: 5,
  price: 150,
  reviewers: 7,
  category: "shoes"
})
