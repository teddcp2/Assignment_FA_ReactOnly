import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";
import ParentComponent from "./components/ParentCreateComponent/parentComponent";
import CollectionItem from "./components/collectionItem/collectionItem";
import Buckets from "./components/buckets/bucket";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={ParentComponent} exact />
        <Route path="/tasks" component={CollectionItem} exact />
        <Route path="/buckets" component={Buckets} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}
