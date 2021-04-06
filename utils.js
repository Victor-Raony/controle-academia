module.exports = {
    age: function(timestamp){ 

    const today = new Date()
    const birdthDate = new Date(timestamp)

    let age = today.getFullYear() - birdthDate.getFullYear()

    const month = today.getMonth() - birdthDate.getMonth()

    if(month < 0 || month == 0 && today.getDate() < birdthDate.getDate()){
        age = age -1
    }

    return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}` .slice(-2)
            const day = `0${date.getUTCDate()}` .slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    }
}