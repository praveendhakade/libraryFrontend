import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const ReviewForm: React.FC<{ postReview: (review: string) => void }> = ({
  postReview,
}) => {
  const [review, setReview] = useState<string>(""); // State to hold the review text

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform validation or API calls here
    postReview(review);

    // Reset the form
    setReview("");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h6" variant="h6">
          Description
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ReviewForm;
