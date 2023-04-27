import { fetchUtils, Admin, Resource, CustomRoutes } from "react-admin";
import { ArticleList } from "./pages/articles/articleList";
import raStrapiRest from "./ra-strapi-rest";
import { TagList } from "./pages/tags";
import { AppLayout } from "./Layout";
import { ArticleShow } from "./pages/articles/articleShow";
import { Route } from "react-router-dom";
import { AboutComponent } from "./pages/about/about";
import { ArticleEdit } from "./pages/articles/articleEdit";
import { ArticleCreate } from "./pages/articles/articleCreate";

const strapiApiUrl = "http://localhost:1337/api";
const httpClient = (url: string, options: any = {}) => {
  options.headers = options.headers || new Headers({ Accept: "application/json" });
  options.headers.set("Authorization", `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`);
  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = raStrapiRest(strapiApiUrl, httpClient);

const App = () => (
  <Admin layout={AppLayout} dataProvider={dataProvider}>
    <Resource
      name="tags"
      list={TagList}
      recordRepresentation="name"
      options={{ label: "Tags", isMenu: false }}
    />
    <Resource
      name="authors"
      recordRepresentation="name"
      options={{ label: "Authors", isMenu: false }}
    />

    <CustomRoutes>
      <Route path="/about" element={<AboutComponent />} />
    </CustomRoutes>
    <Resource
      name="articles"
      list={ArticleList}
      show={ArticleShow}
      edit={ArticleEdit}
      create={ArticleCreate}
    />
  </Admin>
);

export default App;
