import useGenres from "../hooks/useGenres";
import { Genre } from "../hooks/useGenres";
export const GenreList = () => {
  const { genreList } = useGenres();
  return (
    <ul>
      {genreList.map((genre: Genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};
