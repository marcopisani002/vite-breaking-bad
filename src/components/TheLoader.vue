<template>
    <div class="loader">
        <div class="text">{{ label }}</div>

    <img src="/loadersvg.svg" class="">

        <div class="text">Loading...</div>
    </div>
</template>

<script>
export default {
    name: 'TheLoader',
    props: ['label'],
};
</script>


<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgb(4, 24, 80);
    color: white;
}

img {
    width: 64px;
    margin: 1rem 0;
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.2);
    }
}

.text {
    text-transform: uppercase;
    letter-spacing: 2px;
}
</style>
