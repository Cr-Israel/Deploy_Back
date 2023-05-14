import mongoose from 'mongoose';

async function main() {
    await mongoose.connect(`mongodb+srv://crisraeldev:crisraelmongo23@getapet.heypw38.mongodb.net/`);
    console.log('Conectado ao Mongoose!');
};

main().catch((err) => console.log('Houve um erro aqui na conexão com o Mongoose: ' + err));

export default mongoose;