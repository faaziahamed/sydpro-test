<template>
  <div class="row">
    <div class="col-md-12">
      <div class="input-group mb-3 d-flex justify-content-end">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Message Order
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item active" href="#">Latest</a>
            <a class="dropdown-item" href="#">Order</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Message</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td class="text-center">
              <router-link
                :to="'/messages/' + selectedMessage.id"
                class="badge badge-warning"
              >
                <span class="material-icons">edit</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageDataService from "@/services/MessageDataService";
import Message from "@/types/Message";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "message-list",
  data() {
    return {
      messages: [] as Message[],
      selectedMessage: {} as Message,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    loadMessages() {
      MessageDataService.getAll()
        .then((response: ResponseData) => {
          this.messages = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.loadMessages();
  },
});
</script>
