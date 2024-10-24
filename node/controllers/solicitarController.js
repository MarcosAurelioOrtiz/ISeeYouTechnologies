import fetch from 'node-fetch';

const solicitarDato = async (req, res) => {
  try {
    const response = await fetch('https://memeado.vercel.app/api/hello');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'No se encontro dato' });
  }
};

export {
    solicitarDato
}
