<script setup>
import { ref } from 'vue'

const items = ref([
    {
        label:'Home',
        icon:'pi pi-fw pi-home',
        to: '/'
    },
    {
        label:'About',
        icon:'pi pi-fw pi-info-circle',
        to: '/about'
    },
    {
        label:'Categories',
        icon:'pi pi-fw pi-list',
        items:[
        {
            label:'Chairs',
            icon:'pi pi-fw pi-tag',
            items:[
                {
                    label:'Stools'
                },
                {
                    label:'Office chairs'
                },
                {
                    label:'Bean bags'
                },
                {
                    label:'Recliners'
                }
            ]
        },
        {
            label:'Sofas',
            icon:'pi pi-fw pi-truck'
        },
        {
            label:'Beds',
            icon:'pi pi-fw pi-moon'
        },
        {
            label:'Tables',
            icon:'pi pi-fw pi-table',
            items:[
                {
                    label:'Kitchen'
                },
                {
                    label:'Nighstands'
                },
                {
                    label:'Desks'
                },
                {
                    label:'Game tables'
                }
            ]
        },
        {
            label:'Bookcases',
            icon:'pi pi-fw pi-book'
        },
        {
            label:'Outdoor',
            icon:'pi pi-fw pi-sun'
        }
        ]
    },
    {
        label:'Sales',
        icon:'pi pi-fw pi-dollar'
    },
    {
        label:'Cart',
        icon:'pi pi-fw pi-shopping-cart'
    },
    {
        label:'Checkout',
        icon:'pi pi-fw pi-sign-out'
    },
    ]);
</script>

<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="mr-2">
            </template>
            <template #end>
                <span class="p-input-icon-left">
                    <i class="pi pi-search" />
                    <InputText placeholder="Search" type="text" />
                </span>
            </template>
        </Menubar>
    </div>
</template>