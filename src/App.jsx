import "./App.css";
import { useEffect } from "react";

function App() {
  async function FetchMatchDetail() {
    const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881/comm`;
    const options = {
        method: "GET",
        headers: {
'x-rapidapi-key': 'cb68084de7msh3ab36f3d72cc219p1b0309jsnec174807a410',
		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

useEffect(() => {
    FetchMatchDetail();
}, []);
  return <>hello world</>;
}

export default App;
