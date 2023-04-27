import { Button, ImageInput, SimpleForm, TextInput, required } from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import { useUpdate } from "react-admin";
import { SingleType } from "../../ra-strapi-rest";
import { PreviewImage } from "../../Layout";

export const AboutEdit = (props: any) => {
  let { data, setEdit } = props;
  const [update, { isLoading, error }] = useUpdate();
  const handleSubmit = (value: any) => {
    update("about", { id: SingleType, data: value });
    setEdit(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;

  return (
    <>
      <Button
        label="Cancel"
        size="large"
        color="primary"
        sx={{
          marginTop: "1rem",
          width: "1rem",
        }}
        onClick={() => setEdit(false)}
      />
      <SimpleForm onSubmit={(v) => handleSubmit(v)} record={data || {}}>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="title" validate={required()} />
        <RichTextInput source="content" validate={required()} />
        <ImageInput source="pictures" label="Related pictures" multiple>
          <PreviewImage />
        </ImageInput>
      </SimpleForm>
    </>
  );
};
