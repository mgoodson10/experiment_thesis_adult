function create_tv_array(json_object) {
    let tv_array = [];
    for (let i = 0; i < json_object.length; i++) {
        // Grabs the first key, which is 'stimulus_1', 'stimulus_2', etc.
        let stim_key = Object.keys(json_object[i])[0];
        let obj = {
            stimulus: json_object[i][stim_key], // The conversation HTML
            data: { stimulus_name: stim_key }   // Store which stimulus it was
        };
        tv_array.push(obj);
    }
    return tv_array;
}