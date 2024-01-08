import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import DataOutput from "./components/DataOutput";
import Map from "./components/Map";

function App() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    getIpResuls();
    console.log(data, "data");
  }, []);
  const key = process.env.REACT_APP_API_KEY;
  const getIpResuls = () => {
    fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress=${search}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  const handleSubmit = () => {
    getIpResuls();
  };
  return (
    <Container className="container-main" fluid>
      <h1 className="pt-5 text-white">ID Address Tracker</h1>
      <input
        className="my-5 input-primary"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn-primary" onClick={handleSubmit}>{`>`}</button>

      <DataOutput data={data} />
      <Map data={data} />
    </Container>
  );
}

export default App;
