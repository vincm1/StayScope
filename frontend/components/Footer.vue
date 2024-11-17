<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                &copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
    background-color: #f5f5f5;
    padding: 1rem 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
}
</style>