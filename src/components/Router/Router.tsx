import {
  Routes,
  Route,
  Router as SolidRouter,
  RoutesProps,
} from "solid-app-router";
import { Home } from "../../pages/Home/Home";
import { CSRF } from "../../pages/CSRF/CSRF";
import { XSS } from "../../pages/XSS/XSS";

export function Router(props: Omit<RoutesProps, "children">) {
  return (
    <SolidRouter {...props}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/csrf" element={<CSRF />} />
        <Route path="/xss" element={<XSS />} />
      </Routes>
    </SolidRouter>
  );
}
