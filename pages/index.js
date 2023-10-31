import useSWR from "swr";

import ArtPieces from "@/components/ArtPieces/";
import styled from "styled-components";
import Spotlight from "@/components/Spotlight";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>is loading...</h1>;
  }
  function getRandomPiece() {
    return data[Math.floor(Math.random() * data.length)];
  }
  const randomPiece = getRandomPiece();
  return (
    <div>
      <Spotlight image={randomPiece.imageSource} artist={randomPiece.artist} />
      <StyledTitle>Art Gallery App</StyledTitle>
      <ArtPieces pieces={data}></ArtPieces>
    </div>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  margin-block: 30px 50px;
`;
