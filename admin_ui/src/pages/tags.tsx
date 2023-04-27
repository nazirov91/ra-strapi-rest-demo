// src/components/TagList.js
import { Datagrid, List, TextField } from "react-admin";

export const TagList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
