import NextLink from 'next/link'
import { ShopLayout } from '@/components/layouts'
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from '@mui/material'

import { CartList  } from '@/components/cart'
import OrderSummary from '@/components/cart/OrderSummary'

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden' pageDescription='Resumen de la orden'>
      <Typography component='h1' variant='h1'>Resumen de la orden</Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          {/* CartList */}
          <CartList/> 
        </Grid>
        <Grid item xs={12 }sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 Productos)</Typography>
              <Divider sx={{my:2}} />
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <Typography>Ehleh Gante</Typography>
              <Typography>Carrera 2</Typography>
              <Typography>The Kids</Typography>
              <Typography>+57 305 856 9545</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref legacyBehavior>
                  <Link underline='always'>
                    Editar
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />
              <Button color='secondary' className='curcular-btn' fullWidth>
                Confirmar Orden
              </Button>
            </CardContent>             
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage