import { getLodgingBusinessJsonLd, getVacationRentalJsonLd } from "@/lib/json-ld";

export function JsonLd() {
  const vacationRental = getVacationRentalJsonLd();
  const lodging = getLodgingBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRental) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }}
      />
    </>
  );
}
