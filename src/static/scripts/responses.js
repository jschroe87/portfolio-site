function getBotResponse(input) {
    //simple responses german
    if (input == "Hallo") {
        return "Hallo, schön das du hier bist.";
    } else if (input == "Tschüss") {
        return "Ich bin gerne auch später für dich da!";
    } else if (input == "Geo") {
        return "Du hast mich besiegt...";
    } else if (input == "Erzähl einen Witz"){
        return "Was ist das Lieblingsgetränk von Robotern - Schraubensaft!"
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}