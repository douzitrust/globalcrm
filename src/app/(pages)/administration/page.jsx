"use client";
import MainCardSetting from "@/app/components/administration/MainCardSetting";
import SettingsLead from "@/app/components/administration/utils/SettingsLead";
import TabComponent from "@/app/components/TabComponent";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

function Page() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box className="add-unit min-h-screen flex justify-center items-center" dir="ltr">
    <Grid
      container
      direction="row"
      wrap="nowrap"
      className="gap-6 max-sm:gap-1 py-6 px-4 min-h-screen"
    >
      <TabComponent
        ele={["units", "leads"]}
        handleTabChange={handleTabChange}
        selectedTab={selectedTab}
      />
      <Grid
        item
        xs={12}
        sm={10}
        className="bg-Lightbg dark:bg-transparent rounded-md px-2"
      >
        {selectedTab === 0 && (
          <MainCardSetting
            title="Units Settings"
            description="You can access the unit setting here"
            content={<p>Content for Units Setting</p>}
          />
        )}
        {selectedTab === 1 && (
          <MainCardSetting
            title="Leads Settings"
            description="You can access the lead setting here"
            content={<SettingsLead />}
          />
        )}
      </Grid>
    </Grid>
    </Box>
  );
}

export default Page;
