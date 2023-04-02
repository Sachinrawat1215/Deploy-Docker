const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    try {
        return response.status(200).json({ status: true, message: "SERVER_RUNNING_SUCESSFULLY" });
    } catch (error) {
        return response.status(500).json({ status: false, message: "SOMETHING_WENT_WRONG", error });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT number ${PORT}`);
})