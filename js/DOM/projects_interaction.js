const d = document;

export default function projectInteraction(infoCard) {
  const $infoCards = d.querySelectorAll(infoCard);

  $infoCards.forEach(($infoCard) => {
    $infoCard.addEventListener("mouseover", (e) => console.log("mouseover"), true);
    $infoCard.addEventListener("mouseout", (e) => console.log("mouseout"));
  });

  // d.addEventListener("mouseover", (e) => {
  //   if (e.target.matches(infoCard) || e.target.matches(`${infoCard} *`)) {
  //     console.log("mouseover");
  //   }
  // });

  // d.addEventListener("mouseout", (e) => {
  //   if (e.target.matches(infoCard) || e.target.matches(`${infoCard} *`)) {
  //     console.log("mouseout");
  //   }
  // });
}
