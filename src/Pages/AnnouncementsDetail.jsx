import { Box, Button, Container, Link, Paper, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CenteredLoader from "../Components/CenteredLoader";
import apiURL from "../APIURL";
import background from "/background7.jpg";
import { ScrollRestoration, useNavigate, useParams } from "react-router-dom";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function AnnouncementDetail() {
  const params = useParams();
  const navigate = useNavigate();

  const getAnnouncements = async () => {
    const response = await axios.get(`${apiURL}/api/announcements`, { withCredentials: false });
    return response.data;
  };

  const {
    data: announcements,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getAnnouncements"],
    queryFn: getAnnouncements,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  const announcement = announcements?.find((annou) => annou.ID == params.id);

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = announcement.Contents.split(urlRegex);

  if (isLoading) {
    return <CenteredLoader />;
  }

  if (error) {
    console.log(error);
    navigate("/");
  }

  return (
    <>
      <ScrollRestoration />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `url(${background})`,
          backgroundSize: { xs: "400vw", md: "100vw" },
          backgroundPosition: "top center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: -1,
          }}
        />
        <Navbar />
        <Box
          sx={{
            m: 4,
            position: "absolute",
            display: { xs: "none", md: "inline" },
            top: 70,
          }}
        >
          <Button
            variant="contained"
            size="medium"
            onClick={() => navigate("/announcements")}
          >
            Back
          </Button>
        </Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={24}
              sx={{
                bgcolor: "transparent",
                maxWidth: { md: "50vw" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "75vw",
                mb: 6,
                mt: 16,
                py: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 2,
                  }}
                >
                  <CampaignIcon
                    fontSize="large"
                    sx={{ color: "primary.main" }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    mr: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "primary.main",
                      fontSize: { xs: "1.5em", md: "2em" },
                    }}
                  >
                    <b>{announcement.Title}</b>
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Paper
              elevation={24}
              sx={{
                bgcolor: "transparent",
                maxWidth: { md: "50vw" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                mb: 6,
                p: 4,
              }}
            >
              <Typography
                variant="h6"
                whiteSpace={"pre-line"}
                sx={{ fontSize: { xs: "1em" } }}
              >
                {parts.map((part, index) =>
                  urlRegex.test(part) ? (
                    <Link
                      key={index}
                      href={part}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        wordBreak: "break-all",
                        overflowWrap: "break-word",
                      }}
                    >
                      {part}
                    </Link>
                  ) : (
                    part
                  )
                )}
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
