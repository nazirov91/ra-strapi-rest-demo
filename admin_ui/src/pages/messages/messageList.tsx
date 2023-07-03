import {
  Datagrid,
  List,
  TextField,
  ImageField,
  FunctionField,
  SearchInput,
  BooleanInput,
  NumberField,
  ReferenceField,
  DateField,
  BooleanField
} from "react-admin";

const messageFilters = [
  <SearchInput source="q" alwaysOn />,
  <BooleanInput label="Status Send" source="is_send" defaultValue={true} />, 
];

export const MessageList = () => (
  <List hasCreate hasEdit filters={messageFilters} sort={{ field: 'createdAt', order: 'DESC' }}> 
    <Datagrid rowClick="show" bulkActionButtons={false} >
      <NumberField source="device" />
      <ReferenceField source="contact" reference="contacts">
        <TextField source="phone" />
      </ReferenceField>
      <FunctionField label="Content" render={(a: any) => `${a.content.substring(0, 30)}...`} />
      <ImageField
        source="media.url"
        label="Media"
        sx={{ "& img": { maxWidth: 30, maxHeight: 30, objectFit: "contain" } }}
      />
      <BooleanField source="is_send" label="Status" />
      <TextField source="group" />
      <DateField source="createdAt" showTime/>
      <DateField source="updatedAt" showTime/>
    </Datagrid>
  </List>
);
