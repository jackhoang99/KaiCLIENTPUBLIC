import React from 'react';
import Container from '../components/layout/Container';
import PageLayout from '../components/layout/PageLayout';
import BookingHeader from '../components/booking/BookingHeader';
import FirstTimerBundles from '../components/booking/FirstTimerBundles';
import AlaCarteSection from '../components/booking/AlaCarteSection';
import MembershipSection from '../components/booking/MembershipSection';
import BookingCart from '../components/booking/BookingCart';
import { useBookingData } from '../hooks/useBookingData';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const Booking = () => {
  const { firstTimerBundles, memberships, alaCartePackages, loading, error } = useBookingData();

  return (
    <PageLayout>
      <div className="min-h-screen bg-sand pt-32 pb-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        
        <Container>
          <div className="relative">
            <BookingHeader />
            
            {loading ? (
              <div className="flex justify-center py-20">
                <LoadingSpinner size="large" />
              </div>
            ) : error ? (
              <div className="text-center py-20 text-red-600">
                {error}
              </div>
            ) : (
              <>
                <FirstTimerBundles packages={firstTimerBundles} />
                <MembershipSection packages={memberships} />
                <AlaCarteSection packages={alaCartePackages} />
              </>
            )}
          </div>
        </Container>

        <BookingCart />
      </div>
    </PageLayout>
  );
};

export default Booking;