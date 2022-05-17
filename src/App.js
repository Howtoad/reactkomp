import { useState } from "react";
import Surfing from "./Surfing";
import useFetch from "./useFetch";

function App() {
  const { data, pending, error } = useFetch("http://localhost:8000/card");
  //const [mappedData, setMappedData] = useState(null);

  //const mappedData = data.map((card) => {
  //  return <Surfing title={card.title} />;
  //});
  //console.log(mappedData);
  return (
    <div className="App">
      {data && (
        <Surfing
          title={data[0].title}
          image={data[0].image}
          category={data[0].category}
          text={data[0].text}
        />
      )}
    </div>
  );
}

export default App;
