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
            to: '/chairs',
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
            icon:'pi pi-fw pi-truck',
            to: '/sofas'
        },
        {
            label:'Beds',
            icon:'pi pi-fw pi-moon',
            to: '/beds'
        },
        {
            label:'Tables',
            icon:'pi pi-fw pi-table',
            to: '/tables',
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
            icon:'pi pi-fw pi-book',
            to: '/bookcases'
        },
        {
            label:'Outdoor',
            icon:'pi pi-fw pi-sun',
            to: '/outdoor'
        }
        ]
    },
    {
        label:'Sales',
        icon:'pi pi-fw pi-dollar',
        to: '/sales'
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
                <img alt="logo" src="../assets/textlogo.png" height="50" class="mr-2">
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