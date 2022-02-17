async function contact() {
    let email = $('input[name=email]').val();
    let content = $('textarea[name=content]').val();
    
    console.log(email)
    console.log(content)

    if (email && content) {
        console.log('je suis là!')
        const repContact = await fetch('https://jetronic.ga/contact', {
            method: 'POST',
            body: JSON.stringify({ email: email, content: content }),
            headers: {"content-type" : "application/json"}
        });
    
        if(repContact.status == 200) {
            $('input[name=email]').val('');
        $('textarea[name=content]').val('');
            alert('Votre message a bien été envoyé!');
        }
        if(repContact.status == 500) {
            console.log("Error");
        }

    }
}