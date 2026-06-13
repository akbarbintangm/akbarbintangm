<script setup lang="ts">
const profileData = useProfileData()
</script>

<template>
  <div class="min-vh-100 d-flex flex-column bg-body text-body">
    <NuxtRouteAnnouncer />
    <FullPageLoader />
    <AppNavbar :profile="profileData.identity" />

    <main class="flex-grow-1">
      <NuxtPage />
    </main>

    <AppFooter :profile="profileData.identity" :contacts="profileData.identity.contacts" />
  </div>
</template>
