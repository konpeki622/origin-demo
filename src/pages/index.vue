<template>
  <router-view />
  <div class="router-link">
    <div><router-link class="text-router-link" to="/login">{{ $t("userLogin") }}</router-link></div>
    <div><router-link class="text-router-link" to="/child">{{ $t("nestedRoutes") }}</router-link></div>
    <div><router-link class="text-router-link" to="/content">{{ $t("content") }}</router-link></div>
    <div><router-link class="text-router-link" to="/markdown">{{ $t("markdown") }}</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
