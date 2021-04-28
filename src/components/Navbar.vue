<template>
    <nav>
        <div class="home"><router-link to="/">Home</router-link></div>
        <div class="nav-right">
            <Dropdown title="-" />
        </div>
    </nav>
</template>

<script>
import Dropdown from './Project_Dropdown';

export default {
    name: 'navbar',
    components: {
        Dropdown
}
}
</script>

<style>
nav {
    display: flex;
    justify-content: space-around;
}

nav .home {
    color: white;
    padding: 20px 20px;
    position: relative;
    text-align: right;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;

}

nav .home a {
    color: inherit;
    text-decoration: none;
}

nav .menu-item {
    color: white;
    padding: 20px 20px;
    position: relative;
    text-align: center;
    display: flex;
    border-bottom: 2px solid transparent;
    transition: 0.4s;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}

nav .menu-item.active,
nav .menu-item:hover {
    background-color: grey;
}

</style>