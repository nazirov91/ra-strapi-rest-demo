import { defaultTheme, fetchUtils, Admin, Resource, CustomRoutes, Loading } from "react-admin";

import { AppLayout } from "./Layout";
import { Route } from "react-router-dom";
import {authProvider} from "./pages/account/authProvider"; 
import raStrapiRest from "./ra-strapi-rest";

import { ContactList } from "./pages/contacts/contactList";
import { ContactEdit } from "./pages/contacts/contactEdit";
import { ContactShow } from "./pages/contacts/contactShow";
import { ContactCreate } from "./pages/contacts/contactCreate";
import { MassmailingList } from "./pages/massmailings/massmailingList";
import { MassmailingShow } from "./pages/massmailings/massmailingShow";
import { MassmailingCreate } from "./pages/massmailings/massmailingCreate";
import { MassmailingEdit } from "./pages/massmailings/massmailingEdit";
import { GroupList } from "./pages/groups/groupList";
import { GroupShow } from "./pages/groups/groupShow";
import { GroupEdit } from "./pages/groups/groupEdit";
import { GroupCreate } from "./pages/groups/groupCreate";
import { MessageList } from "./pages/messages/messageList";
import { MessageShow } from "./pages/messages/messageShow";
import { MessageEdit } from "./pages/messages/messageEdit"; 
import { MessageCreate } from "./pages/messages/messageCreate"; 
import { DeviceList } from "./pages/devices/deviceList";
import { DeviceCreate } from "./pages/devices/deviceCreate"; 
import { DeviceShow } from "./pages/devices/deviceShow";
import { MailingStatus } from "./pages/mailingStatuses";
import { AboutComponent } from "./pages/about/about";
import Register  from "./pages/account/registration";
import Login  from "./pages/account/login";

import indigo from '@mui/material/colors/indigo';
import pink from '@mui/material/colors/pink';
import red from '@mui/material/colors/red';



const strapiApiUrl = `${import.meta.env.VITE_STRAPI_API_URL}`; 

const myTheme = {
    ...defaultTheme,
    palette: {
        primary: indigo,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
};


const httpClient = (url: string, options: any = {}) => {
  options.headers = options.headers || new Headers({ Accept: "application/json" });
  options.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = raStrapiRest(strapiApiUrl, httpClient);






//страница регистрации

const App = () => (
  <Admin 
    theme={myTheme} 
    layout={AppLayout} 
    dataProvider={dataProvider} 
    authProvider={authProvider}
    //requireAuth
    loginPage={Login}
    >
    
    <Resource 
      name="devices"
      list={DeviceList}
      show={DeviceShow}
      create={DeviceCreate}
    />
    
    <Resource 
      name="massmailings"
      list={MassmailingList}
      show={MassmailingShow}
      edit={MassmailingEdit}
      create={MassmailingCreate}
    />
    <Resource 
      name="messages"
      list={MessageList}
      show={MessageShow}
      edit={MessageEdit}
      create={MessageCreate}
    />

    <Resource
      name="contacts"
      list={ContactList}
      show={ContactShow}
      edit={ContactEdit}
      create={ContactCreate}
      
    />
    <Resource 
      name="groups"
      list={GroupList}
      show={GroupShow}
      edit={GroupEdit}
      create={GroupCreate}
    />
    <Resource
      name="mailing-statuses"
      list={MailingStatus}
      recordRepresentation="name"
      options={{ label: "Mailing Status", isMenu: false }}
    />
    <CustomRoutes>
      <Route path="/about" element={<AboutComponent />} />
    </CustomRoutes>
    <CustomRoutes noLayout >
      <Route path="/registration" element={<Register />}  />
    </CustomRoutes>
    <Loading loadingPrimary="app.page.loading" loadingSecondary="app.message.loading" />
    
  </Admin>
);

export default App;
