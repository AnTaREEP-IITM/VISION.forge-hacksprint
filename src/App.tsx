import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/auth/user-facility" element={<UserFacilityPortal />} />
        <Route path="/auth/administrative" element={<AdministrativePortal />} />
        
        {/* Patient Dashboard Routes */}
        <Route path="/patient" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/patient/dashboard" replace />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="dashboard/appointments" element={<Appointments />} />
          <Route path="dashboard/records" element={<MedicalRecords />} />
          <Route path="dashboard/prescriptions" element={<Prescriptions />} />
          <Route path="dashboard/vitals" element={<Vitals />} />
          <Route path="dashboard/messages" element={<Messages />} />
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>

        {/* Hospital Dashboard Routes */}
        <Route path="/hospital" element={<HospitalLayout />}>
          <Route index element={<Navigate to="/hospital/dashboard" replace />} />
          <Route path="dashboard" element={<HospitalDashboard />} />
          <Route path="beds" element={<BedManagement />} />
          <Route path="staff" element={<Staff />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="patients" element={<Patients />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="schemes" element={<Schemes />} />
        </Route>

        {/* Doctor Dashboard Routes */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route index element={<Navigate to="/doctor/dashboard" replace />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="patients" element={<Appointments />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="messages" element={<Messages />} />
          <Route path="records" element={<MedicalRecords />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* State Admin Routes */}
        <Route path="/state-admin" element={<StateAdminLayout />}>
          <Route index element={<Navigate to="/state-admin/overview" replace />} />
          <Route path="overview" element={<StateOverview />} />
          <Route path="hospitals" element={<HospitalManagement />} />
          <Route path="districts" element={<DistrictData />} />
          <Route path="resources" element={<ResourceAllocation />} />
          <Route path="schemes" element={<SchemeMonitoring />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
