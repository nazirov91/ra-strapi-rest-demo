
import {
  SimpleForm,
  TextInput,
  ImageInput,
  Create,
  ReferenceInput,
  AutocompleteInput,
  required, 
} from "react-admin";
import { PreviewImage } from "../../Layout";

export const MessageCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="contact" reference="contacts"  validate={[required()]}>
        <AutocompleteInput optionText="phone" />
      </ReferenceInput>
      <TextInput multiline source="content" validate={[required()]}/>
      <ImageInput source="media" label="Media">
        <PreviewImage />
      </ImageInput>
      <TextInput source="group"/>
    </SimpleForm>
  </Create>
);
