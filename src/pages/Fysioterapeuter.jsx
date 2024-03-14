import { Helmet } from "react-helmet";

export function Fysioterapeuter() {
  return (
    <>
      <Helmet>
        <title>Holten Institutt | Fysioterapeuter</title>
        <meta
          name="description"
          content="Fysioterapeuter hos Holten Institutt"
        />
      </Helmet>
      <main className="container mt-5">
        <h1 className="text-center mb-5">Våre fysioterapeuter</h1>
        <div>
          <div className="row mb-5 py-4">
            <div className="col-xs-12 col-lg-5">
              <div className="text-center text-lg-end mb-4 mb-lg-0">
                <img
                  src="/assets/img/fysioterapeuter/oyvind.jpg"
                  alt="oyvind"
                  className="circle img-fluid"
                />
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 align-self-center">
              <h2 className="fs-1 text-center text-lg-start">
                Øyvind Ville Sæter
              </h2>
              <h3 className="fs-4 text-center text-lg-start">Fysioterapeut</h3>
              <p className="fs-5">
                Jeg er en fysioterapeut Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ipsum ratione voluptas modi nemo quisquam,
                voluptates eius ipsam dignissimos delectus. Adipisci deleniti
                sed dolores officia dolorum id accusantium, incidunt ex
                accusamus!
              </p>
            </div>
          </div>
          <div className="row mb-5 py-4">
            <div className="col-xs-12 col-lg-5">
              <div className="text-center text-lg-end mb-4 mb-lg-0">
                <img
                  src="/assets/img/fysioterapeuter/oskar.jpg"
                  alt="oskar"
                  className="circle img-fluid"
                />
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 align-self-center">
              <h2 className="fs-1 text-center text-lg-start">
                Oskar Rømyhr Lund
              </h2>
              <h3 className="fs-4 text-center text-lg-start">Kiropraktor</h3>
              <p className="fs-5">
                Jeg er en kiropraktor Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ipsum ratione voluptas modi nemo quisquam,
                voluptates eius ipsam dignissimos delectus. Adipisci deleniti
                sed dolores officia dolorum id accusantium, incidunt ex
                accusamus!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
