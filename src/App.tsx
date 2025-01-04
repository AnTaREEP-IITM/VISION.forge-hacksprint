import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { AuthenticationPage } from './components/Authentication/AuthenticationPage';
import { UserFacilityPortal } from './components/Authentication/UserFacilityPortal';

// Patient Dashboard imports
import { DashboardLayout } from './components/PatientDashboard/Layout/DashboardLayout';
import { PatientDashboard } from './components/PatientDashboard/Dashboard';
import { Appointments } from './components/PatientDashboard/Appointments';
import { MedicalRecords } from './components/PatientDashboard/MedicalRecords';
import { Prescriptions } from './components/PatientDashboard/Prescriptions';
import { Vitals } from './components/PatientDashboard/Vitals';
import { Messages } from './components/PatientDashboard/Messages';
import { Settings } from './components/PatientDashboard/Settings';

// Hospital Dashboard imports
import { HospitalLayout } from './components/HospitalDashboard/Layout/HospitalLayout';
import { HospitalDashboard } from './components/HospitalDashboard/Dashboard';
import { BedManagement } from './components/HospitalDashboard/BedManagement';
import { Staff } from './components/HospitalDashboard/Staff';
import { Doctors } from './components/HospitalDashboard/Doctors';
import { Patients } from './components/HospitalDashboard/Patients';
import { Equipment } from './components/HospitalDashboard/Equipment';
import { Schemes } from './components/HospitalDashboard/Schemes';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
       
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

        

        
      </Routes>
      
    </BrowserRouter>
  );
}
