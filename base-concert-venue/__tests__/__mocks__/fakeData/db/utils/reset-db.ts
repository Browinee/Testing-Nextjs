import { filenames, writeJSONToFile } from "@/lib/db/db-utils";
import { readFakeData } from "@/__tests__/__mocks__/fakeData";
export const resetDB = async () => {
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    console.log("WARNING: database reset unavailable outside test environment");
    return;
  }
  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
