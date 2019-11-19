<template>
  <section>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
