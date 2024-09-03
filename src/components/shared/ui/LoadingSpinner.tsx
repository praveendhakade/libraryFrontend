import { Box, CircularProgress } from "@mui/material";

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress size={"40px"} />
    </Box>
  );
};
