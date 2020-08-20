const mainController = {

        homePage: (request, response) => {
            console.log(request.session)
            response.json('This is your easytrip homepage!')
        },


};

module.exports = mainController;