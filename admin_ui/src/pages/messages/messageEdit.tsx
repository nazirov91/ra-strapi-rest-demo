
import {
    Edit,
    SimpleForm,
    TextInput,
    ImageInput,
    ReferenceInput,
    AutocompleteInput,
    required,
    TopToolbar, 
    ListButton, 
    ShowButton,
  } from "react-admin";
  import { PreviewImage } from "../../Layout";
  
  const MessageEditActions = () => (
    <TopToolbar>
        <ListButton />
        <ShowButton />
    </TopToolbar>
  );
  
  export const MessageEdit = () => (
    <Edit actions={<MessageEditActions />}>
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
    </Edit>
  );
  