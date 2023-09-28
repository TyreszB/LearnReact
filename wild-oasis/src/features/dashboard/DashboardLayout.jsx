import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  console.log(bookings);
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();
  if (isLoading1 || isLoading2) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledDashboardLayout>
  );
}
