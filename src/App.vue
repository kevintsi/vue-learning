<!-- 
  
  TODOLIST TO LEARN BASICS OF VUE JS

  - Add new todo
  - Hide/Show completed using computed function
  - Passing props to child component


-->

<script>
import TodoItem from "./components/TodoItem.vue"

export default {
  components : {
    TodoItem
  },
  data() {
    console.log("Data")
    return {
      todo : "",
      todos : [{
        id : 1,
        name : "Todo 1",
        isCompleted : false
      },{
        id : 2,
        name : "Todo 2",
        isCompleted : true
      },{
        id : 3,
        name : "Todo 3",
        isCompleted : false
      },{
        id : 4,
        name : "Todo 4",
        isCompleted : false
      },{
        id : 5,
        name : "Todo 5",
        isCompleted : true
      },{
        id : 6,
        name : "Todo 6",
        isCompleted : false
      },{
        id : 7,
        name : "Todo 7",
        isCompleted : false
      }],
      hideCompleted : false
    }
  },
  computed : {
    getTodos(){
      return this.hideCompleted ? this.todos.filter(todo => !todo.isCompleted) : this.todos
    },
    hasOneCompleted() {
      return this.todos.every((todo) => !todo.isCompleted)
    }
  },
  methods: {
    addNewTodo(){
      if(this.todo.trim().length > 0 ){
        this.todos.push({
        id : this.todos.length + 1,
        name : this.todo,
        isCompleted : false
      })
      this.todo = ""
      }
    },

    onHandleCheck(id){
      this.todos = this.todos.map((todo) => {
        if(todo.id == id){
          todo.isCompleted = !todo.isCompleted;
        }
        return todo
      })
    },
    onHideCompleted(){
      this.hideCompleted = !this.hideCompleted
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Todo list with</h1>
      <img src="./assets/images/vue-3-colorful.png" alt="Cute Vue.js logo by @icarusgk"/>
    </div>
    <div class="main">
      <div>
        <form @submit.prevent="addNewTodo()">
        <input class="todo-input" placeholder="Write task to add to todolist..." v-model="todo"/>
        <button class="todo-btn" type="submit">Add</button>
        <button :disabled="hasOneCompleted" @click="onHideCompleted">{{ this.hideCompleted ? "Show completed" :  "Hide completed"}}</button>
      </form>
      </div>
      <div class="todos">
        <TodoItem v-for="todo of getTodos" :key="todo.id" :todo="todo" :onHandleCheck="onHandleCheck"/>
        <div v-if="getTodos.length == 0">No task to do</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container{
    width : 25%;
    height: 100%;
    display : flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    height: 10vh
  }
  .main{
    display : flex;
    flex-direction: column;
  }

  .todos {
    display: flex;
    flex-direction: column;
    align-items : flex-start;
    padding-top: 10px
  }

  .todo-input{

  }

</style>