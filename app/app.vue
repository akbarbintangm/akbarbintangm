<script setup lang="ts">
const profileData = useProfileData()
const pageKey = (route: { fullPath: string }) => route.fullPath
</script>

<template>
  <div class="app-shell min-vh-100 d-flex flex-column bg-body text-body">
    <NuxtRouteAnnouncer />
    <FullPageLoader />
    <AppNavbar :profile="profileData.identity" />
    <AppSidebar :profile="profileData.identity" :contacts="profileData.identity.contacts" />

    <main class="flex-grow-1">
      <NuxtPage :page-key="pageKey" :transition="{ name: 'page', mode: 'out-in' }" />
    </main>

    <AppFooter :profile="profileData.identity" :contacts="profileData.identity.contacts" />
    <FloatingActions :chat="profileData.identity.chat" />
  </div>
</template>
