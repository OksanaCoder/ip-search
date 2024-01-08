export default function getIpResuls() {
  fetch(
    "https://geo.ipify.org/api/v2/country?apiKey=YOUR_API_KEY&ipAddress=8.8.8.8"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}
