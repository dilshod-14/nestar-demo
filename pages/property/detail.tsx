import withLayoutMain from "@/libs/components/layout/LayoutHome";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Container, Stack } from "@mui/material";

const PropertyList = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return <Stack>PROPERTY DETIAL MOBILE</Stack>;
  } else {
    return <Container>PROPERTY DETIAL</Container>;
  }
};

export default withLayoutMain(PropertyList);
