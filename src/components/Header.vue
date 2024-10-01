<template>
    <!-- Header -->
    <q-header>
        <q-toolbar class="text-dark bg-white">
            <q-toolbar-title class="flex items-center">
                <i class="ri-movie-2-fill" style="font-size: 40px"></i>
                <div class="text-h6 q-pl-lg">Movies</div>
            </q-toolbar-title>

            <!-- Tabs visible only on larger screens -->
            <q-tabs class="tabs-desktop">
                <q-tab>Home</q-tab>
                <q-tab>Category</q-tab>
                <q-tab>Shop</q-tab>
                <q-tab>Cinema</q-tab>
            </q-tabs>

            <!-- Menu button for mobile view to toggle the drawer -->
            <q-btn flat rounded icon="menu" class="menu-mobile" @click="drawer = !drawer"></q-btn>
        </q-toolbar>
    </q-header>

    <!-- Drawer for mobile view -->
    <q-drawer v-model="drawer" side="left" class="drawer-mobile" width="250">
        <q-list>
            <q-item clickable v-ripple>
                <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section>Category</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section>Shop</q-item-section>
            </q-item>
            <q-item clickable v-ripple>
                <q-item-section>Cinema</q-item-section>
            </q-item>
        </q-list>
    </q-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
</script>

<style scoped>
/* Custom CSS to handle visibility */
.tabs-desktop {
    display: none;
}

.menu-mobile {
    display: inline-block;
}

.drawer-mobile {
    display: inline-block;
}

/* Media query for medium and larger screens */
@media (min-width: 768px) {
    .tabs-desktop {
        display: inline-block;
    }

    .menu-mobile,
    .drawer-mobile {
        display: none;
    }
}
</style>
