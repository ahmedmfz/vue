import { ref } from 'vue';

export default function useCategories() {
    const categories = ref([]);
    const getCategories = async function(page = 1, title = '') {
        axios.get('/api/category?page=' + page + '&title=' + title)
            .then(res => categories.value = res.data)
            .catch(error => console.log(error))
    }
    return { categories, getCategories }
}