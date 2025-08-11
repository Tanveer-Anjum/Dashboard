import { Box, Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import Portfoli from "./Components/Portfoli";
import PricingCard from "./Components/PricingCard";
import Transection from "./Components/Transection";
import CardInfo from "./Components/CardInfo";
import Support from "../Support/Support";

function Dashboard({}) {
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
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <Transection />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}
          
          >
            <CardInfo text="Loan" 
            textTag='Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Autem praesentium iusto, ea beatae temporibus in corporis a soluta minima odio velit 
 vero unde rem nulla ab libero! Harum, fuga voluptate?'

 inverted={false}
            />
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <CardInfo text ="Contact"
            textTag='Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Autem praesentium iusto, ea beatae temporibus in corporis a soluta minima odio velit 
 vero unde rem nulla ab libero! Harum, fuga voluptate?'

 inverted={true}
            />
          </GridItem>
           

        </Grid>


      </DashboardLayout>


    </>
  );
}

export default Dashboard;
