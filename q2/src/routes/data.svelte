<script lang="ts" context="module">
    import axios from 'axios';
    import type {Data} from 'src/model/category';
    const baseUrl = 'https://api.publicapis.org/categories';
    
    export async function getData(){
        var response = (await axios.get<Data>(baseUrl)).data;
        return response;
    }
</script>