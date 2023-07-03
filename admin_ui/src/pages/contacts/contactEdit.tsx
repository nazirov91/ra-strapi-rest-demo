
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageInput,
  required,
  TopToolbar, 
  ListButton, 
  ShowButton,
} from "react-admin";
import { PreviewImage } from "../../Layout";

const ContactEditActions = () => (
  <TopToolbar>
      <ListButton />
      <ShowButton />
  </TopToolbar>
);

export const ContactEdit = () => (
  <Edit actions={<ContactEditActions />}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="phone"  validate={[required()]}/>
      <TextInput source="title" />
      <ImageInput source="thumbnail" label="Thumbnail">
        <PreviewImage />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
