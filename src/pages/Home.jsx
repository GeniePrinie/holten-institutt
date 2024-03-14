import { Helmet } from "react-helmet";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Holten Institutt | Hjem</title>
        <meta name="description" content="Hjemmeside for Holten Institutt" />
      </Helmet>
      <main className="container my-5">
        <div className="row">
          <div className="col-lg">
            <h1 className="text-uppercase">Holten Institutt</h1>
            <h2>for medisinsk treningsterapi fysioterapi</h2>

            <p className="fs-5">
              Vi har spesialisert oss i medisinsk treningsterapi, manuell terapi
              og barnefysioterapi.
            </p>
            <p className="fs-5">
              Vi kan også hjelpe deg med behandling av alle typer skader og
              overbelastninger.
            </p>
            <ul className="fs-5">
              <li>
                Medisinsk treningsterapi – opptrening under veiledning av
                fysioterapeut
              </li>
              <li>
                Manuell terapi – massasje, tøyninger, mobilisering og
                manipulasjon
              </li>
              <li>Barnefysioterapi</li>
              <li>Allmenn fysioterapi</li>
            </ul>
          </div>
          <div className="col-lg">
            <img
              src="/assets/img/homepage/holtenfysioterapikontor.jpg"
              alt="holten fysioterapi kontor"
              className="img-fluid"
            />
          </div>
        </div>
      </main>
    </>
  );
}
