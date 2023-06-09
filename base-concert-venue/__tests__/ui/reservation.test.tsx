import Home from "@/pages";
import { Reservation } from "@/components/reservations/Reservation";
import { render, screen } from "@testing-library/react";
test("reservation page shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);
  const seatCountText = await screen.findByText(/10 seats left/i);
  expect(seatCountText).toBeInTheDocument();
});
