<script lang="ts">
	let value:number;
	let option:string;

	function isPrime(value:number){
		for(let i = 2, s = Math.sqrt(value); i <= s; i++)
		if(value % i === 0) return false; 
		return value > 1;
	}
	function isFibonacci(value:number){
		if (isSquare(5*(value*value)-4) || isSquare(5*(value*value)+4)) {
       		return true;
    	} else { 
			return false; 
		}
	}

	function isSquare(value:number){
		let s = Math.floor(Math.sqrt(value));
    	return (s * s == value);
	}

	function getResult(option: string, value:number){
		switch (option){
			case "isPrime": {
				return isPrime(value);
			}
			case "isFibonacci": {
				return isFibonacci(value);
			}
		}
	}
	$:{
		if (Number.isNaN(value)) {
			value = 1;
		} else if (value<0) {
			value = 1;
		} else {
			value = Math.round(value);
		}
	}
</script>
	

<div class="scroll" style="display: flex;">
	<div style="width: 200px;">
		<input type="number" style="width: 200px;" placeholder="Number input" bind:value={value}>
	</div>
	<div style="min-width: 100px;width:100%;">
		<select bind:value={option}>
		  <option>isPrime</option>
		  <option>isFibonacci</option>
		</select>
	</div>
	<div style="min-width:300px;max-width: 300px;">
		{#if value != null}
			Result : {getResult(option,value)}
		{:else}
			Result
		{/if}
	</div>
</div>




<style>
	.scroll {
		height: 100%;
		overflow-x: auto;
	}
</style>