<template>

    <div class="row">
        <div class="col-10 mx-auto">
           <form @submit.prevent="createPost(post)">

                <div class="form-group my-2">
                    <label  class="my-1">Title</label>
                    <input v-model="post.title" type="text" class="form-control" placeholder="title">
                    <div class="text-danger mt-1">
                        <div v-for="message in validationErrors?.title">
                            {{ message}}
                        </div>
                    </div>
                </div>

                 <div class="form-group my-2">
                    <label for="" class="my-1">Content</label>
                    <input v-model="post.content" type="text" class="form-control" placeholder="content">
                    <div class="text-danger mt-1">
                        <div v-for="message in validationErrors?.content">
                            {{ message}}
                        </div>
                    </div>
                </div>

                <div class="form-group my-2">
                    <label for="" class="my-1">Category</label>
                    <select v-model="post.category_id" class="form-control">
                        <option value=""> select categories</option>
                        <option v-for="category in categories" :value="category.id" >{{ category.name }}}</option>
                    </select>
                    <div class="text-danger mt-1">
                        <div v-for="message in validationErrors?.category_id">
                            {{ message}}
                        </div>
                    </div>
                </div>

                <div class="form-group my-2">
                    <label for="" class="my-1">Image</label>
                    <input @change="post.image = $event.target.files[0]" type="file" class="form-control" ref="fileInput" @input="pickFile">
                     <div class="text-danger mt-1">
                        <div v-for="message in validationErrors?.image">
                            {{ message}}
                        </div>
                    </div>
                </div>

            <div class="row">
                <div class="form-group my-2">
                   <button class="btn btn-primary" v-show="isLoading == false"> Save </button>
                   <button class="btn btn-primary" type="button" v-show="isLoading">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                </div>
                <div
                    class="imagePreviewWrapper"
                    :style="{ 'background-image': `url(${previewImage})` }"
                    @click="selectImage">
                </div>
            </div>
                

           </form>
        </div>
    </div>
    
</template>

<script >

import { onMounted, reactive, ref } from 'vue';
import useCategories from '../../composeables/categories';
import  usePosts     from  '../../composeables/posts';
export default {
    setup() {
        const previewImage = ref(null);
        const post = reactive({
            title : '',
            content : '',
            category_id : ''
        });
        const { categories, getCategories } = useCategories();
        const { createPost , validationErrors , isLoading} = usePosts();
        onMounted(() => {
            getCategories()
        });
        return { categories , createPost ,post , validationErrors , isLoading , previewImage}
    },
    methods: {
      selectImage () {
        this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files

        if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
            this.previewImage = e.target.result
            
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
        }
      }
  }
}

</script>

<style scoped lang="scss">
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>