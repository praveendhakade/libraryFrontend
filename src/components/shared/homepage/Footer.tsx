import { Button, List, Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center py-5 bg-blue-600 text-white px-14 mt-auto">
      <Typography variant="body2" component={"p"}>
        © Example Library App, Inc
      </Typography>
      <List component={Stack} direction="row">
        <div>
          <Button color="inherit">Home</Button>
        </div>
        <div>
          <Button color="inherit">Search Books</Button>
        </div>
      </List>
    </footer>
  );
};
