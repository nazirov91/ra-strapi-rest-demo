import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  ReferenceField,
  TopToolbar,
  ListButton,
  EditButton,
  SingleFieldList,
  ReferenceManyField,
  ChipField
} from "react-admin";

const MassmailingShowActions = () => (
  <TopToolbar>
    <ListButton />
    <EditButton />
  </TopToolbar>
);

export const MassmailingShow = () => {
  return (
    <Show actions={<MassmailingShowActions />}>
      <SimpleShowLayout>
        <TextField source="title" />
        <ReferenceField source="mailing_status" reference="mailing-statuses">
          <TextField source="title" />
        </ReferenceField>
        <TextField source="groups" />
        <TextField source="devices" />

        <DateField source="createdAt" showTime />
        <DateField source="updatedAt" showTime />

        <ReferenceManyField label="Groups" reference="massmailings" target="groups">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>

        <ReferenceManyField label="Devices" reference="groups" target="contacts_id">
          <SingleFieldList linkType="show">
            <ChipField source="title" />
          </SingleFieldList>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
