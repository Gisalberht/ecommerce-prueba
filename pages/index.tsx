import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '@/components/products';

import { initialData } from '../database/products';


export default function Home() {
  return (
  <ShopLayout title={'Ecommerce Sena - Home'} pageDescription={'Encuentra tus mejores articulos para tu coleccion de Piedras'}>
    <Typography variant='h1' component='h1'>Tienda</Typography>
    <Typography variant='h2' sx={{mb: 1}}>Articulos</Typography>
    
    <ProductList products={initialData.products as any}/>
  </ShopLayout>
  )
}
