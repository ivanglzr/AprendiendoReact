import { useState, useEffect } from "react";

const CAT_IMG_URL_PREFIX = "https://cataas.com";

export function useCatImage({ fact }) {
  const [imageURL, setImageURL] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&json=true`)
      .then((res) => res.json())
      .then((res) => {
        const url = res.url;
        setImageURL(url);
      });
  }, [fact]);

  return { imageURL: `${CAT_IMG_URL_PREFIX}${imageURL}` };
}
