const users = [ 
    { id: 1, name: 'Adam' },
    { id: 2, name: 'Marysia' },
    { id: 2, name: 'Jagienka' },
]

module.exports = { 
    showUsers() {
        const names = users.map(user => user.name)
        console.log('Nasi uzytkownicy to:')
        names.forEach(name => console.log(name))
    },
    showUserObj(id) {
        console.log('Szukany uzytkownik to:')
        const user = users.find(user => user.id === id)
        console.log(user)
    },
    userListLength: users.length
}