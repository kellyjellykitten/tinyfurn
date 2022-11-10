<script setup>
import { ref, onMounted } from 'vue'
import { useToast } from "primevue/usetoast"
import ProductService from '../ProductService'


const products = ref(null);
const productService = ref(new ProductService());
const responsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '600px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1
    }
]);

onMounted(() => {
    productService.value.getProductsSmall().then(data => products.value = data.slice(0,9));
})

const toast = useToast()
const addFavorite = () => {
    console.log('Clicked favorite')
    toast.add({severity:'success', summary: 'Added to Favorites', life: 5000})
}

const addCart = () => {
    console.log('Clicked add to cart')
    toast.add({severity:'success', summary:'Added to cart', life: 5000})
}

</script>

<template>
    <div>
        <div class="card">
            <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                <template #header>
                    <h2 class="feature">Featured Products</h2>
                </template>
                <template #item="slotProps">
                    <div class="product-item">
                        <div class="product-item-content">
                            <div class="mb-3">
                                <img :src="'assets/' + slotProps.data.image" :alt="slotProps.data.name" class="product-image" />
                            </div>
                            <div>
                                <h3 class="mb-1">{{slotProps.data.name}}</h3>
                                <h4 class="mt-0 mb-3">${{slotProps.data.price}}</h4>
                                <h5>{{slotProps.data.description}}</h5>
                                <div class="car-buttons mt-5">
                                    <Toast />
                                    <Button icon="pi pi-heart" @click="addFavorite" title="Favorite" class="p-button-danger p-button-outlined p-button p-button-rounded mr-2" />
                                    <Button icon="pi pi-cart-plus" @click="addCart" title="Add to Cart" class="p-button-success p-button-outlined p-button-rounded mr-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product-item {
    .product-item-content {
        border: 1px solid var(--surface-border);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
    }
    .product-image {
        width: 55%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
}
.feature {
    text-align: center;
}
</style>