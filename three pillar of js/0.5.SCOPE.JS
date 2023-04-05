function ask(question) {
    setTimeout(function waitAsec() {
        console.log(question); 
    }, 100);
}

ask("what is closure ?");
