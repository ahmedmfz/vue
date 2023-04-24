import { createRouter, createWebHistory } from 'vue-router';
import PostIndexComponent from '../components/posts/PostIndex.vue';
import PostCreateComponent from '../components/posts/PostCreate.vue';
import PostEditComponent from '../components/posts/PostEdit.vue';
import CategoryIndexComponent from '../components/categories/CategoryIndex.vue';
import HomeComponent from '../components/Index.vue';

const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: 'site.index',
        meta: { title: 'Home' }
    }, {
        path: '/posts',
        component: PostIndexComponent,
        name: 'posts.index',
        meta: { title: 'All Posts' }
    },
    {
        path: '/posts/create',
        component: PostCreateComponent,
        name: 'posts.create',
        meta: { title: 'Create Posts' }
    },
    {
        path: '/posts/edit/:id',
        component: PostEditComponent,
        name: 'posts.edit',
        meta: { title: 'Edit Post' }
    },{
        path: '/categories',
        component: CategoryIndexComponent,
        name: 'categories.index',
        meta: { title: 'All Categories' }
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});