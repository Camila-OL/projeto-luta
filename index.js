let log = new Log(document.querySelector('.log'))
let char = new Cavaleiro('camila')
let monster = new Feiticeiro('feiticeiro')

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)
stage.start()