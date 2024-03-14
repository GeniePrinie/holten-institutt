import { Helmet } from "react-helmet";

export function Kontakt() {
  return (
    <>
      <Helmet>
        <title>Holten Institutt | Kontakt</title>
        <meta name="description" content="Ta kontakt med Holten Institutt" />
      </Helmet>
      <main className="container-fluid my-5">
        <div className="text-center">
          <h1 className="mb-3">Bestille time</h1>
          <p className="fs-5">Timebestiling gjøres per telefon</p>
          <p className="fs-5 mb-0">Tlf. 22 15 12 64</p>
          <p className="fs-5 mb-0">Fax. 22 15 54 90</p>
        </div>
        <div className="text-center  mt-5">
          <h1 className="mb-3">Adresse</h1>
          <p className="fs-5">Sandakerveien 59 - 0477 Oslo</p>
          <div className="mb-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6479765987226!2d10.765699977329856!3d59.93798327491476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e15afef3a2b%3A0x78c055659e4f233c!2sSandakerveien%2059%2C%200477%20Oslo!5e0!3m2!1sen!2sno!4v1710334536097!5m2!1sen!2sno"
              height="550"
              style={{ border: "0", width: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
}
