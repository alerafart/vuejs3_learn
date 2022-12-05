const Plugin1 = {
    install : (app) => {
        // code plugin ici
        app.mixin({
            mounted() {
                console.log('Monté chaque fois qu\'un composant est monté');
            }
        })
    }
};