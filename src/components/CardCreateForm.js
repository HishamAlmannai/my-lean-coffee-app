import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CardCreateForm() {
  const [nameValue, setNameValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const router = useRouter();

  const submit = async (event) => {
    event.preventDefault();
    const contentValue = event.target.elements.content.value;
    const nameValue = event.target.elements.name.value;

    const response = await fetch("/api/card/create", {
      method: "POST",
      body: JSON.stringify({
        content: contentValue,
        name: nameValue,
      }),
    });
    console.log(await response.json());
    router.push("/cards");
  };
  return (
    <>
      <form onSubmit={submit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              name="content"
              label="content"
              fullWidth
              rows={2}
              value={contentValue}
              onChange={(event) => {
                setContentValue(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="name"
              fullWidth
              sx={{ marginTop: 1.5 }}
              value={nameValue}
              onChange={(event) => {
                setNameValue(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
