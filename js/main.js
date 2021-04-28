const kevin = document.getElementById('kevin')
const lebron = document.getElementById('lebron')
const steph = document.getElementById('steph')


document.getElementById('showKev').addEventListener('click', showKev)
document.getElementById('showBron').addEventListener('click', showBron)
document.getElementById('showSteph').addEventListener('click', showSteph)

function showKev() {
    lebron.classList.add('hidden')
    steph.classList.add('hidden')
    kevin.classList.toggle('hidden')
}

function showBron() {
    kevin.classList.add('hidden')
    steph.classList.add('hidden')
    lebron.classList.toggle('hidden')
}

function showSteph() {
    lebron.classList.add('hidden')
    kevin.classList.add('hidden')
    steph.classList.toggle('hidden')
}