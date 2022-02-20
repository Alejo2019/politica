export  const validatorInputs = (values) => {
    let state = false
    let states = []

    if (values.length > 0) {
        values.map(item => {
            if (item !== "") {
                states.push(item)
            }
        })
    }
    console.log("sta " + states.length + " val " + values.length)
    if (states.length === values.length) {
        state = true
    }

    return state
}