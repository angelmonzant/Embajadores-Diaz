import Head from 'next/head';
import SignupForm from '../components/SignupForm';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Embajador Rapikom</title>
        <meta name="description" content="Aumenta tus ventas afiliándote a Rapikom." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-primary text-light py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Embajador Rapikom</h1>
          <p className="text-lg mt-2">Aumenta tus ventas afiliándote a Rapikom.</p>
        </div>
      </header>

      <main className="container mx-auto py-10">
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Beneficios para Clientes</h2>
          <ul className="list-disc pl-5">
            <li>Compras accesibles y flexibles.</li>
            <li>Financiamiento en cuotas sin intereses.</li>
            <li>Incremento en el límite de compra.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Beneficios para Negocios</h2>
          <ul className="list-disc pl-5">
            <li>Aumento del ticket promedio.</li>
            <li>Incremento en la tasa de conversión.</li>
            <li>Flujo constante de nuevos clientes.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Cómo Funciona</h2>
          <p>Afíliate a Rapikom y ofrece financiamiento en tu tienda. Recibe pagos en cuotas directamente en nuestra app.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Registro de Aliado</h2>
          <SignupForm />
        </section>
      </main>

      <footer className="bg-dark text-light py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Rapikom. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
