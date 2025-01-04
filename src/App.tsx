import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';

// Patient Dashboard imports
import { DashboardLayout } from './components/PatientDashboard/Layout/DashboardLayout';
import { PatientDashboard } from './components/PatientDashboard/Dashboard';
import { Appointments } from './components/PatientDashboard/Appointments';
import { MedicalRecords } from './components/PatientDashboard/MedicalRecords';
import { Prescriptions } from './components/PatientDashboard/Prescriptions';
import { Vitals } from './components/PatientDashboard/Vitals';
import { Messages } from './components/PatientDashboard/Messages';
import { Settings } from './components/PatientDashboard/Settings';




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

     
      </Routes>
      
    </BrowserRouter>
  );
}
