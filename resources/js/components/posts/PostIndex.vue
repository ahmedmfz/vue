<template>

    <div class="row my-3">
        <h2>search</h2>
        <div class="col-3">
            <input type="text" v-model="title" class="form-control" placeholder="search title">
        </div>
        <div class="col-3">
            <select v-model="selectedCategory" class="form-control">
                <option value=""> select categories</option>
                <option v-for="category in categories"  :value="category.id" >{{ category.name }}}</option>
            </select>
        </div>
        <div class="col-6 text-end">
             <router-link :to="{ name : 'posts.create'}" class="btn btn-primary"> Add Post</router-link>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table bg-dark text-light p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Content</th>
                        <th scope="col"> Image </th>
                        <th scope="col"> Created At </th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="post in posts.data">
                        <th scope="row">{{ post.id }}</th>
                        <td>{{ post.title }}</td>
                        <td>{{ post.category }}</td>
                        <td>{{ post.content }}</td>
                        <td> <img :src="post.image" :alt="post.title + 'image'" style="width: 50px;"> </td>
                        <td>{{ post.created_at }}</td>
                        <td>
                            <router-link :to="{ name : 'posts.edit' , params : {id: post.id}  }" class="btn btn-warning btn-sm" > Edit</router-link>
                            <a @click.prevent="deletePost(post.id)" class="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="d-flex justify-content-center">
                <pagination
                    :data="posts"
                    @pagination-change-page="page => getPosts(page , title ,selectedCategory )"
                />
            </div>
            
        </div>
    </div>
    
</template>

<script >
  
    import { onMounted ,ref , watch} from 'vue';
    import usePosts from '../../composeables/posts';
    import useCategories from '../../composeables/categories';
    export default {
        setup() {
            const selectedCategory  = ref('');
            const title  = ref('');
            const {posts , getPosts , deletePost} = usePosts();
            const {categories , getCategories} = useCategories();
            onMounted(()=>{
                getPosts(),
                getCategories()
                });
            watch(title , (current , previous)=>{
                getPosts(1,current);
            }) 
            watch(selectedCategory , (current , previous)=>{
                getPosts(1, title.value ,  current);
            })    
               
            return {posts , getPosts , categories , deletePost,selectedCategory , title}
        }
    }

</script>