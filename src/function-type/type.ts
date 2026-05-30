type userItems = (items: string) => string

function userData(user: string[], items: userItems): string[]{
    const newUser: string[] = []

    const profession = 'Software enginner'
    const level = 'Pleno'

    newUser.push(items(profession + ' ' + level))

    return newUser
}

const user = ['Guilherme', 'Pessoa']
const dataUser = userData(user, (items) => items)

console.log('Employee', user)
console.log('Profession' ,dataUser)