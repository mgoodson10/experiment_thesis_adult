const jsPsych = initJsPsych({
    show_progress_bar: true,
    on_finish: function(data) {
        window.location.href = 'finish.html';
    }
});

const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;

// Save data
const save_data = {
    type: jsPsychPipe,
    action: "save",
    experiment_id: "LhrAsw9UXcyj",
    filename: filename,
    data_string: ()=>jsPsych.data.get().csv()
};
let timeline = [];

// Consent form
const irb = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<img src="image/a_consent_form.png" alt="Consent Form" style="max-width:100%;">',
    choices: ['Next']
};
timeline.push(irb);

// Instructions
const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "In this experiment, you will read a series of conversations. For each conversation, you will answer a few questions.<br><br>When you're ready to begin, click Next.",
    choices: ["Next"]
};
timeline.push(instructions);

let tv_array = create_tv_array(trial_objects);

// -- Here is the clean, single copy of the trials --
const trials = {
    timeline: [
        {
            type: jsPsychSurveyHtmlForm,
            preamble: function() {
                // Show the conversation above the questions
                return jsPsych.timelineVariable('stimulus');
            },
            html: function() {
                const slider_min = 1;
                const slider_max = 100;
                const stim_name = jsPsych.timelineVariable('data').stimulus_name;
                let html = "";

                if (stim_name === "stimulus_1") {
                    // Gender multiple choice question for Person B
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person B identifies as?</p>
                        <label><input type="radio" name="personB_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personB_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personB_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Minimum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>minimum age</b> Person B could be?</p>
                        <label for="personB_min_age">Select the minimum age: <span id="min-age-val">${slider_min}</span></label><br>
                        <input type="range"
                            name="personB_min_age"
                            id="personB_min_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_min}"
                            oninput="document.getElementById('min-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Maximum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>maximum age</b> Person B could be?</p>
                        <label for="personB_max_age">Select the maximum age: <span id="max-age-val">${slider_max}</span></label><br>
                        <input type="range"
                            name="personB_max_age"
                            id="personB_max_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_max}"
                            oninput="document.getElementById('max-age-val').textContent=this.value"
                            required>
                    </div>
                    `;
                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person B's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personB_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;
                     // Language multiple choice question for Person B
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person B?</p>
                        <label><input type="radio" name="personB_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personB_lang" value="No"> No</label><br>
                    </div>
                    `;
                }
                if (stim_name === "stimulus_2") {
                    // Gender multiple choice question for Person C
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person C identifies as?</p>
                        <label><input type="radio" name="personC_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personC_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personC_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Minimum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>minimum age</b> Person C could be?</p>
                        <label for="personC_min_age">Select the minimum age: <span id="min-age-val">${slider_min}</span></label><br>
                        <input type="range"
                            name="personC_min_age"
                            id="personC_min_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_min}"
                            oninput="document.getElementById('min-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Maximum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>maximum age</b> Person C could be?</p>
                        <label for="personC_max_age">Select the maximum age: <span id="max-age-val">${slider_max}</span></label><br>
                        <input type="range"
                            name="personC_max_age"
                            id="personC_max_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_max}"
                            oninput="document.getElementById('max-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person C's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personC_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;

                    // Language multiple choice question for Person C
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person C?</p>
                        <label><input type="radio" name="personC_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personC_lang" value="No"> No</label><br>
                    </div>
                    `;                    
                }
                if (stim_name === "stimulus_3") {
                    // Gender multiple choice question for Person E
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person E identifies as?</p>
                        <label><input type="radio" name="personE_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personE_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personE_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Minimum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>minimum age</b> Person E could be?</p>
                        <label for="personE_min_age">Select the minimum age: <span id="min-age-val">${slider_min}</span></label><br>
                        <input type="range"
                            name="personE_min_age"
                            id="personE_min_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_min}"
                            oninput="document.getElementById('min-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Maximum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>maximum age</b> Person E could be?</p>
                        <label for="personE_max_age">Select the maximum age: <span id="max-age-val">${slider_max}</span></label><br>
                        <input type="range"
                            name="personE_max_age"
                            id="personE_max_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_max}"
                            oninput="document.getElementById('max-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person E's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personE_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;

                    // Language multiple choice question for Person E
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person E?</p>
                        <label><input type="radio" name="personE_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personE_lang" value="No"> No</label><br>
                    </div>
                    `;                    
                }
                if (stim_name === "stimulus_4") {
                    // Gender multiple choice question for Person F
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person F identifies as?</p>
                        <label><input type="radio" name="personF_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personF_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personF_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Minimum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>minimum age</b> Person F could be?</p>
                        <label for="personF_min_age">Select the minimum age: <span id="min-age-val">${slider_min}</span></label><br>
                        <input type="range"
                            name="personF_min_age"
                            id="personF_min_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_min}"
                            oninput="document.getElementById('min-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Maximum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>maximum age</b> Person F could be?</p>
                        <label for="personF_max_age">Select the maximum age: <span id="max-age-val">${slider_max}</span></label><br>
                        <input type="range"
                            name="personF_max_age"
                            id="personF_max_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_max}"
                            oninput="document.getElementById('max-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person F's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personF_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;

                    // Language multiple choice question for Person F
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person F?</p>
                        <label><input type="radio" name="personF_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personF_lang" value="No"> No</label><br>
                    </div>
                    `;  

                     // Gender multiple choice question for Person G
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person G identifies as?</p>
                        <label><input type="radio" name="personG_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personG_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personG_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person G's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personG_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;

                    // Language multiple choice question for Person G
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person G?</p>
                        <label><input type="radio" name="personG_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personG_lang" value="No"> No</label><br>
                    </div>
                    `;                               
                }
                 if (stim_name === "stimulus_5") {
                    // Gender multiple choice question for Person H
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person H identifies as?</p>
                        <label><input type="radio" name="personH_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personH_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personH_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Minimum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>minimum age</b> Person H could be?</p>
                        <label for="personH_min_age">Select the minimum age: <span id="min-age-val">${slider_min}</span></label><br>
                        <input type="range"
                            name="personH_min_age"
                            id="personH_min_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_min}"
                            oninput="document.getElementById('min-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Maximum age slider
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is the <b>maximum age</b> Person H could be?</p>
                        <label for="personH_max_age">Select the maximum age: <span id="max-age-val">${slider_max}</span></label><br>
                        <input type="range"
                            name="personH_max_age"
                            id="personH_max_age"
                            min="${slider_min}"
                            max="${slider_max}"
                            value="${slider_max}"
                            oninput="document.getElementById('max-age-val').textContent=this.value"
                            required>
                    </div>
                    `;

                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person H's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personH_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;

                    // Language multiple choice question for Person H
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person H?</p>
                        <label><input type="radio" name="personH_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personH_lang" value="No"> No</label><br>
                    </div>
                    `;  

                     // Gender multiple choice question for Person I
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What gender do you think Person I identifies as?</p>
                        <label><input type="radio" name="personI_gender" value="Male" required> Male</label><br>
                        <label><input type="radio" name="personI_gender" value="Female"> Female</label><br>
                        <label><input type="radio" name="personI_gender" value="Other"> Other</label><br>
                    </div>
                    `;

                    // Exact age guess question
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">What is your <b>best guess</b> for Person I's exact age? Please enter a number.</p>
                        <input type="number" 
                            name="personI_exact_age" 
                            min="1" 
                            max="100" 
                            style="width: 90px;"
                            required>
                    </div>
                    `;

                    // Language multiple choice question for Person G
                    html += `
                    <div class="question-block" style="margin-top:2em;">
                        <p class="question-text">Do you think English is the primary language of Person I?</p>
                        <label><input type="radio" name="personI_lang" value="Yes" required> Yes</label><br>
                        <label><input type="radio" name="personI_lang" value="No"> No</label><br>
                    </div>
                    `;                               
                }
                // For other stimuli, show nothing or add more questions here if desired
                return html;
            },
            data: jsPsych.timelineVariable('data'),
            button_label: 'Continue'
        }
    ],
    timeline_variables: tv_array,
    randomize_order: false
};
timeline.push(trials);

// Demographics
const demographics_survey = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<h3>Demographics</h3><p>Please answer the following questions.</p>',
    html: `
        <div style="margin: 20px auto; max-width: 460px; text-align: left;">
            <p><strong>How old are you in years?</strong></p>
            <input name="age" type="number" min="1" max="120" required style="width: 80px;">
        </div>
        <div style="margin: 20px auto; max-width: 460px; text-align: left;">
            <p><strong>What is your gender?</strong></p>
            <select name="gender" required>
                <option value="" disabled selected>-- Select --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not">Prefer not to say</option>
            </select>
        </div>
        <div style="margin: 20px auto; max-width: 460px; text-align: left;">
            <p><strong>Is English your primary language?</strong></p>
            <select name="answer" required>
                <option value="" disabled selected>-- Select --</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="prefer-not">Prefer not to say</option>
            </select>
        </div>
    `
};
timeline.push(demographics_survey);

timeline.push(save_data);

jsPsych.run(timeline);