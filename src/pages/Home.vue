<script setup>
//
import { ref, computed } from 'vue'
//
const title = ref("")
const todos = ref([
    { title: '吃饭', done: false },
    { title: 'slepp', done: true },
])
//
const active = computed(() => todos.value.filter(v => v.done).length)
const all = computed(() => todos.value.length)
const allDone = computed({
    get: () => { active.value === 0 },
    set: (value) => { todos.value.map(v => { v.done = value }) }
})
//
function addTodo() {
    this.todos.push({ title: title.value, done: false })
    this.title = ""
}
function clear() { todos.value = todos.value.filter(v => !v.done) }
</script>

<template>
    <h2>{{ title }}</h2>
    <input type="text" v-model="title" @keydown.enter="addTodo()">
    <ul>
        <li v-for="todo in todos">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.title }}</span>
        </li>
    </ul>
    全选<input type="checkbox" v-model="allDone">
    <div>{{ active }}/{{ all }}</div>
    <button v-if="active" @click="clear()">清理</button>
</template>

<style scoped lang="less">
.done {
    color: gray;
    text-decoration: line-through;
}
</style>
