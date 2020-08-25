const axios = require('axios').default;

const searchController = {
    search : async (request, response) => {
        if (request.query.location) {
            try {
            url = `https://nominatim.openstreetmap.org/search?q=${request.query.location}&format=json&addressdetails=1&limit=1&polygon_svg=0`;
            const data = await axios.get(url);
            response.json({location : data.data[0]});
            }
            catch (error) {
                response.json({"error" : error});
            }
        }
        else
            response.status(400).json({'error':  'missing location parameter'})
    }
}
module.exports = searchController;