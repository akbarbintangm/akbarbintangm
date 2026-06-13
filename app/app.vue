<script setup lang="ts">
const profileData = useProfileData()
</script>

<template>
  <div class="min-vh-100 d-flex flex-column bg-body text-body">
    <NuxtRouteAnnouncer />
    <FullPageLoader />
    <AppNavbar :profile="profileData.identity" />
    <AppSidebar :profile="profileData.identity" :contacts="profileData.identity.contacts" />

    <main class="flex-grow-1">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>

    <AppFooter :profile="profileData.identity" :contacts="profileData.identity.contacts" />
    <FloatingActions :chat="profileData.identity.chat" />
  </div>
</template>
