<template>
  <div v-if="messageData.id" class="edit-form">
    <h4>Message</h4>
    <form>
      <div class="form-group">
        <label for="date">Date</label>
        <input
          type="text"
          class="form-control"
          id="date"
          disabled
          v-model="messageData.date"
        />
      </div>
      <div class="form-group">
        <label for="Message">Message</label>
        <input
          type="text"
          class="form-control"
          id="Message"
          v-model="messageData.message"
        />
      </div>
    </form>

    <button type="submit" class="badge badge-success" @click="update">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Record not found...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageDataService from "@/services/MessageDataService";
import Message from "@/types/Message";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "message-details",
  data() {
    return {
      messageData: {} as Message,
      message: "",
    };
  },
  methods: {
    getMessage(id: any) {
      MessageDataService.get(id)
        .then((response: ResponseData) => {
          this.messageData = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
});
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
