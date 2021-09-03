import { Route, Switch } from "react-router-dom"
import { Redirect } from "react-router";
import { DevNotePage } from '../devnote/DevNotePage';
import { HomePage } from '../home/HomePage';
import { IngredientPage } from '../ingredient/IngredientPage';

function MainWrapper() {
  return <Switch>
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
}

export { MainWrapper }