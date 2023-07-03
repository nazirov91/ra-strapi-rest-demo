import {
  Datagrid,
  List,
  TextField,
  SearchInput,
  BooleanInput,
  NumberField,
  DateField,
} from "react-admin";

const deviceFilters = [
  <SearchInput source="q" alwaysOn />,
  <BooleanInput label="Status Send" source="is_send" defaultValue={true} />,
];

export const DeviceList = () => (
  <List hasCreate hasEdit filters={deviceFilters} sort={{ field: 'createdAt', order: 'DESC' }}> 
    <Datagrid rowClick="show" bulkActionButtons={false} >
      <NumberField source="number" />
      <TextField source="title" />
      <NumberField source="status" />
      <DateField source="payment_date_start" showTime/>
      <DateField source="payment_date_close" showTime/>
      <DateField source="createdAt" showTime/>
      <DateField source="updatedAt" showTime/>
    </Datagrid>
  </List>
);
