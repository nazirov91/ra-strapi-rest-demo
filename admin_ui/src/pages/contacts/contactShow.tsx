import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ImageField,
  TopToolbar,
  ListButton,
  EditButton,
  SingleFieldList,
  ReferenceManyField,
  ChipField
} from "react-admin";

const ContactShowActions = () => (
  <TopToolbar>
    <ListButton /> 
    <EditButton />
  </TopToolbar>
);

export const ContactShow = () => {
  return (
    <Show actions={<ContactShowActions />}>
      <SimpleShowLayout>
        <TextField source="phone" />
        <TextField source="title" />
        <TextField source="published_date" label="Publish date" />
        <ImageField source="thumbnail.url" label="Thumbnail" />
        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />
        <ReferenceManyField label="Groups" reference="groups" target="contacts_id">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
