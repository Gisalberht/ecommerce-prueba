import { ShopLayout } from "@/components/layouts";
import { ProductSlidesShow } from "@/components/products";
import { SizeSelector } from "@/components/products/SizeSelector";
import { ItemCounter } from "@/components/ui";
import { initialData } from "@/database/products";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";

const product = initialData.products[0]

export const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlidesShow images={product.images} />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* titles */}
            <Typography variant="h1" component="h1">{product.title}</Typography>
            <Typography variant="subtitle1" component="h2">{`$${product.price}`}</Typography>
            {/* Amounts */}
            <Box sx={{my: 2}}>
              <Typography variant="subtitle2">Cantidad</Typography>
              {/* itemcounter */}
              <ItemCounter />
              <SizeSelector sizes={product.sizes} />
            </Box>
            <Button color="secondary" className="circular-btn">
              Agregar a carrito
            </Button>
            {/* <Chip label='No hay disponibles' color='error' variant='outlined'/> */}
            {/* Descripcion */}
            <Box sx={{mt: 3}}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>    
  )
}

export default ProductPage