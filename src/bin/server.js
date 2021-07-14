import app from '../app';


app.listen(process.env.PORT, () => {
    console.log(`Server run on port`, process.env.PORT);
});