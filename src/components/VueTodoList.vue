<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import type { Ref } from 'vue';
import VueTextInput from './VueTextInput.vue';
import VueCheckbox from './VueCheckbox.vue';
import VueCloseButton from './VueCloseButton.vue';

interface TodoItem {
  completed : boolean;
  label : string;
  id : number;
}

const listItems : Ref<TodoItem[]> = ref([
  {
    completed: false,
    label: 'Play with kittens',
    id: 1,
  },
]);

const showCompletedlist = ref(true);
const nextID = ref(2);
const todoList = computed(() => listItems.value.filter((item) => !item.completed));
const completedTodoList = computed(() => listItems.value.filter((item) => item.completed));
const completedCount = computed(() => completedTodoList.value.length);

const addNewItem = () : void => {
  listItems.value.push({
    completed: false,
    label: '',
    id: nextID.value,
  });
  nextID.value += 1;
};

const removeTodoItem = (id : number) : void => {
  listItems.value = listItems.value.filter((item) => item.id !== id);
};

const toggleCompletedList = () => {
  showCompletedlist.value = !showCompletedlist.value;
};

watch(todoList, (items) => {
  if (!items.length) {
    addNewItem();
  }
});
</script>

<template>
  <section class="shadow-lg border border-gray-200 rounded-lg p-2">
    <ul>
      <li
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="flex items-center gap-4 my-2"
      >
        <vue-checkbox
          :checked="todoItem.completed"
          :disabled="todoItem.label === ''"
          @change="todoItem.completed = !todoItem.completed"
        />
        <vue-text-input
          :value="todoItem.label"
          :focus-on-mount="true"
          @input="todoItem.label = $event.target.value"
          @keydown.enter="addNewItem()"
        />
        <vue-close-button @click="removeTodoItem(todoItem.id)" />
      </li>
    </ul>
    <div class="my-5">
      <button
        class="flex items-center"
        :disabled="completedCount === 0"
        @click="toggleCompletedList()"
      >
        <svg
          class="w-4 h-4 mr-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <path
            v-if="showCompletedlist"
            d="m6 9 6 6 6-6"
          ></path>
          <path
            v-else
            d="m18 15-6-6-6 6"
          ></path>
        </svg>
        <h4>{{ completedCount }} completed items</h4>
      </button>
      <ul v-show="showCompletedlist">
        <li
          v-for="todoItem in completedTodoList"
          :key="todoItem.id"
          class="flex items-center gap-4 my-2"
        >
          <vue-checkbox
            :checked="true"
            @change="todoItem.completed = !todoItem.completed"
          />
          <vue-text-input
            :value="todoItem.label"
            class="line-through"
          />
          <vue-close-button @click="removeTodoItem(todoItem.id)" />
        </li>
      </ul>
    </div>
  </section>
</template>
