
console.log('Quel age avez-vous ?')
process.stdin.on('data', data => {
    if(data > 99 || data < 0) {
        console.log('Age invalide')
    }else {
        console.log(`Votre age : ${data}`)
        const age = 2024 - data
        console.log(`Vous êtes née en ${age}`)
        process.exit()
    }
})

