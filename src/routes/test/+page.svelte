<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    const call = async() => {
        const res = await fetch(`/test`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=utf-8',
            }
        })
        const json = await res.text();
        console.log("JSON: ", json)
    }
</script>
<button on:click={call}>CLICK</button>
{#each data.json.message as j}
<h1>{j}</h1>
{/each}