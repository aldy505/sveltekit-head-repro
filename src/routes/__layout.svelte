<script lang="ts" context="module">
  import '$lib/locale';
</script>

<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <!-- <meta property="og:site_name" content={$_('meta.title')} /> -->
</svelte:head>

<slot />