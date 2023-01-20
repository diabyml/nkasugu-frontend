import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>Nkasugu</title>
          <meta
            name="description"
            content="Découvrez des produits neufs et occasions et en services dans nos différentes catégories véhicule, immobilier, mode, électronique et électroménager partout dans le monde  sur Nkasugu"
          />
          <meta
            name="keywords"
            content="Dakar, Sénégal, Togo, Lomé, Bénin, Cotonou, Côte d’ivoire, Abidjan, ventes gratuites en ligne, site pour passer des vendre des produits gratuites, vente de voitures, vente immobilières, vente mode, vente electroménager, electronique, vendre vite, booster, visibilité, top produits, vente flash, vente urgente, bénéfices, économiser, gagner de l’argent, photos, produits, services, neuf, occasion, petites annonces, annonces auto,"
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
