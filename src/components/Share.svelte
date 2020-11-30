<script>
    import {
        Email,
        HackerNews,
        Reddit,
        LinkedIn,
        Pinterest,
        Telegram,
        Tumblr,
        Vk,
        WhatsApp,
        Xing,
        Facebook,
        Twitter,
    } from "svelte-share-buttons-component";
    export let url, title, desc;
</script>

<style>
    @media only screen and (min-width: 751px) {
        :global(.ssbc-button__link) {
            float: right;
        }
    }
</style>

<Email subject={title} body="{desc} {url}" />
<HackerNews class="share-button" {title} {url} />
<Reddit class="share-button" {title} {url} />
<LinkedIn class="share-button" {url} />
<!-- <Tumblr class="share-button" {title} {url} caption={title} /> -->
<!-- <Pinterest class="share-button" {url} description={title} /> -->
<!-- <Telegram class="share-button" text={title} {url} /> -->
<!-- <Vk class="share-button" {title} {url} /> -->
<!-- <WhatsApp class="share-button" text="{title} {url}" /> -->
<!-- <Xing class="share-button" {title} {url} /> -->
<Facebook class="share-button" {url} />
<Twitter class="share-button" text={title} {url} />
