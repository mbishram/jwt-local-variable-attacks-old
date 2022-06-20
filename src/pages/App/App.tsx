import type { Component } from "solid-js";
import { Router } from "../../components/ui/Router/Router";
import { MainLayout } from "../../components/layouts/MainLayout/MainLayout";

const App: Component = () => {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  );
};

export default App;
