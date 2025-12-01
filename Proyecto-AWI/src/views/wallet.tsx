import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import Header from "../components/layout/header";
import Sidebar from "../components/layout/sidebar";

export default function Wallet() {
  const walletData = {
    btcBalance: "0.5234",
    usdBalance: "12,450.88",
    btcPrice: "45,876.12",
    network: "Bitcoin Mainnet",
    address: "bc1q2k92jq03x9rmx7g93dj2s9f92jks8qz9kxxja9",
  };

  const transactions = [
    {
      type: "receive",
      amount: "+0.015 BTC",
      usd: "+$689.20",
      date: "Hace 2 horas",
    },
    {
      type: "send",
      amount: "-0.005 BTC",
      usd: "-$229.30",
      date: "Hace 1 día",
    },
    {
      type: "receive",
      amount: "+0.10 BTC",
      usd: "+$4,587.61",
      date: "Hace 3 días",
    },
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />

        <Container sx={{ py: 5 }}>
          {/* Título */}
          <Typography variant="h4" fontWeight="bold" sx={{ color: "primary.main", mb: 4 }}>
            Wallet de Bitcoin
          </Typography>

          {/* Balance principal */}
          <Paper
            sx={{
              p: 4,
              mb: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              background: "linear-gradient(135deg, #003049, #012a40)",
              color: "white",
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" fontWeight="600">
              Balance total
            </Typography>

            <Typography variant="h3" fontWeight="bold">
              {walletData.btcBalance} BTC
            </Typography>

            <Typography variant="h6" sx={{ opacity: 0.8 }}>
              ≈ ${walletData.usdBalance} USD
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  bgcolor: "success.main",
                  "&:hover": { bgcolor: "success.dark" },
                }}
              >
                Recibir
              </Button>

              <Button
                variant="contained"
                sx={{
                  flex: 1,
                  bgcolor: "secondary.main",
                  "&:hover": { bgcolor: "secondary.dark" },
                }}
              >
                Enviar
              </Button>
            </Box>
          </Paper>

          {/* Wallet + QR */}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 5 }}>
            {/* Info */}
            <Paper sx={{ p: 4, flex: "1 1 350px" }}>
              <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
                Detalles de la Wallet
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">Red:</Typography>
                <Typography fontWeight="600">{walletData.network}</Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2">Dirección:</Typography>
                <Typography fontWeight="600" sx={{ wordBreak: "break-all" }}>
                  {walletData.address}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                fullWidth
                sx={{ mt: 2, borderColor: "primary.main", color: "primary.main" }}
              >
                Copiar Dirección
              </Button>
            </Paper>

            {/* QR */}
            <Paper
              sx={{
                p: 4,
                flex: "1 1 350px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="h5" fontWeight="600">
                Recibir Bitcoin
              </Typography>

              

              <Typography sx={{ wordBreak: "break-all", mt: 1 }}>
                {walletData.address}
              </Typography>
            </Paper>
          </Box>

          {/* Transacciones recientes */}
          <Typography
            variant="h5"
            sx={{ color: "primary.main", fontWeight: 600, mb: 3 }}
          >
            Transacciones Recientes
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {transactions.map((t, index) => (
              <Paper
                key={index}
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  borderLeft: "6px solid",
                  borderColor: t.type === "receive" ? "success.main" : "error.main",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: t.type === "receive" ? "success.main" : "error.main",
                  }}
                >
                  {t.type === "receive" ? "↓" : "↑"}
                </Avatar>

                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight="600">{t.amount}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {t.usd} — {t.date}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
