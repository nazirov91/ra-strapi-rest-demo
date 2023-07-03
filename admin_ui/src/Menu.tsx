// in src/MyMenu.js
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";

export const CustomMenu = (props: any) => (
  <Menu {...props}>
    <Menu.Item to="/devices" primaryText="Devices" leftIcon={<BookIcon />} />

    <Menu.Item to="/massmailings" primaryText="Mass mailing" leftIcon={<BookIcon />} />
    <Menu.Item to="/messages" primaryText="Messages" leftIcon={<BookIcon />} />
    <Menu.Item to="/contacts" primaryText="Contacts" leftIcon={<BookIcon />} />
    <Menu.Item to="/groups" primaryText="Groups" leftIcon={<BookIcon />} />
    <Menu.Item to="/about" primaryText="About page" leftIcon={<BookIcon />} />
  </Menu>
);
