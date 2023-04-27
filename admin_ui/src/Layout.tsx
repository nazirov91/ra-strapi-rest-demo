import { ImageField, Layout, useRecordContext } from "react-admin";
import { CustomMenu } from "./Menu";

export const PreviewImage = () => {
  const record: any = useRecordContext();
  const source = record?.url ? "url" : "src";
  return <ImageField source={source} />;
};

export const AppLayout = (props: any) => <Layout {...props} menu={CustomMenu} />;
