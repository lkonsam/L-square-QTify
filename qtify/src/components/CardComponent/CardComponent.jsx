import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Card.module.css";

export default function CardComponent({ props }) {
  return (
    <>
      <Box className={styles.cardbox} >
        <Card>
          <CardMedia
            image={require("../../assets/hero_headphones.png")}
            title="green iguana"
          />
          <CardContent>
          </CardContent>
        </Card>

        Hello World
      </Box>
    </>
  );
}
