function viewOwnProerties(obj) {
    for (let index in obj) {
        if (obj.hasOwnProperty(index)) {
            console.log(`obj[${index}]: ${obj[index]}`);
        }
    }
}
