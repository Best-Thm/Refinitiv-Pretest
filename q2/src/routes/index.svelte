<script lang='ts'>
	import axios from 'axios';
	import type {Data} from 'src/model/category'
	import Table from '$lib/data_table.svelte'

	const baseUrl = 'https://api.publicapis.org/categories';
    let response;
	$: value = "";
    async function getData(){
        response = (await axios.get<Data>(baseUrl)).data;
    }

	response = getData();
	$: result = response.categories;

	function searchThis(inputString:string){
		if (inputString == "") {
			result = response.categories;
		} else {
			result = response.categories.filter(x => x.toLocaleLowerCase().includes(inputString));
		}
	}
</script>

<div class="container">
	<input class="input" 
		   type="text" 
		   placeholder="Number input" 
		   bind:value={value}
		   on:input={() => searchThis(value)}>
	<Table data={result}/> 
	<!-- {result} -->
</div>