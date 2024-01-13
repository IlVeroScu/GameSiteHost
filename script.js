	//  { title: "Titolo", platform: "Console", playtime: "12 ore", vote: "7/10", completionDate: "2023-08-01", imageUrl: "URL", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-68258/1" },
document.addEventListener("DOMContentLoaded", function () {
  const gameSection = document.getElementById("games");
  const originalEntries = [
    { title: "Cyberpunk 2077", platform: "PC", playtime: "30 ore", vote: "8.5/10", completionDate: "2024-01-01", imageUrl: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7", reviewUrl: "https://howlongtobeat.com/game/2127/reviews/u-The_Real_Scu_/1" },
    { title: "Spider-Man: Miles Morales", platform: "PS5", playtime: "27 ore", vote: "7/10", completionDate: "2021-08-25", imageUrl: "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0?h=270&quality=medium&resize=1&w=480", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-79859/1" },
    { title: "The Legend of Zelda: Breath of the Wild", platform: "WiiU", playtime: "30 ore", vote: "10/10", completionDate: "2023-05-13", imageUrl: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg", reviewText: "Nessuna" },
    { title: "Assassin's Creed Valhalla", platform: "PS5", playtime: "76 ore", vote: "7.5/10", completionDate: "2023-07-21", imageUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1697654233", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-77729/1" },
	{ title: "We Where Here Forever", platform: "PC", playtime: "11 ore", vote: "7.5/10", completionDate: "2023-10-24", imageUrl: "https://cdn1.epicgames.com/offer/db16361187bb41c4b96ff020c34bdd0c/EGS_WeWereHereForever_TotalMayhemGames_S1_2560x1440-6a84419931fa10cc3ab5972f960685b2", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-91902/1" },
	{ title: "Deathloop", platform: "PS5", playtime: "12 ore", vote: "7/10", completionDate: "2023-08-01", imageUrl: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S1_2560x1440-bf6d342edbd2411ccf24e326852fca93", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-68258/1" },
	{ title: "The Last of US Part I", platform: "PS5", playtime: "24 ore", vote: "10/10", completionDate: "2023-02-20", imageUrl: "https://game-experience.it/wp-content/uploads/2022/07/the-last-of-us-parte-i.jpg", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-109104/1" },
	{ title: "The Lasy of Us Part II", platform: "PS5", playtime: "18 ore", vote: "9.5/10", completionDate: "2023-03-27", imageUrl: "https://i0.wp.com/www.teilzeithelden.de/wp-content/uploads/2020/10/The-Last-of-Us-Part-II-Rant-Analysis-Header-%C2%A9-Naughty-Dog.png?fit=1068%2C580&ssl=1", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-41753/1" },
	{ title: "It Takes Two", platform: "PC", playtime: "14 ore", vote: "9.5/10", completionDate: "2023-10-15", imageUrl: "https://gaming-cdn.com/images/products/7154/616x353/it-takes-two-pc-game-steam-cover.jpg?v=1672571500", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-80199/1" },
	{ title: "Marvel's Spiderman", platform: "PS5", playtime: "12 ore", vote: "7.5/10", completionDate: "2021-07-18", imageUrl: "https://i.ytimg.com/vi/LTqczRnNqDc/maxresdefault.jpg", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-70093/1" },
	{ title: "Astro's Playroom", platform: "PS5", playtime: "5 ore", vote: "7.5/10", completionDate: "2023-08-01", imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0215/B0R5d3NrlnFN1FCiALoNVXZl.jpg", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-68258/1" },
	{ title: "Mafia: Definitive Edition", platform: "PS5", playtime: "11 ore", vote: "7/10", completionDate: "2023-08-01", imageUrl: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fmafia-definitive-edition%2Fhome%2FEGS_MafiaDefinitiveEditionPreOrder_Hangar13_G1A_00-1920x1080-e7457132d8ebeb06c2d663944087c683e4834918.jpg", reviewUrl: "https://howlongtobeat.com/user/The_Real_Scu_/reviews/u-78135/1" },
	{ title: "Work In Progress", platform: "WIP", playtime: "0 ore", vote: "0/10", completionDate: "2000-01-01", imageUrl: "https://www.creativefabrica.com/wp-content/uploads/2021/04/28/Work-In-Progress-Stamp-Vector-Illustrati-Graphics-11432530-1.jpg", reviewText: "Nessuna" }
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
