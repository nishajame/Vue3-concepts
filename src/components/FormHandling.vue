<template>
  <form @submit.prevent="submitForm">
    <!-- Capture user inputs -->
    <div class="checkbox-div">
      <pre>
          {{ JSON.stringify(formValues, null, 2) }}
    </pre
      >
    </div>
    <!-- Inputs -->
    <div>
      <div>
        <label for="name">Name</label>
      </div>
      <div>
        <input type="text" id="name" v-model.trim.lazy="formValues.name" />
      </div>
    </div>
   
    <!-- Textareas -->
    <div>
      <div>
        <label for="profile">Profile Summary</label>
      </div>
      <div>
        <textarea
          id="profile"
          cols="30"
          rows="10"
          v-model="formValues.profileSummary"
        ></textarea>
      </div>
    </div>
    <!-- Single select dropdown control -->
    <div>
      <div>
        <label for="country">Country</label>
      </div>
      <div>
        <select id="country" v-model="formValues.country">
          <option value="">Select a country</option>
          <option value="india">India</option>
          <option value="vietnam">Vietnam</option>
          <option value="singapore">Singapore</option>
        </select>
      </div>
    </div>
    <!-- Multi select control -->

    <div>
      <div>
        <label for="job-location">Job Locatoin</label>
      </div>
      <div>
        <select id="job-location" multiple v-model="formValues.jobLocation">
          <option value="india">India</option>
          <option value="vietnam">Vietnam</option>
          <option value="singapore">Singapore</option>
        </select>
      </div>
    </div>
    <!-- Single Checkbox  -->
    <div class="checkbox-div">
      <input
        type="checkbox"
        id="remotework"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remotework">Open to remote work?</label>
    </div>
    <!-- <div> -->
    <!-- Checkbox group -->
    <div class="checkbox-div">
      <label>Skill set</label>
    </div>
    <div class="checkbox-div">
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValues.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValues.skillSet"
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValues.skillSet"
      />
      <label for="javascript">JavaScript</label>
    </div>
    <!-- </div> -->
    <!-- Radio group -->
    <div class="checkbox-div">
      <label>Years of Experience</label>
    </div>
    <div class="checkbox-div">
      <!-- --- -->
      <input
        type="radio"
        id="0-2"
        value="0-2"
        v-model="formValues.yearsOffExperience"
      />
      <label for="0-2">0-2</label>
      <!-- --- -->
      <input
        type="radio"
        id="3-5"
        value="3-5"
        v-model="formValues.yearsOffExperience"
      />
      <label for="3-5">3-5</label>
      <!-- --- -->
      <input
        type="radio"
        id="6-10"
        value="6-10"
        v-model="formValues.yearsOffExperience"
      />
      <label for="6-10">6-10</label>
      <!-- --- -->
    </div>
     <!-- To achieve form submission on enter key press commented submit btn tag and added the event @keyup -->

    <div>
      <div>
        <label for="age">Age</label>
      </div>
      <div>
        <input
          @keyup.enter.prevent="submitForm"
          type="text"
          id="age"
          v-model.number="formValues.age"
        />
      </div>
    </div>
    <!-- Submit button -->
    <!-- <div>
      <button>Submit</button>
    </div> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skillSet: [],
        yearsOffExperience: "",
        age: null,
      },
    };
  },
  methods: {
    //instead of preventDefault() we can use prevent modifier @submit

    // submitForm(event){
    //   event.preventDefault()
    //   console.log("Form Values:", this.formValues);
    // }

    submitForm() {
      console.log("Form Values:", this.formValues);
    },
  },
};
</script>

<style scoped>
div {
  text-align: left;
  margin: auto;
  width: 60%;
  padding: 10px;
}
label {
  font-size: 15px;
  color: black;
  font-weight: bold;
}
.input {
  font-size: 10px;
  color: black;
}
.checkbox-div {
  margin-left: 412px;
}
</style>