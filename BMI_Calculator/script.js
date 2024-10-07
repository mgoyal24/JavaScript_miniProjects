const form = document.querySelector('form')

form.addEventListener('submit',e => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const range = document.querySelector("#range")

    if (height === '' || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>Your BMI is ${bmi}</span>`

        if (bmi < 18.6){
            range.innerHTML = `<span>(UnderWeight)</span>`
        }
        else if (18.6 < bmi < 24.9){
            range.innerHTML = `<span>(Normal)</span>`
        }
        else{
            range.innerHTML = `<span>(OverWeight)</span>`
        }
    }
})