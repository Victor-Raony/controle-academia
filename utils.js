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
    }
}