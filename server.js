import { app } from './config/default.exporter.js';

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

console.log('Hello');
