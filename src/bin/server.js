import { set, listen, get } from '../app';

set('port', process.env.PORT); // Set Port

listen(get('port'), () => {
    console.log(`Server run on port`, get('port'));
});