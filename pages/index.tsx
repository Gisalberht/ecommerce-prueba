
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';

export default function Home() {
  return (
  <ShopLayout title={'Ecommerce Sena - Home'} pageDescription={'Encuentra tus mejores articulos para tu coleccion de Piedras'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Articulos</Typography>
  </ShopLayout>
  )
}