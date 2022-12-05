const Plugin3 = {
    install : (app) => {
        // code plugin ici
        app.config.globalProperties.$bonjour = () => {
            return 'Bonjour';
            }
        }
    }
