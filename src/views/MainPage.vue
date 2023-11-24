<template>
    <div class="main">
        <!-- <ul v-for="m in Menu" :key="m.id">
            <li class="product-list">
                <div class="product">
                    <h1>{{ m.name }}</h1>
                    <p>{{ m.description }}</p>
                    <p>{{ m.price }}р</p>
                </div>
            </li>
        </ul> -->
        <div>
            <ul v-for="m in Menu" :key="m.id">
                <li id="product-list">
                    {{ m.name }} <br>
                    {{ m.description }} <br>
                    {{ m.price }}р
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
export default {
    data(){
        return{
        new_menu:{
          description:'',
          foodprovider_id:'',
          img_url:'',
          name:'',
          type:'',
          price:''
          }
        }
    },
    computed:{
    Menu(){
      return store.state.menu
    }
    }
}
</script>

<style scoped>
.product {
    display: grid;
    border: 5px solid green;
    width: 350px;
    height: 350px;
    list-style-type: none;
}
ul {
    display: grid;
    border: 5px solid green;
    width: 350px;
    height: 350px;
    list-style-type: none;
}
</style>