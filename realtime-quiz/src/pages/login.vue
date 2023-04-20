<template>
    <div v-if="requestOTP" class="auth_section">
        <div class="auth_container">
            <div style="text-align:center">
                <p>Enter the 6-digit code we sent to {{ channel_type }}{{ phone_number.slice(1, 11) }} </p>
            </div>
            <br>
            <div>
                <OTPInput :isDisabled="isDisabled" :isError="isError" :onChangeOTP="onChangeOTP"
                    :shouldResetOTP="shouldResetOTP" :numberOfInput="6" />
                <br>
                <div class="validate_otp">
                    <button class="btn otp-btn" @click="onSubmitToLogin">Next</button>
                </div>
            </div>
            <div class="note_section">
                <p>Note:</p>
                <ul>
                    <li>TriviaBillionia is available in only Nigeria currently</li>
                    <li>Input your phon number & email to get OTP 6 digit code send to both (email is optional but include
                        it just in case SMS delivery takes a while)</li>
                </ul>
            </div>
        </div>
    </div>
    <div v-else class="auth_section">
        <div class="auth_container">
            <form method="POST">
                <div class="grouped_field">
                    <label for="phone-number">Channel Type</label>
                    <select name="country-code" class="auth-selection">
                        <option value="ng" selected disabled hidden>Nigeria (+234)</option>
                    </select>
                </div>
                <div class="grouped_field">
                    <label for="phone-number">Phone Number</label>
                    <input type="text" v-model="phone_number" required minlength="1" maxlength="11" name="phone-number"
                        class="form-control auth-input">
                </div>
                <div class="grouped_field">
                    <label for="email">Email Address</label>
                    <input type="email" v-model="email_address" required minlength="1" name="email-address"
                        class="form-control auth-input">
                </div>
                <div class="submit_field">
                    <button class="btn auth-btn" @click="ConfirmOTP">Next</button>
                </div>
            </form>
            <div class="note_section">
                <p>Note:</p>
                <ul>
                    <li>TriviaBillionia is available in only Nigeria currently</li>
                    <li>Input your phon number & email to get OTP 6 digit code send to both (email is optional but include
                        it just in case SMS delivery takes a while)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import OTPInput from "vue-otp-input";
import axios from "axios"

const BASE_URL = "https://dev.triviabillionia.com/api"

export default {
    name: "login",

    components: {
        OTPInput
    },

    data() {
        return {
            channel_type: "phone",
            phone_number: "",
            email_address: "",
            requestOTP: false,
            otp: null,
            isDisabled: false,
            isError: false,
            shouldResetOTP: false
        };
    },

    methods: {
        onChangeOTP(otp) {
            this.otp = otp;
        },

        ConfirmOTP(e) {
            e.preventDefault();

            if (this.phone_number === '' || this.email_address === '') {
                return;
            }

            try {
                // Confirm and Verify Phone Number
                axios.get(`${BASE_URL}/verify?type=1&number=${this.phone_number}&country=ng&language=en`).then((response) => {
                    console.log(response.statusText);

                    if (response.statusText === "OK") {
                        // Go to OTP Route
                        this.requestOTP = true;
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },

        onSubmitToLogin(e) {
            e.preventDefault();
            console.log("Authenticate This User");
            console.log(this.otp, this.phone_number, this.email_address, this.channel_type);

            try {
                // Write Logic to authenticate
                axios.post(`${BASE_URL}/login`, {
                    channel_type: this.channel_type,
                    channel_id: "+2348149055068",
                    channel_email: this.email_address,
                    channel_verification: this.otp
                }).then((response) => {

                    console.log(response);
                    console.log("Token: " + response.data.token);
                    console.log("Username: " + response.data.username);

                    // Save Token to LocalStorage
                    localStorage.setItem("username", response.data.username)
                    localStorage.setItem("token", response.data.token)

                    if (response.statusText === "OK") {
                        // Push to Start Game Page
                        this.$router.push({ path: '/', replace: true })
                    }

                })
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>


<style scoped>
* {
    padding: 0;
    margin: 0;
}

.auth_section {
    width: 100%;
    min-width: 100%;
    display: flex;
    justify-content: center;
}

.auth_container {
    width: 100%;
    max-width: 500px;
    padding: 2em 1em;
    border-radius: 2px;
    background-color: white;
}

form {
    display: flex;
    gap: 10px;
    flex-direction: column;
}

.grouped_field {
    width: 100%;
    display: flex;
    gap: 5px;
    flex-direction: column;
}

.submit_field {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.auth-btn {
    color: white !important;
    font-weight: 600;
    padding: 12px 24px;
    background-color: #173052 !important;
}

.validate_otp {
    width: 100%;
    display: flex;
    justify-content: center;
}

.otp-btn {
    color: white !important;
    font-weight: 600;
    padding: 10px 24px;
    background-color: #173052 !important;
}

.auth-input,
.auth-selection {
    width: 100%;
    padding: 1.5em 1em;
}

.auth-selection {
    color: black !important;
    border-radius: 3px !important;
    padding: .8em 1em !important;
    background-color: rgba(128, 128, 128, 0.057) !important;
}

.note_section {
    width: auto;
    padding: 1em 0;
}

.note_section ul {
    padding: 1em;
}

@media (max-width: 800px) {
    .auth_container {
        max-width: 90%;
    }
}

@media (max-width: 500px) {
    .auth_container {
        max-width: 95%;
    }
}
</style>
