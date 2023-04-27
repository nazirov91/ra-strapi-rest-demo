import {
  ArrayField,
  Button,
  Datagrid,
  ImageField,
  RichTextField,
  SimpleShowLayout,
  TextField,
  UrlField,
} from "react-admin";

export const AboutShow = (props: any) => {
  const { data, setEdit } = props;
  return (
    <>
      <Button
        label="Edit"
        size="large"
        color="primary"
        sx={{
          marginTop: "1rem",
          width: "1rem",
        }}
        onClick={() => setEdit(true)}
      />
      <SimpleShowLayout record={data}>
        <TextField source="title" />
        <RichTextField source="content" />
        <ImageField source="pictures" src="url" />
        <ArrayField source="SocialLinks">
          <Datagrid isRowSelectable={() => false} onSelect={() => {}}>
            <TextField source="platform" />
            <UrlField source="url" target="_blank" />
          </Datagrid>
        </ArrayField>
      </SimpleShowLayout>
    </>
  );
};
