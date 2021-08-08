import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Container from "../Container/Container";
import LoaderView from "../Loader/Loader";
import "./App.css";

const HomeView = lazy(() =>
  import("../../views/HomeView" /* webpackChunkName: "home-view" */)
);

const MovieDetailsView = lazy(() =>
  import("../../views/MovieDetailsView" /* webpackChunkName: "home-view" */)
);

const MoviesView = lazy(() =>
  import("../../views/MoviesView" /* webpackChunkName: "movies-view" */)
);

function App() {
  return (
    <Container>
      <NavigationBar />
      <Suspense fallback={<LoaderView />}>
        <Switch>
          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>
          <Route path="/">
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
