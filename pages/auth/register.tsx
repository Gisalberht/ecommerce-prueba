import NextLink from 'next/link'
import AuthLayout from "@/components/layouts/AuthLayout"
import { Box, Button, Grid, TextField, Typography, Link } from "@mui/material"

const RegisterPage = () => {
  return (
    <AuthLayout title={"login"}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1">Crear cuenta</Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField label='Nombre completo' variant="filled" fullWidth/>
          </Grid>           
          <Grid item xs={12}>
            <TextField label='Correo' variant="filled" fullWidth/>
          </Grid>           
          <Grid item xs={12}>
            <TextField label='Contraseña' type="password" variant="filled" fullWidth/>
          </Grid> 

          <Grid item xs={12}>
            <Button color='secondary' className="circular-btn" size="large" fullWidth>
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='end'>
            <NextLink href='/auth/login' passHref legacyBehavior>
              <Link underline='always'>
                ¿Ya tienes cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage