const Plugin2 = {
    install : (app) => {
        // code plugin ici
        app.component('bonjour', {
            template:'<div>Bonjour</div>'
        })
    }
};