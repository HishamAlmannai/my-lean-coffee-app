import { Grid } from "@mui/material";
import Card from "./Card";

export default function CardGrid({ cards }) {
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item xs={4} key={card.id}>
          <Card id={card.id} content={card.content} name={card.name} />
        </Grid>
      ))}
    </Grid>
  );
}
