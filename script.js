const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-17', '01-18', '01-19'],
    study: ['01-17', '01-19'],
    water: ['01-17', '01-19'],
}

nlwSetup.setData(data)

nlwSetup.load()