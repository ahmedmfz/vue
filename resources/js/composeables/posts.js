import { ref } from 'vue';

export default function usePosts() {
    const posts = ref({});
    const getPosts = async function(page = 1, title = '', category = '') {
        axios.get('api/post?page=' + page + '&title=' + title + '&category=' + category)
            .then(res => posts.value = res.data)
            .catch(error => console.log(error))
    }
    return { posts, getPosts }
}