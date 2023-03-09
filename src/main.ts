import { router } from "lithen-router";
import "./styles/global.css";
import { Home, NotFound } from "./page";

router.defineRoutes({
  "/": Home(),
  notFound: NotFound(),
});

const app = document.getElementById("root");
app?.append(Home());
