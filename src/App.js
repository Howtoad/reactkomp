import { useState } from "react";
import Outdoor from "./Outdoor";
import Surfing from "./Surfing";
import useFetch from "./useFetch";

function App() {
  const {
    data: surfingdata,
    pending,
    error,
  } = useFetch("http://localhost:8000/card");

  const { data: outdoordata } = useFetch("http://localhost:8000/outdoor");
  setTimeout(() => {
    console.log(outdoordata.smallimages);
  }, 1000);

  //const [mappedData, setMappedData] = useState(null);

  //const mappedData = data.map((card) => {
  //  return <Surfing title={card.title} />;
  //});
  //console.log(mappedData);
  return (
    <div className="App">
      {surfingdata && (
        <Surfing
          title={surfingdata.title}
          image={surfingdata.image}
          category={surfingdata.category}
          text={surfingdata.text}
        />
      )}
      {outdoordata && (
        <Outdoor
          title={outdoordata.title}
          imagedefault={outdoordata.imagedefault}
          text={outdoordata.text}
          smallimages={outdoordata.smallimages}
        />
      )}
    </div>
  );
}

export default App;
