import { useState } from "react";
import Coloredcards from "./Coloredcards";
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

  const { data: coloreddata } = useFetch("http://localhost:8000/coloredcards");

  //const [mappedData, setMappedData] = useState(null);

  //const mappedData = data.map((card) => {
  //  return <Surfing title={card.title} />;
  //});
  //console.log(mappedData);
  return (
    <div className="App">
      <div className="toprow">
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
      <div className="secondrow">
        {coloreddata &&
          coloreddata.map((cardsmapped) => (
            <Coloredcards
              backgroundcolor={cardsmapped.backgroundcolor}
              title={cardsmapped.title}
              text={cardsmapped.text}
              icon={cardsmapped.icon}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
