
import {
  SimpleForm,
  TextInput,
  Create,
  ReferenceInput,
  SelectInput,
  required
} from "react-admin";

export const GroupCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} />
      <ReferenceInput label="Contacts" source="contact_id" reference="contacts">
        <SelectInput resettable />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
