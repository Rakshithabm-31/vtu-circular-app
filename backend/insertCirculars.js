const fs = require('fs');
const Circular = require('./models/Circular'); // Sequelize model

const insertCirculars = async () => {
    try {
        const circulars = JSON.parse(fs.readFileSync('circulars.json', 'utf-8'));

        for (const circular of circulars) {
            await Circular.findOrCreate({
                where: { url: circular.url },
                defaults: { title: circular.title },
            });
        }

        console.log('Circulars added to database!');
    } catch (error) {
        console.error('Error inserting circulars:', error);
    }
};

insertCirculars();
