<template>
  <div class="card" :class="viewType">
    <div class="card-header">Question {{ newQuestionNumber }}</div>
    <h2 class="question-div card-title">{{ newQuestion }}</h2>
    <div class="img-div" v-if="showImg">
      <img :src="questionImgLink" class="img-fluid q-img" alt="Image for the question" />
    </div>
    <Answer v-if="showAnswer" :correctAnswer="newChoices[correctAnswerIndex]" :isAdminView="true"></Answer>
    <div class="card-body" v-if="!showAnswer">
      <h5 class="card-title"></h5>
      <div class="choices-container" v-if="!answerSubmitted && !isAdminView">
        <button type="button" class="btn btn-outline-dark choice-btn" v-for="(choice, index) in newChoices" :key="choice"
          @click="sendMyAnswer(choice, index, choices_ids, question_id)">
          <span> {{ index }}. </span> {{ choice }}
        </button>
      </div>
      <div class="choices-container" v-if="isAdminView">
        <div class="choice-div" v-for="choice in newChoices" :key="choice">
          {{ choice }}
        </div>
      </div>
      <div class="submitted-msg" v-if="answerSubmitted">
        <h5>
          Your answer is submitted, waiting for everyone else to answer...
        </h5>
      </div>
    </div>
    <div v-if="!(isAdminView && showAnswer)" class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar"
        :style="{ width: (questionTimer / 30) * 100 + '%' }" aria-valuemin="0" aria-valuemax="100">
        {{ questionTimer }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Answer from '../common/Answer.vue';

// BASE URL
const BASE_URL = "https://dev.triviabillionia.com/api"

export default {
  name: 'Question',
  components: {
    Answer
  },
  props: [
    'isAdminView',
    'newQuestion',
    'newChoices',
    'newQuestionNumber',
    'isLastQuestion',
    'questionTimer',
    'correctAnswerIndex',
    'myInputCh',
    'showImg',
    'questionImgLink',
    'showAnswer',
    'correctAnswer',
    'choices_ids',
    'question_id'
  ],
  data() {
    return {
      answerSubmitted: false,
      viewType:
        this.isAdminView == true
          ? 'questions-card-host'
          : 'questions-card-player'
    };
  },

  methods: {
    // Send Answer to Quiz Question
    sendMyAnswer(choice, index, choices_ids, question_id) {
      if (!this.isAdminView) {
        this.answerSubmitted = true;
        this.$emit('player-answer', {
          questionIndex: this.newQuestionNumber - 1,
          playerAnswerIndex: index
        });
        this.myInputCh.publish('player-answer', {
          questionIndex: this.newQuestionNumber - 1,
          playerAnswerIndex: index,
          choice: choice
        });

        let tokenStr = localStorage.getItem("token");
        let quizId = 9;
        let questionID = question_id;

        console.log(tokenStr, questionID, quizId, BASE_URL, axios);

        // // Quiz Take Endpoint
        // axios.post(`${BASE_URL}/quiztake/${quizId}/${questionID}`, {
        //   answers: [choices_ids[index]],
        //   comment: "Optional"
        // }, { headers: { "Authorization": `Bearer ${tokenStr}` } }).then((response) => {
        //   console.log(response);
        // }).catch((error) => {
        //   console.log(error);
        // })
      }
    }
    // Quiz Take Endpoint Ends
  }
};
</script>

<style scoped>
.questions-card-player {
  width: 80%;
  margin: 20px auto;
  text-align: center;
}

.questions-card-host {
  width: 80%;
  margin: 20px auto;
  text-align: center;
}

.question-div {
  max-height: 200px;
  margin: 20px;
}

.img-div {
  margin: 0 auto;
  max-width: 50%;
}

.q-img {
  max-height: 200px;
}

.choices-container {
  display: flex;
  flex-direction: column;
}

.choice-btn {
  width: 100%;
  height: 60px;
  text-align: start;
  border-radius: 40px;
  margin: 10px 0;
  font-weight: 700;
  display: flex;
  gap: 10px;
  padding: 0 2em;
  align-items: center;
}

.choice-btn span {
  font-weight: 700;
  color: black;
}

.choice-div {
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin: 10px 0;
  border: thin solid gray;
}

.bg-dark {
  background-color: #2847a7 !important;
}

.submitted-msg {
  text-align: center;
  margin: 0px auto;
  color: gray;
}

@media only screen and (max-device-width: 480px) {
  .questions-card-player {
    width: 90%;
    margin: 10px auto;
    text-align: center;
  }

  .question-div {
    max-height: 100px;
    margin: 20px;
    font-size: 15px;
  }

  .img-div {
    margin: 0 auto;
    max-width: 50%;
  }

  .q-img {
    max-height: 100px;
  }

  .choices-container {
    display: block;
  }

  .choice-btn {
    width: 100%;
    text-align: start;
    border-radius: 40px;
    height: 60px;
    margin: 10px;
  }

  .choice-div {
    width: 100%;
    height: 60px;
    margin: 10px;
    border: gray;
  }

  .submitted-msg {
    text-align: center;
    margin: 0px auto;
    color: gray;
  }
}
</style>
