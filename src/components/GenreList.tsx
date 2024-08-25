// import useData from "../hooks/useData";
// import useGenres from "../hooks/useGenres";
import useGenres, { Genre } from "../hooks/useGenres";
export const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre: Genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};
