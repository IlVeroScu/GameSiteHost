document.addEventListener("DOMContentLoaded", function () {
  const gameSection = document.getElementById("games");
  const originalEntries = [
    { title: "Cyberpunk 2077", platform: "PC", playtime: "30 ore", vote: "8.5/10", completionDate: "2024-01-01", imageUrl: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7", reviewUrl: "https://howlongtobeat.com/game/2127/reviews/u-The_Real_Scu_/1" },
    { title: "Spider-Man: Miles Morales", platform: "PS5", playtime: "27 ore", vote: "7/10", completionDate: "2022-01-15", imageUrl: "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0?h=270&quality=medium&resize=1&w=480", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-79859/1" },
    { title: "The Legend of Zelda: Breath of the Wild", platform: "WiiU", playtime: "30 ore", vote: "10/10", completionDate: "2023-05-13", imageUrl: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg", reviewText: "Nessuna" },
    { title: "Assassin's Creed Valhalla", platform: "PS5", playtime: "76 ore", vote: "7.5/10", completionDate: "2023-07-21", imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1697654233", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-77729/1" }
  ];

  function createGameEntry(entry) {
    const gameEntry = document.createElement("div");
    gameEntry.classList.add("game-entry");

    const img = document.createElement("img");
    img.src = entry.imageUrl;
    img.alt = "Game Icon";

    const details = document.createElement("div");
    details.classList.add("game-details");

    const h2 = document.createElement("h2");
    h2.innerHTML = entry.title;

    const platformP = document.createElement("p");
    platformP.innerHTML = `Piattaforma: ${entry.platform}`;

    const playtimeP = document.createElement("p");
    playtimeP.innerHTML = `Tempo giocato: ${entry.playtime}`;

    const voteP = document.createElement("p");
    voteP.innerHTML = `Voto: ${entry.vote}`;

    const dateP = document.createElement("p");
    dateP.innerHTML = `Data di Completamento: ${formatDate(entry.completionDate)}`;

    const reviewP = document.createElement("p");
    if (entry.reviewUrl) {
      reviewP.innerHTML = `Recensione estesa: <a href="${entry.reviewUrl}" target="_blank">Leggi qui</a>`;
    } else {
      reviewP.innerHTML = `Recensione estesa: ${entry.reviewText}`;
    }

    details.appendChild(h2);
    details.appendChild(platformP);
    details.appendChild(playtimeP);
    details.appendChild(voteP);
    details.appendChild(dateP);
    details.appendChild(reviewP);

    gameEntry.appendChild(img);
    gameEntry.appendChild(details);

    return gameEntry;
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  let displayedEntries = originalEntries.slice();

  function renderGameSection() {
    gameSection.innerHTML = "";
    displayedEntries.forEach(entry => {
      gameSection.appendChild(createGameEntry(entry));
    });
  }

  function filterAndSort() {
    const platform = document.getElementById("platform").value;
    const review = document.getElementById("review").checked;

    displayedEntries = originalEntries.filter(entry => {
      return (platform === "Tutti" || entry.platform === platform) && (!review || entry.reviewUrl);
    });

    const sortOption = document.getElementById("sort").value;
    displayedEntries.sort((a, b) => {
      switch (sortOption) {
        case "alphabetical":
          return a.title.localeCompare(b.title);
        case "latestPlayedDefault":
          return new Date(b.completionDate) - new Date(a.completionDate);
        case "oldestPlayed":
          return new Date(a.completionDate) - new Date(b.completionDate);
        case "voteHighLow":
          return parseFloat(b.vote) - parseFloat(a.vote);
        case "voteLowHigh":
          return parseFloat(a.vote) - parseFloat(b.vote);
        case "playtimeHighLow":
          return parseFloat(b.playtime) - parseFloat(a.playtime);
        case "playtimeLowHigh":
          return parseFloat(a.playtime) - parseFloat(b.playtime);
        default:
          return new Date(b.completionDate) - new Date(a.completionDate);
      }
    });

    renderGameSection();
  }

  document.getElementById("sort").addEventListener("change", filterAndSort);
  document.getElementById("platform").addEventListener("change", filterAndSort);
  document.getElementById("review").addEventListener("change", filterAndSort);

  // Imposta il filtro predefinito come "Ultimo Giocato" e avvia la funzione di filtro e ordinamento
  document.getElementById("sort").value = "latestPlayedDefault";
  filterAndSort();
});
