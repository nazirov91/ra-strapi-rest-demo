
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

const MassmailingEditActions = () => (
  <TopToolbar>
      <ListButton />
      <ShowButton />
  </TopToolbar>
);

export const MassmailingEdit = () => (
  <Edit actions={<MassmailingEditActions />}>
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
