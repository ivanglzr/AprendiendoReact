import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <div className="fact">
        {imageURL && (
          <>
            <img src={`${imageURL}`} alt="Cat" />
            <span className="fc-first-word">{fact}</span>
          </>
        )}
      </div>

      <button onClick={handleClick}>New Fact</button>
    </main>
  );
}

export default App;
