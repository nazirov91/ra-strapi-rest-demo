import {
  Show,
  SimpleShowLayout,
  TextField,
  NumberField,
  ReferenceField,
  DateField,
  TopToolbar,
  ListButton,
} from "react-admin";

const DeviceShowActions = () => (
  <TopToolbar>
      <ListButton />
  </TopToolbar>
);

export const DeviceShow = () => {
  return (
    <Show actions={<DeviceShowActions />}>
      <SimpleShowLayout>
        <NumberField source="number" />
        <ReferenceField source="status-device" reference="status-devices">
          <TextField source="title" />
        </ReferenceField>
       
        <NumberField source="status_device" />

        <DateField source="payment_date_start" showTime />
        <DateField source="payment_date_close" showTime />
        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />

        

      </SimpleShowLayout>
    </Show>
  );
};
