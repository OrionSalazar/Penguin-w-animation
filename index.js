window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const sun = document.querySelector(".sun");

  const now = new Date();
  const hour = now.getHours();
  const month = now.getMonth(); // 0 = January, 11 = December

  // Time of Day Themes
  if (hour >= 6 && hour < 12) {
    // Morning
    body.style.background = "linear-gradient(45deg, #aee1f9, #fff7c2)";
    sun.style.backgroundColor = "gold";
    sun.style.boxShadow = "0 0 60px #ffd700";
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    body.style.background = "linear-gradient(45deg, #87ceeb, #fefbd8)";
    sun.style.backgroundColor = "yellow";
    sun.style.boxShadow = "0 0 40px #ffff66";
  } else if (hour >= 18 && hour < 21) {
    // Evening
    body.style.background = "linear-gradient(45deg, #fbb040, #ffecd2)";
    sun.style.backgroundColor = "orange";
    sun.style.boxShadow = "0 0 30px #ffa500";
  } else {
    // Night
    body.style.background = "linear-gradient(45deg, #0d1b2a, #1b263b)";
    sun.style.backgroundColor = "#f0f8ff";
    sun.style.boxShadow = "0 0 80px #ffffff";
  }

  // Seasonal Accents
  let season = "";
  if ([11, 0, 1].includes(month)) {
    season = "winter";
    body.style.background += ", url('snowflake.png')";
  } else if ([2, 3, 4].includes(month)) {
    season = "spring";
    body.style.background += ", url('flowers.png')";
  } else if ([5, 6, 7].includes(month)) {
    season = "summer";
    body.style.background += ", url('sunburst.png')";
  } else {
    season = "autumn";
    body.style.background += ", url('leaves.png')";
  }

  console.log(`Current theme: ${season}, hour: ${hour}`);
});
