import {
  Datagrid,
  List,
  TextField,
  DateField,
  SearchInput,
  DateInput,
  ReferenceManyCount
} from "react-admin";

const groupFilters = [
  <SearchInput source="q" alwaysOn />,
  <DateInput label="Published date" source="published_date" defaultValue={new Date()} />,
];

export const GroupList = () => (
  <List hasCreate hasEdit filters={groupFilters} sort={{ field: 'createdAt', order: 'DESC' }}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <ReferenceManyCount
                label="Contacts"
                reference="contacts"
                target="groups_id"
            />
      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
    </Datagrid>
  </List>
);
