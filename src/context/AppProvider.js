import { PopularMovieProvider } from "./PopularMovie";
import { PopularSeriesProvider } from "./PopularSerie";
import { PopularActorsProvider } from "./PopularActors";
import { SeriesGenresProvider } from "./SeriesGenres";
import { GenreMoviesProvider } from "./MoviesGenres";

export default function AppProvider({ children }) {
  return (
    <PopularMovieProvider>
      <PopularSeriesProvider>
        <PopularActorsProvider>
          <SeriesGenresProvider>
            <GenreMoviesProvider>{children}</GenreMoviesProvider>
          </SeriesGenresProvider>
        </PopularActorsProvider>
      </PopularSeriesProvider>
    </PopularMovieProvider>
  );
}
