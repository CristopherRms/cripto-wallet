import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";

export default function BuyAndSell() {
  const [mode, setMode] = useState("buy"); // buy | sell

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />

        {/* Contenido */}
        <Box
          sx={{
            flexGrow: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
            paddingTop: 15,
          }}
        >
          {/* Título */}
          <Typography variant="h3" sx={{ fontWeight: 700, color: "primary.main" }}>
            {mode === "buy" ? "Comprar BTC con USD" : "Vender BTC por USD"}
          </Typography>

          {/* CARD */}
          <Paper
            elevation={6}
            sx={{
              width: 420,
              backgroundColor: "info.main",
              p: 3,
              borderRadius: 4,
              background: "info.main",
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {/* TABS */}
            <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  pb: 1,
                  cursor: "pointer",
                  fontWeight: 600,
                  color: mode === "buy" ? "white" : "#555",
                  borderBottom: mode === "buy" ? "3px solid #003049" : "none",
                }}
                onClick={() => setMode("buy")}
              >
                Comprar
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  pb: 1,
                  cursor: "pointer",
                  fontWeight: 600,
                  color: mode === "sell" ? "white" : "#555",
                  borderBottom: mode === "sell" ? "3px solid #003049" : "none",
                }}
                onClick={() => setMode("sell")}
              >
                Vender
              </Typography>
            </Box>

            {/* Campo 1: Gastas / Vendes */}
            <Box
              sx={{
                p: 2,
                backgroundColor: "primary.main",
                borderRadius: 3,
                border: "1px solid #333",
              }}
            >
              <Typography sx={{ color: "#888", mb: 1 }}>
                {mode === "buy" ? "Gastas" : "Vendes"}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder={mode === "buy" ? "85,614.97" : "1"}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      fontSize: "1.5rem",
                      color: "white",
                    },
                  }}
                />

                <Box
                  sx={{
                    color: "white",
                    backgroundColor: "info.main",
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontWeight: 600,
                  }}
                >
                  {mode === "buy" ? "USD" : "BTC"}
                </Box>
              </Box>
            </Box>

            {/* Campo 2: Recibes */}
            <Box
              sx={{
                p: 2,
                backgroundColor: "primary.main",
                borderRadius: 3,
                border: "1px solid #333",
              }}
            >
              <Typography sx={{ color: "#888", mb: 1 }}>
                {mode === "buy" ? "Recibes" : "Recibes"}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder={mode === "buy" ? "1" : "85,614.97"}
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      fontSize: "1.5rem",
                      color: "white",
                    },
                  }}
                />

                {mode === "buy" ? (
                  <TextField
                    select
                    variant="standard"
                    defaultValue="BTC"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        color: "white",
                        backgroundColor: "info.main",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontWeight: 600,
                      },
                    }}
                  >
                    <MenuItem value="BTC">BTC</MenuItem>
                    <MenuItem value="ETH">ETH</MenuItem>
                    <MenuItem value="USDT">USDT</MenuItem>
                  </TextField>
                ) : (
                  <Box
                    sx={{
                      color: "white",
                      backgroundColor: "primary.main",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  >
                    USD
                  </Box>
                )}
              </Box>
            </Box>

            {/* Botón */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                py: 2,
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "white",
                borderRadius: 2,
                backgroundColor: "secondary.main",
                "&:hover": {
                  backgroundColor: "#8A0D17",
                },
              }}
            >
              {mode === "buy" ? "Comprar" : "Vender"}
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
