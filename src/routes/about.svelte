<script lang="ts">
  import { _ } from 'svelte-i18n';
</script>

<svelte:head>
  <title>{$_('meta.title')} - {$_('meta.tagline')}</title>
  <meta name="title" content={$_('meta.title') + '-' + $_('meta.tagline')} />
  <meta name="twitter:title" content={$_('meta.title') + '-' + $_('meta.tagline')} />
  <meta property="og:title" content={$_('meta.title') + '-' + $_('meta.tagline')} />
  <link rel="canonical" href="https://example.com/about" />
  <meta name="description" content="This should be the about page" />
  <meta name="twitter:description" content="This should be the about page" />
  <meta property="og:description" content="This should be the about page" />
</svelte:head>

<h1>Hi there!</h1>
<p>This is about page</p>