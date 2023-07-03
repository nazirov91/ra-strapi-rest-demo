import {
  Datagrid,
  List,
  TextField,
  DateField,
  SearchInput,
  DateInput,
  ReferenceField
} from "react-admin";

const massmailingFilters = [
  <SearchInput source="q" alwaysOn />,
  <DateInput label="Created date" source="createdAt" defaultValue={new Date()} />,


];

export const MassmailingList = () => (
  <List hasCreate hasEdit filters={massmailingFilters} sort={{ field: 'createdAt', order: 'DESC' }}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <ReferenceField source="mailing_status" reference="mailing-statuses">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="groups" />
      <TextField source="devices" />

      <DateField source="createdAt" showTime />
      <DateField source="updatedAt" showTime />
    </Datagrid>
  </List>
);

