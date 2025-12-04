import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      color="primary"
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          Crypto Wallet
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
