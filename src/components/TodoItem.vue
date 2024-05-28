<script>
export default {
    props : ["todo", "onHandleCheck"],
    // inject : ["message"],
    created : () => {
        console.log("Child component created")
    }
}    
</script>
<template>
    <!-- <div>Test {{ this.message }}</div> -->
    <div class="todo">
        <input type="checkbox" :checked="this.todo.isCompleted" @change="this.onHandleCheck(this.todo.id)"/>
        <label :class="this.todo.isCompleted ? 'completed':'not-completed' ">{{ this.todo.name }}</label>
    </div>
</template>
<style>
    .todo {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .completed {
        text-decoration: line-through;
    }
    
    .not-completed{
        text-decoration: none;
    }
</style>