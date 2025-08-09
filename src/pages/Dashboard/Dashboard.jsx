import { Box, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfoli from "./Components/Portfoli";
import PricingCard from "./Components/PricingCard";

function Dashboard() {
  return (
    <>

      <DashboardLayout title="Dashboard">
      <Grid
  templateColumns={{
    base: "repeat(1, 1fr)", // 1 column on mobile
    md: "repeat(2, 1fr)",   // 2 columns on medium+
  }}
  gap={6}
>
  {/* Portfolio full width */}
  <GridItem colSpan={{ base: 1, md: 2 }}>
    <Portfoli />
  </GridItem>

  {/* PricingCard half width on desktop, full on mobile */}
  <GridItem colSpan={{ base: 1, md: 1 }}>
    <PricingCard />
  </GridItem>
</Grid>


      </DashboardLayout>


    </>
  );
}

export default Dashboard;
