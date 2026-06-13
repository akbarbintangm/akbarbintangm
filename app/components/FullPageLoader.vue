<script setup lang="ts">
const { isPageLoading } = usePageLoading()
</script>

<template>
  <div
    v-if="isPageLoading"
    class="modal d-block bg-body"
    role="status"
    aria-live="polite"
    aria-label="Loading page"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 bg-transparent shadow-none">
        <div class="modal-body text-center">
          <div class="spinner-border text-primary mb-3" aria-hidden="true"></div>
          <p class="mb-0 text-body-secondary">Loading page...</p>
        </div>
      </div>
    </div>
  </div>
</template>
