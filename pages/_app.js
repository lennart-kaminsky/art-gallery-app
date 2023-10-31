import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";
import { useState } from "react";

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

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
  const { data, error, isLoading } = useSWR(url, fetcher);

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      // find the art piece in the state
      const info = artPiecesInfo.find((info) => info.slug === slug);

      // if the art piece is already in the state, toggle the isFavorite property
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }

      // if the movie is not in the state, add it with isFavorite set to true
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  console.log(data);

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>is loading...</h1>;
  }

  console.log("Art Pieces Info: ", artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <Layout />
      <Component {...pageProps} data={data} />
    </>
  );
}
