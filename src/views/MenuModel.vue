<template>
  <div class="">
   <el-button class="w3-margin" @click="drawer=true" type="text">Добавить</el-button>
   <ul v-for="m in menu_model" :key="m.id">
                <el-card style="width: 500px;height: 200px;" :body-style="{ padding: '0px' }">
                    <!-- <img height="100px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"> -->
                   <el-row>
                     <el-col :span="12" class="">
                     <img :src="m.img_url" width="100%">
                     
                    </el-col>
                     <el-col :span="12">
                        <div style="padding: 14px;">
                        <span>{{ m.name }}</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ m.type }}</time>
                        <el-button class="w3-margin-left" type="text" >{{m.price}} руб</el-button>
                        </div>
                        <el-button @click="del(m.id)"><i class="el-icon-delete"></i></el-button>
                    </div>
                    </el-col>
                   </el-row>
                   
                    
                    </el-card>
            </ul>
            <el-drawer
        size="50%"
            title="I am the title"
            :visible.sync="drawer"
            :with-header="false">
            <span></span>
            <div class="w3-padding">
                <el-input width="80%"  class="w3-margin" v-model="new_menu_model.name" placeholder="Название "></el-input>
                <el-input class="w3-margin" v-model="new_menu_model.img_url" placeholder="Ссылка на картинку" ></el-input>
                <el-input class="w3-margin" v-model="new_menu_model.description" placeholder="Описание" type="textarea"></el-input>
                <el-input class="w3-margin" v-model="new_menu_model.type" placeholder="Тип еды"></el-input>
                <el-input class="w3-margin" v-model="new_menu_model.price" placeholder="цена" type="number"></el-input>
                <el-button @click="add()">Добавить</el-button>
            </div>  


        </el-drawer>
  </div>
</template>

<script>
import { store } from '../store';
export default {
   data(){
      return{
        drawer:false,
        new_menu_model:{
          img_url:'',
          description:'',
          name:'',
          type:'',
          price:''
       }
      }
   },
   computed:{
    menu_model(){
        return store.state.menu_model
    }
   },
   methods:{
      del(id){
         if (store.dispatch('delMenuModel',id)){
            this.$notify.error({
          title: 'Error',
          message: 'Удалено!'
        });
         }
         
      },
      add(){
       this.new_menu_model.price = parseInt(this.new_menu_model.price)
       if (store.dispatch('addMenuModel', this.new_menu_model )){
         this.$notify({
          title: 'Success',
          message: 'Добавлено новое блюдо!',
          type: 'success'
        });
       }
       
    },
   }
}
</script>

<style>

</style>