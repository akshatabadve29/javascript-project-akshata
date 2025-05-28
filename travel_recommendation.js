const citiesData = {
  countries: [
    {
      id: 1,
      name: "Australia",
      cities: [
        {
          name: "Sydney, Australia",
          imageUrl: "./sydney1.jpg",
          description:
            "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge.",
        },
        {
          name: "Melbourne, Australia",
          imageUrl: "enter_your_image_for_melbourne.jpg",
          description:
            "A cultural hub famous for its art, food, and diverse neighborhoods.",
        },
      ],
    },
    {
      id: 2,
      name: "Japan",
      cities: [
        {
          name: "Tokyo, Japan",
          imageUrl: "./sydney1.jpg",
          description:
            "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture.",
        },
        {
          name: "Kyoto, Japan",
          imageUrl: "sydney1.jpg",
          description:
            "Known for its historic temples, gardens, and traditional tea houses.",
        },
      ],
    },
    {
      id: 3,
      name: "Brazil",
      cities: [
        {
          name: "Rio de Janeiro, Brazil",
          imageUrl: "enter_your_image_for_rio.jpg",
          description:
            "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks.",
        },
        {
          name: "São Paulo, Brazil",
          imageUrl: "enter_your_image_for_sao-paulo.jpg",
          description:
            "The financial hub with diverse culture, arts, and a vibrant nightlife.",
        },
      ],
    },
  ],
  temples: [
    {
      id: 1,
      name: "Angkor Wat, Cambodia",
      imageUrl: "enter_your_image_for_angkor-wat.jpg",
      description:
        "A UNESCO World Heritage site and the largest religious monument in the world.",
    },
    {
      id: 2,
      name: "Taj Mahal, India",
      imageUrl: "enter_your_image_for_taj-mahal.jpg",
      description:
        "An iconic symbol of love and a masterpiece of Mughal architecture.",
    },
  ],
  beaches: [
    {
      id: 1,
      name: "Bora Bora, French Polynesia",
      imageUrl: "enter_your_image_for_bora-bora.jpg",
      description:
        "An island known for its stunning turquoise waters and luxurious overwater bungalows.",
    },
    {
      id: 2,
      name: "Copacabana Beach, Brazil",
      imageUrl: "enter_your_image_for_copacabana.jpg",
      description:
        "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views.",
    },
  ],
};

const btnSearch = document.getElementById("btnSearch");

function searchData() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results
  let foundResults = false;

  // Search through countries and their cities
  citiesData.countries.forEach((country) => {
    // debugger;
    if (country.name.toLowerCase().includes(searchTerm)) {
      displayResult({ name: country.name, type: "Country" });
      foundResults = true;
    }
    country.cities.forEach((city) => {
      if (city.name.toLowerCase().includes(searchTerm)) {
        displayResult({ ...city, type: "City" });
        foundResults = true;
      }
    });
  });

  // Search through temples
  // citiesData.temples.forEach((temple) => {
  //   if (temple.name.toLowerCase().includes(searchTerm)) {
  //     displayResult({ ...temple, type: "Temple" });
  //     foundResults = true;
  //   }
  // });

  // Search through beaches
  // citiesData.beaches.forEach((beach) => {
  //   if (beach.name.toLowerCase().includes(searchTerm)) {
  //     displayResult({ ...beach, type: "Beach" });
  //     foundResults = true;
  //   }
  // });

  if (!foundResults) {
    resultsContainer.innerHTML = '<p class="no-results">No results found.</p>';
  }
}

function displayResult(item) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.style.display = "block";
  const resultDiv = document.createElement("div");
  // resultDiv.classList.add("result-item");

  let content = '';
  if (item.imageUrl) {
    content += `<img src="${item.imageUrl}" alt="${item.name}" width="100%">`;
  }
  content += `<h3>${item.name}</h3>`;
  if (item.description) {
    content += `<p>${item.description}</p>`;
  }
  if (item.type) {
    content += `<p>Type: ${item.type}</p>`;
  }

  resultDiv.innerHTML = content;
  resultsContainer.appendChild(resultDiv);
}

btnSearch.addEventListener("click", searchData);
