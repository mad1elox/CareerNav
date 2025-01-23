function analyzeResults() {
    const question1 = document.getElementById("question1").value;
    const question2 = document.getElementById("question2").value;
    const question3 = document.getElementById("question3").value;

    let result = "";

    if (question1 === "yes" && question2 === "no" && question3 === "yes") {
        result = "Сізге шығармашылық мамандықтар жарайды! Мысалы: дизайнер, суретші, жазушы.";
    } else if (question1 === "no" && question2 === "yes" && question3 === "no") {
        result = "Сізге техникалық мамандықтар жарайды! Мысалы: инженер, программист, аналитик.";
    } else if (question3 === "yes") {
        result = "Сізге әлеуметтік сала мамандықтары жарайды! Мысалы: мұғалім, дәрігер, психолог.";
    } else {
        result = "Сізге әмбебап мамандықтарды қарастырған дұрыс.";
    }

    document.getElementById("result").innerText = result;
}