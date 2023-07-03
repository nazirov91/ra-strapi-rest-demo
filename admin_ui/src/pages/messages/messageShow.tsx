import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  RichTextField,
  NumberField,
  ReferenceField,
  DateField,
  TopToolbar,
  ListButton,
} from "react-admin";

const MessageShowActions = () => (
  <TopToolbar>
      <ListButton />
  </TopToolbar>
);

export const MessageShow = () => {
  return (
    <Show actions={<MessageShowActions />}>
      <SimpleShowLayout>
        <NumberField source="device" />
        <ReferenceField source="contact" reference="contacts">
          <TextField source="phone" />
        </ReferenceField>
        <RichTextField source="content" />
        <ImageField
          source="media.url"
          label="Media"
          sx={{ "& img": { maxWidth: 30, maxHeight: 30, objectFit: "contain" } }}
        />
        <TextField label="Status" source="is_send" />
        <TextField source="group" />

        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />

        

      </SimpleShowLayout>
    </Show>
  );
};
