<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('meta.title')} - {$_('meta.tagline')}</title>
  <meta name="title" content={$_('meta.title') + '-' + $_('meta.tagline')} />
  <meta name="twitter:title" content={$_('meta.title') + '-' + $_('meta.tagline')} />
  <meta property="og:title" content={$_('meta.title') + '-' + $_('meta.tagline')} />
  <link rel="canonical" href="https://example.com/" />
  <meta name="description" content="Dad jokes are the best" />
  <meta name="twitter:description" content="Dad jokes are the best" />
  <meta property="og:description" content="Dad jokes are the best" />
</svelte:head>

<h1>Hi there!</h1>
<p>This is index page</p>