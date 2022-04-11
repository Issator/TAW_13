import business from '../business/business.container';
const postEndpoint = (router) => {
    router.get('/api/posts', async (request, response, next) => {
        try {
            let result = await business.getPostManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.get('/api/posts/:id', async (req, res) => {
        try {
            let result = await business.getPostManager().get(req.params.id)
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    })

    router.post('/api/posts/add', async (req, res, next) => {
        try {
            const {data} = req.body;
            let result = await business.getPostManager().createNewOrUpdate(data);
            res.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });
};
export default postEndpoint;
