import { Grid, Typography } from "@mui/material";
import Card from "./Card";
import useSWR from "swr";

export default function CardGrid() {
  const { data, error } = useSWR("/api/cards");

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {data.map((card) => (
        <Grid item xs={4} key={card.id}>
          <Card id={card.id} content={card.content} name={card.name} />
        </Grid>
      ))}
    </Grid>
  );
}
