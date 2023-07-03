
import {
  SimpleForm,
  TextInput,
  ImageInput,
  Create,
  required
} from "react-admin";
import { PreviewImage } from "../../Layout";

export const ContactCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="phone" validate={[required()]}/>
      <TextInput source="title" />
      <ImageInput source="thumbnail" label="Thumbnail">
        <PreviewImage />
      </ImageInput>
    </SimpleForm>
  </Create>
);
