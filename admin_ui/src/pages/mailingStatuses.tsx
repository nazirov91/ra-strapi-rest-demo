import { Datagrid, List, TextField } from "react-admin";

export const MailingStatus = () => (
  <List>
    <Datagrid >
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="number" />
    </Datagrid>
  </List>
);
