import { PopularMovieProvider } from "./PopularMovie";
import { PopularSeriesProvider } from "./PopularSerie";
import { PopularActorsProvider } from "./PopularActors";
import { GenreSerieProvider } from "./GenreSerie";
import { GenreMovieProvider } from "./GenreFilm";

export default function AppProvider({ children }) {
  return (
    <PopularMovieProvider>
      <PopularSeriesProvider>
        <PopularActorsProvider>
          <GenreSerieProvider>
            <GenreMovieProvider>{children}</GenreMovieProvider>
          </GenreSerieProvider>
        </PopularActorsProvider>
      </PopularSeriesProvider>
    </PopularMovieProvider>
  );
}
