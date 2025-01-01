import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress, Stack } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";

export default function Section({ title, data, genres, type }) {
  const [filters, setFilters] = useState([]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
  const [collapsed, setcollapsed] = React.useState(true);

  const collapseHandler = () => {
    setcollapsed(!collapsed);
  };

  useEffect(() => {
    if (genres?.data) {
      setFilters([{ key: "all", label: "all" }, ...genres.data]);
    }
  }, [genres]);

  const showFilters = filters.length > 0;
  const cardsToRender = data.filter((card) =>
    showFilters && selectedFilterIndex !== 0
      ? card.genre.key === filters[selectedFilterIndex].key
      : card
  );

  return (
    <>
      <section className={styles.sectionOutterWrapper}>
        <Stack direction="row" justifyContent="space-between">
          <h3>{title}</h3>
          <h4 className={styles.collapseText} onClick={collapseHandler}>
            {collapsed ? "Show All" : "Collapse All"}
          </h4>
        </Stack>

        {showFilters && (
          <div className={styles.filterWrapper}>
            <Filters
              filters={filters}
              selectedFilterIndex={selectedFilterIndex}
              setSelectedFilterIndex={setSelectedFilterIndex}
            />
          </div>
        )}

        {data.length ? (
          <div className={styles.sectionInnerWrapper}>
            {!collapsed ? (
              <div className={styles.showAllWrapper}>
                {cardsToRender.map((album) => (
                  <Card data={album} type={type} key={album.id} />
                ))}
              </div>
            ) : (
              <div>
                <Carousel
                  data={cardsToRender}
                  renderCardComponent={(item) => (
                    <Card data={item} type={type} />
                  )}
                />
              </div>
            )}
          </div>
        ) : (
          <div className={styles.progressBar}>
            <CircularProgress />
          </div>
        )}
      </section>
    </>
  );
}
