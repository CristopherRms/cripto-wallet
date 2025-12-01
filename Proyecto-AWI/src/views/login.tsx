import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Modal,
} from "@mui/material";
import { useState } from "react";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          borderRadius: 3,
          backgroundColor: "background.default",
        }}
      >
        {/* Título */}
        <Typography
          variant="h4"
          textAlign="center"
          sx={{
            mb: 3,
            color: "primary.main",
            fontWeight: 700,
          }}
        >
          CryptoWallet
        </Typography>

        {/* Subtítulo */}
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ mb: 4, color: "text.secondary" }}
        >
          Inicia sesión para continuar
        </Typography>

        {/* Usuario */}
        <TextField
          fullWidth
          label="Correo o usuario"
          variant="outlined"
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "info.main" },
              "&:hover fieldset": { borderColor: "primary.main" },
            },
          }}
        />

        {/* Contraseña */}
        <TextField
          fullWidth
          type="password"
          label="Contraseña"
          variant="outlined"
          sx={{
            mb: 4,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "info.main" },
              "&:hover fieldset": { borderColor: "primary.main" },
            },
          }}
        />

        {/* Botón de login */}
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#002237" },
          }}
        >
          Iniciar Sesión
        </Button>

        {/* Link inferior */}
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            ¿No tienes cuenta?{" "}
            <span style={{ color: "#C1121F", cursor: "pointer" }} onClick={handleOpenModal}>
              Regístrate
            </span>
          </Typography>
        </Box>
      </Paper>

      {/* Modal de Registro */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            p: 4,
            width: "90%",
            maxWidth: 400,
            borderRadius: 3,
            backgroundColor: "background.default",
          }}
        >
          <Typography
            variant="h5"
            textAlign="center"
            sx={{
              mb: 3,
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            Crear Cuenta
          </Typography>

          {/* Email */}
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "info.main" },
                "&:hover fieldset": { borderColor: "primary.main" },
              },
            }}
          />

          {/* Usuario */}
          <TextField
            fullWidth
            label="Usuario"
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "info.main" },
                "&:hover fieldset": { borderColor: "primary.main" },
              },
            }}
          />

          {/* Contraseña */}
          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "info.main" },
                "&:hover fieldset": { borderColor: "primary.main" },
              },
            }}
          />

          {/* Confirmar Contraseña */}
          <TextField
            fullWidth
            type="password"
            label="Confirmar contraseña"
            variant="outlined"
            sx={{
              mb: 4,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "info.main" },
                "&:hover fieldset": { borderColor: "primary.main" },
              },
            }}
          />

          {/* Botones */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={handleCloseModal}
              sx={{
                borderColor: "primary.main",
                color: "primary.main",
                py: 1.2,
                borderRadius: 2,
                fontWeight: 600,
              }}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                py: 1.2,
                borderRadius: 2,
                fontWeight: 600,
                "&:hover": { backgroundColor: "#002237" },
              }}
            >
              Registrarse
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Container>
  );
}
