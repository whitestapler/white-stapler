<template>
    <nav>
        <div class="home"><router-link to="/">Home</router-link></div>
        <div class="nav-right">
            <div class="menu-item"><router-link to="/lore">Lore</router-link></div>
            <div class="menu-item"><router-link to="/projects">All Projects</router-link></div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'navbar'
}
</script>

<style>
nav {
    display: flex;
    overflow: hidden;
    justify-content: space-around;
}

nav .home {
    color: white;
    padding: 10px 20px;
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
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
    float: left;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}

nav .nav-right {
    float: right;
    text-align: right;
}
</style>