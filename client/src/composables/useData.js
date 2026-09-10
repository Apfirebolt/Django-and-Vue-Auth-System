// useData.js - (Modified to allow single fetch)

import { ref, readonly } from 'vue';
import axios from 'axios';

// **Shared (Singleton) State**
const data = ref(null);
const loading = ref(false);
const error = ref(null);

export function useData() {
    
    // The key logic: only fetch if 'data' is null and not already loading
    function fetchData() {
        if (data.value !== null || loading.value === true) {
            console.log('Data already fetched or currently loading. Skipping API call.');
            return;
        }

        loading.value = true;
        error.value = null;

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            data.value = response.data;
        })
        .catch(err => {
            error.value = err;
        })
        .finally(() => {
            loading.value = false;
        });
    }

    return { 
        data: readonly(data), 
        loading: readonly(loading), 
        error: readonly(error), 
        fetchData 
    };
}