<template>

  
    <div class="row my-3">
        <h2>search</h2>
        <div class="col-3">
            <input type="text" v-model="title" class="form-control" placeholder="search title">
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table bg-dark text-light p-2">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="category in categories.data">
                        <th scope="row">{{ category.id }}</th>
                        <td>{{ category.name }}</td>
                        <td>
                            <button class="btn btn-warning btn-sm mx-2" :id="category.id" >Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="d-flex justify-content-center">
                <pagination
                    :data="categories"
                    @pagination-change-page="page => getCategories(page , title)"
                />
            </div>
            
        </div>
    </div>
    
</template>

<script >
  
    import { onMounted ,ref , watch} from 'vue';
    import useCategories from '../../composeables/allCategories';
    export default {
        setup() {
            const title  = ref('');
            const {categories , getCategories} = useCategories();
            onMounted(getCategories);
            watch(title , (current , previous)=>{
                getCategories(1,current);
            }) 
            return {categories , getCategories ,title}
        }
    }

</script>