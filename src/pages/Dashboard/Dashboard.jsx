import { Box } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardLayout title="Dashboard">
        <Box >
          Main Dashboard Content
        </Box>
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
