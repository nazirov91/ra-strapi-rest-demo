import {
  Datagrid,
  List,
  TextField,
  ImageField,
  DateField,
  SearchInput,
  DateInput,
  NumberField,
  ReferenceManyCount
} from "react-admin";

const contactFilters = [
  <SearchInput source="q" alwaysOn />,
  <DateInput label="Created date" source="createdAt" defaultValue={new Date()} />,


];

export const ContactList = () => (
  <List hasCreate hasEdit filters={contactFilters} sort={{ field: 'createdAt', order: 'DESC' }}>
    <Datagrid rowClick="show">
      <ImageField
        source="thumbnail.url"
        label="Avatar"
        sx={{ "& img": { maxWidth: 30, maxHeight: 30, objectFit: "contain" } }}
      />
      <NumberField source="phone" />
      <TextField source="title" />
      <ReferenceManyCount
        label="Groups"
        reference="groups"
        target="contacts_id"
      />

      

      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
    </Datagrid>
  </List>
);

