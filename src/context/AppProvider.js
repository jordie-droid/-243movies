import { PopularMovieProvider } from "./PopularMovie";
import { PopularSeriesProvider } from "./PopularSerie";
import { PopularActorsProvider } from "./PopularActors";
import { GenreSerialsProvider } from "./GenreSerials";
import { GenreMoviesProvider } from "./GenreFilm";

export default function AppProvider({ children }) {
  return (
    <PopularMovieProvider>
      <PopularSeriesProvider>
        <PopularActorsProvider>
          <GenreSerialsProvider>
            <GenreMoviesProvider>{children}</GenreMoviesProvider>
          </GenreSerialsProvider>
        </PopularActorsProvider>
      </PopularSeriesProvider>
    </PopularMovieProvider>
  );
}
