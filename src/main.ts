import { router } from "lithen-router";
import { Home, NotFound } from "./page";
import "./styles/global.css";

router.defineRoutes({
  "/": Home(),
  "/not": NotFound(),
  notFound: NotFound(),
});

const element = router.matchRoute();
const app = document.getElementById("root");
app?.replaceChildren(element);

/**
 Quando habilitado ao usar o navigate (antigo goTo), aciona o onNavigate e navega nas paginas dando reload.
 Caso contrário vai navegar entre as paginas da rota sem dar reload.
 */

/*
router.onNavigate(() => {
  const element = router.matchRoute();

  app?.replaceChildren(element);
});
*/
