
import {
  SimpleForm,
  TextInput,
  Edit,
  ReferenceInput,
  SelectInput,
  required,
  TopToolbar, 
  ListButton, 
  ShowButton,
} from "react-admin";

const GroupEditActions = () => (
  <TopToolbar>
      <ListButton />
      <ShowButton />
  </TopToolbar>
);

export const GroupEdit = () => (
  <Edit actions={<GroupEditActions />}>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <ReferenceInput label="Contacts" source="contact_id" reference="contacts">
        <SelectInput resettable />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
