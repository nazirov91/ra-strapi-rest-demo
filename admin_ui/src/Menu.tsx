// in src/MyMenu.js
import { Menu } from "react-admin";
import BookIcon from "@mui/icons-material/Book";

export const CustomMenu = (props: any) => (
  <Menu {...props}>
    <Menu.Item to="/articles" primaryText="Articles" leftIcon={<BookIcon />} />
    <Menu.Item to="/about" primaryText="About page" leftIcon={<BookIcon />} />
  </Menu>
);
