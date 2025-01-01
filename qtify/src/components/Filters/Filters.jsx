import { Tabs, Tab } from "@mui/material";
import styles from "./Filters.module.css";

export default function Filters({
  filters,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) {
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setSelectedFilterIndex(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedFilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: { backgroundColor: "var(--color-primary)" },
        }}
      >
        {filters.map((ele, idx) => (
          <Tab
            label={ele.label}
            {...a11yProps(idx)}
            key={idx}
            className={styles.tab}
          />
        ))}
      </Tabs>
    </>
  );
}
