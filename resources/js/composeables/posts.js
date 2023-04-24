import { ref , inject} from 'vue';
import { useRouter } from 'vue-router';

export default function usePosts() {

    const posts = ref({});
    const post = ref({});
    const route = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);
    const swal = inject('$swal');

    const getPosts = async function(page = 1, title = '', category = '') {
        axios.get('/api/post?page=' + page + '&title=' + title + '&category=' + category)
            .then(res => posts.value = res.data)
            .catch(error => console.log(error))
    }

    const getPost = async function(id) {
        axios.get('/api/post/' + id)
            .then(res => post.value = res.data.data)
            .catch(error => console.log(error))
    }

    const createPost = async function (post) {
        if (isLoading.value) { return }
        isLoading.value = true;
        validationErrors.value = {};

       let serializedFrom = new FormData();
        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedFrom.append(item , post[item])
            }
        }
        
        axios.post('/api/post', serializedFrom)
            .then(res => {
                route.push({ name: 'posts.index' });
              swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'post created successfully',
                    showConfirmButton: false,
                    timer: 1500
                });})
            .catch(error => {
                
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
                
            })
            .finally(() => {
                isLoading.value = false;
            })
    }

    const updatePost = async function (post) {
        if (isLoading.value) { return }
        isLoading.value = true;
        validationErrors.value = {};
        let serializedFrom = new FormData();
        
        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedFrom.append(item , post[item])
                serializedFrom.append('_method' , 'PUT')
            }
        }

        axios.post('/api/post/'+ post.id , serializedFrom)
            .then(res => {
                
                route.push({ name: 'posts.index' });
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'post updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
                
            })
            .finally(() => {
                isLoading.value = false;
            })
    }

    const deletePost = async function (id) {
       
        axios.delete('/api/post/'+ id)
            .then(res => {
                getPosts();
                route.push({ name: 'posts.index' });
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: 'post deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                swal({
                    position: 'top-end',
                    icon: 'error',
                    title: 'cannot delete this post',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return {
        posts,
        post,
        getPosts,
        getPost,
        createPost,
        updatePost,
        deletePost,
        validationErrors,
        isLoading
    }
    
}