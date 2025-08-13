import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  // Alert,
  Box,
  Button,
  // Card,
  // CardMedia,
  // Chip,
  // CircularProgress,
  Container,
  // Divider,
  Link,
  Paper,
  // Snackbar,
  Typography,
} from "@mui/material";
import Navbar from "../Components/Navbar";
// import GradientBackground from "../Components/GradientBackground";
// ... existing code ...
import { useRef } from "react";
import {
  essence,
  essenceShort,
  whatIsORMABA1,
  whatIsORMABA2,
  whatIsORMABAshort,
} from "../contents";
import GalleryCarousel from "../Components/GalleryCarousel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ScrollRestoration } from "react-router-dom";
import { questions, answers } from "../contents.js";

function Home() {
  const learnRef = useRef(null);
  return (
    <>
      <ScrollRestoration />
      <Box
        sx={{
          width: "100vw",
          backgroundImage: `url(/ormaba25/background2.png)`,
          backgroundSize: { xs: "400vw", md: "100vw" },
          backgroundPosition: "top center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          pb: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            zIndex: -1,
          }}
        />
        <Navbar />
        <video
          autoPlay
          loop
          muted
          style={{
            zIndex: -1,
            position: "absolute",
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
          }}
        >
          <source src="/ormaba5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <section id="top-section">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  pb: 2,
                  fontWeight: "bold",
                  color: "#ffffff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                O R M A B A
              </Typography>
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  borderColor: "#ffffff",
                  "&:hover": {
                    borderColor: "#e0e0e0",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={() =>
                  learnRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                learn
              </Button>
            </Box>
            <Box sx={{ mt: 16, display: { xs: "none", md: "block" } }}>
              <img
                src="ormaba25/wide1.png"
                alt=""
                style={{ width: "55vw", height: "auto" }}
              />
            </Box>
            <Box
              sx={{
                mt: 4,
                mb: -4,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
              }}
            >
              <img
                src="ormaba25/wide1.png"
                alt=""
                style={{ width: "95vw", height: "auto" }}
              />
            </Box>
          </section>

          <section id="what-section" ref={learnRef}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* desktop version */}
              <Box
                sx={{
                  mt: 16,
                  width: "100%",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mb: 10,
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
                    elevation={8}
                    sx={{
                      bgcolor: "transparent",
                      pl: 4,
                      py: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ mr: 1 }}>
                      <img src="ormaba25/wing.png" height={"37px"} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffd700",
                        fontStyle: "italic",
                        mr: 2,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      What
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffffff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      is ORMABA?
                    </Typography>
                    <Box sx={{ transform: "scaleX(-1)", ml: 1, mr: 4 }}>
                      <img src="ormaba25/wing.png" height={"37px"} />
                    </Box>
                  </Paper>
                  <span>
                    <hr style={{ display: "inline-flex", width: "28vw" }} />
                  </span>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    mt: 5,
                    width: "75vw",
                    color: "#f0f0f0",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  {whatIsORMABA1} <b style={{ color: "#ffd700" }}>Kerohanian</b>
                  , <b style={{ color: "#ffd700" }}>Kepemimpinan</b>, dan{" "}
                  <b style={{ color: "#ffd700" }}>Kekeluargaan</b>.{" "}
                  {whatIsORMABA2}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <hr style={{ display: "inline-flex", width: "28vw" }} />
                  </span>
                  <Paper
                    elevation={8}
                    sx={{
                      bgcolor: "transparent",
                      pr: 4,
                      py: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ mr: 1, ml: 4 }}>
                      <img src="ormaba25/wing.png" height={"35px"} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffd700",
                        fontStyle: "italic",
                        mr: 2,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      Essence
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffffff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      of ORMABA
                    </Typography>
                    <Box sx={{ ml: 1, transform: "scaleX(-1)" }}>
                      <img src="ormaba25/wing.png" height={"35px"} />
                    </Box>
                  </Paper>
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    mt: 5,
                    pb: 20,
                    width: "75vw",
                    color: "#f0f0f0",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  {essence}
                </Typography>
              </Box>

              {/* mobile version */}
              <Box
                sx={{
                  mt: 0,
                  width: "100%",
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mb: 4,
                }}
              >
                <Paper
                  elevation={8}
                  sx={{ bgcolor: "transparent", p: 2, mt: 8 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Box sx={{ mr: 1 }}>
                      <img src="ormaba25/wing.png" style={{ width: "2em" }} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffd700",
                        fontStyle: "italic",
                        mr: 1,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      What
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffffff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      is ORMABA?
                    </Typography>
                    <Box sx={{ ml: 1 }}>
                      <img
                        src="ormaba25/wing.png"
                        style={{ width: "2em", transform: "scaleX(-1)" }}
                      />
                    </Box>
                  </Box>
                </Paper>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    mt: 5,
                    pb: 5,
                    width: "75vw",
                    color: "#f0f0f0",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  {whatIsORMABAshort}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Paper elevation={8} sx={{ bgcolor: "transparent", p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Box sx={{ mr: 1 }}>
                      <img src="ormaba25/wing.png" style={{ width: "2em" }} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        color: "#ffd700",
                        fontStyle: "italic",
                        fontSize: "20px",
                        mr: 1,
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      Essence
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "left",
                        display: "inline",
                        fontSize: "20px",
                        color: "#ffffff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      of ORMABA
                    </Typography>
                    <Box sx={{ ml: 1 }}>
                      <img
                        src="ormaba25/wing.png"
                        style={{ width: "2em", transform: "scaleX(-1)" }}
                      />
                    </Box>
                  </Box>
                </Paper>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "justify",
                    mt: 5,
                    pb: 5,
                    width: "75vw",
                    color: "#f0f0f0",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  {essenceShort}
                </Typography>
              </Box>
            </Box>
          </section>

          <section id="days-section">
            {/* desktop version */}
            <Box sx={{ display: { xs: "none", md: "inherit" } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    left: "-139px",
                    top: "-30px",
                  }}
                >
                  <img src="ormaba25/cloud.png" alt="" height="169px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "scaleX(-1)",
                    position: "relative",
                    right: "-139px",
                    top: "-30px",
                  }}
                >
                  <img src="ormaba25/cloud.png" alt="" height="169px" />
                </Box>
              </Box>
              <Box sx={{ mt: 0, display: "flex", justifyContent: "center" }}>
                <Paper
                  elevation={8}
                  sx={{ bgcolor: "transparent", px: 5, py: 2, width: "50vw" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ mr: 3 }}>
                      <img src="ormaba25/wing.png" height={"40px"} />
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: "center",
                        color: "#ffffff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      Rangkaian Kegiatan
                    </Typography>
                    <Box sx={{ transform: "scaleX(-1)", ml: 3 }}>
                      <img src="ormaba25/wing.png" height={"40px"} />
                    </Box>
                  </Box>
                </Paper>
              </Box>
              <Box sx={{ mt: 8, width: "75vw" }}>
                <Paper
                  elevation={8}
                  sx={{ bgcolor: "transparent", p: 4, display: "flex" }}
                >
                  <Box
                    sx={{
                      mr: 4,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="ormaba25/da1.JPG"
                      alt=""
                      height="200px"
                      style={{ borderRadius: "10%" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#ffd700",
                          mb: 2,
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        }}
                      >
                        <b>
                          <i>Dharma Asrama 1</i>
                        </b>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "left",
                          color: "#f0f0f0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                        }}
                      >
                        Kegiatan Dharma Asrama 1 akan berfokus pada pengenalan
                        UNIKAHIDHA dan kegiatan-kegiatan yang memperdalam nilai
                        kerohanian.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
              <Box sx={{ mt: 8, width: "75vw" }}>
                <Paper
                  elevation={8}
                  sx={{ bgcolor: "transparent", p: 4, display: "flex" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          color: "#ffd700",
                          mb: 2,
                          textAlign: "right",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        }}
                      >
                        <b>
                          <i>Dharma Asrama 2</i>
                        </b>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: "right",
                          color: "#f0f0f0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                        }}
                      >
                        Kegiatan Dharma Asrama 2 akan berfokus pada pengembangan
                        skill diri sebagai cakupan nilai kepemimpinan, dan
                        bonding angkatan sebagai cakupan dari nilai
                        kekeluargaan.
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      ml: 4,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/da2.jpeg"
                      alt=""
                      height="200px"
                      style={{ borderRadius: "10%" }}
                    />
                  </Box>
                </Paper>
              </Box>
            </Box>

            {/* mobile version */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                mt: 8,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  left: "-20px",
                }}
              >
                <img src="ormaba25/cloud.png" alt="" width="120em" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: "scaleX(-1)",
                  position: "relative",
                  right: "-20px",
                }}
              >
                <img src="ormaba25/cloud.png" alt="" width="120em" />
              </Box>
            </Box>
            <Box sx={{ display: { xs: "inherit", md: "none" } }}>
              <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Paper
                  elevation={8}
                  sx={{ bgcolor: "transparent", py: 2, width: "80vw" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ ml: 2 }}>
                      <img src="ormaba25/wing.png" style={{ width: "2em" }} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        textAlign: "center",
                        width: "20em",
                        fontSize: "20px",
                        color: "#ffffff",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      Rangkaian Kegiatan
                    </Typography>
                    <Box sx={{ mr: 2 }}>
                      <img
                        src="ormaba25/wing.png"
                        style={{ width: "2em", transform: "scaleX(-1)" }}
                      />
                    </Box>
                  </Box>
                </Paper>
              </Box>
              <Box sx={{ mt: 8, width: "80vw" }}>
                <Paper
                  elevation={8}
                  sx={{
                    bgcolor: "transparent",
                    p: 4,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box
                    sx={{
                      mb: 4,
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="ormaba25/da1.JPG"
                      alt=""
                      height="200px"
                      style={{ borderRadius: "10%" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ffd700",
                          mb: 4,
                          textAlign: "center",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        }}
                      >
                        <b>Dharma Asrama 1</b>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          textAlign: "center",
                          mb: 2,
                          color: "#f0f0f0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                        }}
                      >
                        Kegiatan Dharma Asrama 1 akan berfokus pada pengenalan
                        UNIKAHIDHA dan kegiatan-kegiatan yang memperdalam nilai
                        kerohanian.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
              <Box sx={{ mt: 8, width: "80vw" }}>
                <Paper
                  elevation={8}
                  sx={{
                    bgcolor: "transparent",
                    p: 4,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Box
                    sx={{
                      mb: 4,
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/da2.jpeg"
                      alt=""
                      height="200px"
                      style={{ borderRadius: "10%" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ffd700",
                          mb: 4,
                          textAlign: "center",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        }}
                      >
                        <b>Dharma Asrama 2</b>
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="body2"
                        sx={{
                          textAlign: "center",
                          mb: 2,
                          color: "#f0f0f0",
                          textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                        }}
                      >
                        Kegiatan Dharma Asrama 2 akan berfokus pada pengembangan
                        skill diri sebagai cakupan nilai kepemimpinan, dan
                        bonding angkatan sebagai cakupan dari nilai
                        kekeluargaan.
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
          </section>

          <section id="faq-section">
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "space-between",
                mt: 8,
                mb: -12,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  left: "-0px",
                }}
              >
                <img src="ormaba25/cloud.png" alt="" width="120em" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: "scaleX(-1)",
                  position: "relative",
                  right: "-0px",
                }}
              >
                <img src="ormaba25/cloud.png" alt="" width="120em" />
              </Box>
            </Box>
            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "space-between",
                mt: 16,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  left: "-139px",
                }}
              >
                <img src="ormaba25/cloud.png" alt="" height="169px" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  transform: "scaleX(-1)",
                  position: "relative",
                  right: "-139px",
                }}
              >
                <img src="ormaba25/cloud.png" alt="" height="169px" />
              </Box>
            </Box>
            <Box
              sx={{
                mt: { md: 0, xs: 16 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  bgcolor: "transparent",
                  p: 2,
                  width: { xs: "69vw", md: "22vw" },
                  mb: 8,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ mr: 3, display: { md: "flex", xs: "none" } }}>
                    <img src="ormaba25/wing.png" height={"30px"} />
                  </Box>
                  <Box sx={{ mr: 2, display: { md: "none", xs: "flex" } }}>
                    <img src="ormaba25/wing.png" height={"20em"} />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      textAlign: "center",
                      width: "2em",
                      color: "#ffffff",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    FAQ
                  </Typography>

                  <Box
                    sx={{
                      transform: "scaleX(-1)",
                      ml: 3,
                      display: { md: "flex", xs: "none" },
                    }}
                  >
                    <img src="ormaba25/wing.png" height={"30px"} />
                  </Box>
                  <Box
                    sx={{
                      transform: "scaleX(-1)",
                      ml: 2,
                      display: { md: "none", xs: "flex" },
                    }}
                  >
                    <img src="ormaba25/wing.png" height={"20em"} />
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box>
              {questions.map((question, index) => (
                <Accordion
                  key={index}
                  elevation={8}
                  sx={{ bgcolor: "transparent" }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#ffd700" }} />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    sx={{
                      color: "#ffd700",
                      "& .MuiAccordionSummary-content": {
                        color: "#ffd700",
                        textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      },
                    }}
                  >
                    <b>{question}</b>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      color: "#f0f0f0",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                    }}
                  >
                    {answers[index]}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </section>

          <section id="gallery-section">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  mt: 16,
                }}
              >
                <img src="ormaba25/wide2.png" alt="" />
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    left: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="100px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "scaleX(-1)",
                    position: "relative",
                    right: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="100px" />
                </Box>
              </Box>
              <Box
                sx={{
                  display: { md: "none", xs: "flex" },
                  justifyContent: "center",
                  mt: 8,
                }}
              >
                <img
                  src="ormaba25/wide2.png"
                  alt=""
                  style={{ width: "20em" }}
                />
              </Box>
              <Box
                sx={{
                  display: { md: "none", xs: "flex" },
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    left: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="25em" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "scaleX(-1)",
                    position: "relative",
                    right: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="25em" />
                </Box>
              </Box>
              <Box
                sx={{
                  width: "80vw",
                  mt: { md: 0, xs: 0 },
                  mb: { md: 0, xs: 0 },
                }}
              >
                <GalleryCarousel />
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "space-between",
                  mt: -4,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "scaleY(-1)",
                    position: "relative",
                    left: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="100px" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "scaleX(-1) scaleY(-1)",
                    position: "relative",
                    right: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="100px" />
                </Box>
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: "center",
                  transform: "scaleY(-1)",
                  mb: 10,
                }}
              >
                <img
                  src="ormaba25/wide1.png"
                  alt=""
                  style={{ width: "55vw", height: "auto" }}
                />
              </Box>
              <Box
                sx={{
                  display: { md: "none", xs: "flex" },
                  justifyContent: "space-between",
                  mt: -4,
                  transform: "scaleY(-1)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    left: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="25em" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    transform: "scaleX(-1)",
                    position: "relative",
                    right: "-34vw",
                  }}
                >
                  <img src="ormaba25/line.png" alt="" height="25em" />
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 4,
                mb: 4,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                transform: "scaleY(-1)",
              }}
            >
              <img
                src="ormaba25/wide1.png"
                alt=""
                style={{ width: "95vw", height: "auto" }}
              />
            </Box>
          </section>

          <section id="contact-section">
            <Box
              sx={{
                zIndex: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pb: 12,
              }}
            >
              <Paper
                elevation={8}
                sx={{
                  bgcolor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Link
                  sx={{ display: "flex", textDecoration: "none", zIndex: 10 }}
                  href="https://www.instagram.com/ormaba.unikahidha/"
                  target="_blank"
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 1,
                    }}
                  >
                    <img src="/ig.webp" alt="" height="50px" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#ffd700",
                          pr: 1,
                          textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                        }}
                      >
                        <b>INSTAGRAM</b>
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Paper>
              {/* copyright */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  right: 0,
                  left: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "transparent",
                  color: "secondary.light",
                  p: 1,
                  flexDirection: "column",
                }}
              >
                <hr style={{ display: "inline-flex", width: "90vw" }}></hr>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#f0f0f0",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
                  }}
                >
                  Copyright © 2025 | By DDTM ORMABA UNIKAHIDHA
                </Typography>
              </Box>
            </Box>
          </section>
          <Paper
            elevation={4}
            sx={{
              bgcolor: "transparent",
              position: "absolute",
              bottom: 0,
              width: "100vw",
              height: "4.2em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          ></Paper>
        </Container>
      </Box>
    </>
  );
}

export default Home;
