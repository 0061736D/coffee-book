import { Route, Switch } from "react-router-dom"
import { Redirect } from "react-router";
import { DevNotePage } from '../devnote/DevNotePage';
import { HomePage } from '../home/HomePage';
import { IngredientPage } from '../ingredient/IngredientPage';

function MainWrapper() {
  return <main className="page_main-wrapper">
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/ingredient">
        <IngredientPage />
      </Route>
      <Route path="/devnote">
        <DevNotePage />
      </Route>
      <Redirect path="*" to="/" />
    </Switch>
  </main>
}

export { MainWrapper }