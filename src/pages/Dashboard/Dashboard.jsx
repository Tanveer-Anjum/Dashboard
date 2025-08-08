import { Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfoli from "./Components/Portfoli";

function Dashboard() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Box >
         <Portfoli/>
        </Box>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
