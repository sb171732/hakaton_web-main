<template>
    <div class="">
      
          <h1>Список меню</h1> <el-button @click="drawer2=true">Добавить меню</el-button>
          

         <table class="w3-table">
            <tr v-for="m in Menu" :key="m.id">
                <td>{{ m.date }}</td> 
                
                <td><el-button @click="open(m.id,m.date)"><i class="el-icon-plus"></i></el-button></td>
                <!-- <td><el-button @click="del(m.id)"><i class="el-icon-delete"></i></el-button></td> -->
            </tr>
         </table>
 
          <el-drawer
        size="50%"
            title="I am the title"
            :visible.sync="drawer"
            :with-header="false">
            <span></span>
            <div class="w3-padding">
                <el-input width="80%"  class="w3-margin" v-model="new_submenu.name" placeholder="Название "></el-input>
                <el-input class="w3-margin" v-model="new_submenu.img_url" placeholder="Описание" ></el-input>
                <el-input class="w3-margin" v-model="new_submenu.description" placeholder="Описание" type="textarea"></el-input>
                <el-input class="w3-margin" v-model="new_submenu.type" placeholder="Тип еды"></el-input>
                <el-input class="w3-margin" v-model="new_submenu.price" placeholder="цена" type="number"></el-input>
                <el-button @click="add()">Добавить</el-button>
            </div>  


        </el-drawer>
        <el-drawer
  title="Выберите дату"
  :visible.sync="drawer2"
  direction="ltr"
  >
  <span></span>
  <el-date-picker
            v-model="sel_date"
            format="dd.MM.yyyy"
            type="date"
            placeholder="Выбрать">
        </el-date-picker>
        <el-button class="w3-margin-top" type="success" @click="add_menu()">Добавить новое меню</el-button>
</el-drawer>
    </div>
</template>

<script>
import {store} from '../store'
export default {
  data(){
    return{
       drawer:false,
       drawer2:false,
       cur_id:'',
       sel_date:'',
       new_submenu:{
          date:'',
          img_url:'',
          description:'',
          name:'',
          type:'',
          price:''
       }
    }
  },
  computed:{
   
    Menu(){
      return store.state.menu
    }    ,
    
  },
  methods:{
    formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [day, month, year].join('.');
        },
    open(id,d){
      this.new_submenu.date = d
      this.cur_id = id
      this.drawer = true
    },
    add(){
       this.new_submenu.price = parseInt(this.new_submenu.price)
       store.dispatch('addSubMenu', {id:this.cur_id,payload:this.new_submenu} )
    },
    add_menu(){
      store.dispatch('addMenu',{ date: this.formatDate(this.sel_date) })
    },
    del(id){
      store.dispatch('delMenu',id)
    }
  },
 created(){
   const curr_user = store.state.user
   console.log(curr_user)
   if (curr_user!=null) 
      if(curr_user.emailVerified!=true) {
                this.$router.push('/verif')
              } 
        
  },
  $route (to, from){
        console.log(to)
        console.log(from)
    }
}
</script>

<style scoped>
  h1 {
    text-align: left;
  }
  li {
    list-style-type: none;
    text-align: left;
  }
  .provadd {
    color: black;
  }
</style>